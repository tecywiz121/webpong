$(function () {
    var check_player_result = function (data) {
        if (data.status === 'waiting') {
            setTimeout(check_player, 1000);
        } else {
            window.location.reload(true);
        }
    };

    var check_player = function () {
        $.get(POLL_URL, check_player_result, 'json');
    };
    setTimeout(check_player, 1000);
});
