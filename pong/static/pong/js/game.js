(function ($, global) {
    // The pong library from pyjs
    var pong;

    // The frame pyjs loads its stuff in
    var pyjsFrame;

    // Reference to the canvas
    var $canvas;

    // The simulator
    var game;

    // Worker thread to post updates to the server
    var worker;

    // The biggest time we've simulated
    var max_time = 0;

    // Wait until all of the various layers of pyjs have done
    // their business and the pong module is ready to use.
    var wait_for_pyjs = function (callback) {
        if (pyjsFrame.hasOwnProperty('$pyjs') && typeof(pyjsFrame.pyjslib) !== 'undefined') {
            if ('loaded_modules' in pyjsFrame.$pyjs) {
                if ('pong' in pyjsFrame.$pyjs.loaded_modules) {
                    pong = pyjsFrame.$pyjs.loaded_modules.pong();
                    callback();
                    return;
                }
            }
        }
        setTimeout(function() { wait_for_pyjs(callback); }, 100);
    };

    var clear_canvas = function () {
        $canvas.drawRect({
            x: 0,
            y: 0,
            width: pong.GAME_WIDTH,
            height: pong.GAME_HEIGHT,
            fillStyle: '#000',
            fromCenter: false
        });
    };

    // Key Codes
    var KEY_UP = 38,
        KEY_DOWN = 40;

    //
    // Initialization
    //

    var initialize_canvas = function () {
        $canvas = $('#pong_canvas');
        $canvas.attr({width:pong.GAME_WIDTH, height:pong.GAME_HEIGHT});
        clear_canvas();
    };

    var initialize_game = function (current_time) {
        game = pong.Pong();
        game.action(0, 0, 'B'); // Sets up the position for the paddles and balls
        game.current_time = current_time;
        send_action('', '');    // Send a null action to get the current state
    };

    var initialize_events = function () {
        $('body').keydown(keydown_handler)
            .keyup(keyup_handler);
    };

    var initialize_worker = function () {
        worker = new Worker(PONG_WORKER_PATH);
        worker.onmessage = worker_message_handler;
        worker.postMessage(PONG_ACTION_PATH);
    };

    //
    // Event Handlers
    //

    var toPyObject = function (obj) {
        var result;
        if ($.isArray(obj)) {
            result = pyjsFrame.pyjslib.list();
            for (var ii = 0; ii < obj.length; ii++) {
                result.append(toPyObject(obj[ii]));
            }
            return result;
        } else if ($.isFunction(obj) || $.isNumeric(obj) || typeof(obj) === 'string') {
            return obj;
        } else {
            result = pyjsFrame.pyjslib.dict();
            for (var ii in obj) {
                result.__setitem__(toPyObject(ii), toPyObject(obj[ii]));
            }
            return result;
        }
    };

    var worker_message_handler = function (event) {
        var action = event.data[0];
        var state = event.data[1];

        game.action(action[0], action[1], action[2], toPyObject(state));
        if (game.current_time < max_time) {
            game.tick_until(max_time);
        } else {
            max_time = game.current_time;
        }
    };

    var down_keys = {};

    var keydown_handler = function (event) {
        var keycode = event.which;
        if (keycode === KEY_UP || keycode === KEY_DOWN) {
            event.preventDefault();
            if (down_keys[keycode] !== true) {
                down_keys[keycode] = true;
                send_action(keycode, true);
            }
        }
    };

    var keyup_handler = function (event) {
        var keycode = event.which;
        if (keycode === KEY_UP || keycode === KEY_DOWN) {
            event.preventDefault();
            if (down_keys[keycode] === true) {
                down_keys[keycode] = false;
                send_action(keycode, false);
            }
        }
    };

    var send_action = function (keycode, was_pressed) {
        var a1, a2='N';

        // Flip the codes so that the up key looks like up
        if (keycode === KEY_UP) {
            a2 = 'D';
        } else {
            a2 = 'U';
        }

        if (was_pressed) {
            a1 = 'P';
        } else {
            a1 = 'R';
        }

        var action = a1 + a2;
        game.action(PONG_PLAYER, game.current_time, action);
        worker.postMessage([PONG_PLAYER, game.current_time, action]);
    };

    //
    // The main loop stuff
    //

    var draw = function () {
        // Clear the canvas
        clear_canvas();

        // Draw game objects

        var objects = game.current_state.objects.getArray();
        for (var ii = 0; ii < objects.length; ii++) {
            $canvas.drawRect({
                fillStyle: '#FFF',
                x: objects[ii].position_x,
                y: objects[ii].position_y,
                width: objects[ii].width,
                height: objects[ii].height
            });
        }
    };

    var main = function () {
        if (!game.current_state.match_over) {
            game.tick();
        }
        draw();
        if (game.current_time > max_time) {
            max_time = game.current_time;
        }
        setTimeout(main, 33);
    };

    $(function() {
        // Find the pyjs frame
        pyjsFrame = $('iframe').get(0).contentWindow;

        // Load the pong library
        wait_for_pyjs(function() {
            // Now that we have the library, initialize the canvas
            initialize_canvas();

            // Initialize worker
            initialize_worker();

            // Initialize the game
            initialize_game(CURRENT_TIME);

            // Set up events
            initialize_events();

            // Start the game
            main();
        });
    });

}(jQuery, this));
