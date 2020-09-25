var webSocketUsdtRate;

InitWebSocketUsdtRate();
function GoUsdtRate() {

    //Initialize WebSocket.
    webSocketUsdtRate.open();

    //Send data if WebSocket is opened.
    /*if (webSocket.OPEN && webSocket.readyState == 1)
        webSocket.send(nameTextBox.value);*/

    //If WebSocket is closed, show message.
    /*if (webSocket.readyState == 2 || webSocket.readyState == 3)
        webSocketStatusSpan.innerText = "WebSocket closed, the data can't be sent.";*/
}

function CloseWebSocketUsdtRate() {
    webSocketUsdtRate.close();
}

function InitWebSocketUsdtRate() {

    //If the WebSocket object isn't initialized, we initialize it.
    if (webSocketUsdtRate == undefined) {
        webSocketUsdtRate = new WebSocket(UsdtRateHandlerUrl);

        //Open connection  handler.
        webSocketUsdtRate.onopen = function () {
            console.log("webSocketUsdtRate opened");
            //webSocketStatusSpan.innerText = "WebSocket opened.";
            //webSocket.send(nameTextBox.value);
        };

        //Message data handler.
        webSocketUsdtRate.onmessage = function (e) {
            var tempData = e.data;
            //console.log(tempData);

            var obj = JSON.parse(tempData);
            var Datetime = obj.Datetime;
            var UsdttwdCost = obj.UsdttwdCost;

            UsdtRate.innerText = RoundToDecimal2(UsdttwdCost);
        };

        //Close event handler.
        webSocketUsdtRate.onclose = function () {
            console.log("webSocketUsdtRate closed");
            //webSocketUsdtRate.innerText = "WebSocket closed.";
        };

        //Error event handler.
        webSocketUsdtRate.onerror = function (e) {
            console.log("webSocketUsdtRate ERROR  e.message");
            //webSocketUsdtRate.innerText = e.message;
        }
    }
}
