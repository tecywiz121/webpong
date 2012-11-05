var ACTION_URL;

onmessage = function (event) {
    // Get the url to post to then switch to ajax message passing

    ACTION_URL = event.data;

    onmessage = function (event) {
        var time = event.data[1];
        var action = event.data[2];
        var data = "time="+time+"&action="+action;

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                var response = JSON.parse(request.responseText);
                postMessage(response);
            }
        };

        request.open("POST", ACTION_URL, true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(data);
    };
};
