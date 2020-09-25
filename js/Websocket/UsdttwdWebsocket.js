

var webSocket;

//The address of our HTTP-handler  :58584 http://brickerbtc.servehttp.com

/*
$(document).ready(function () {
    console.log("document . ready!");
    InitWebSocket();
});*/

window.onload = function () {
    InitWebSocket();
};


function Go() {

    //Initialize WebSocket.
    webSocket.open();

    //Send data if WebSocket is opened.
    /*if (webSocket.OPEN && webSocket.readyState == 1)
        webSocket.send(nameTextBox.value);*/

    //If WebSocket is closed, show message.
    /*if (webSocket.readyState == 2 || webSocket.readyState == 3)
        webSocketStatusSpan.innerText = "WebSocket closed, the data can't be sent.";*/
}

function CloseWebSocket() {
    webSocket.close();
}

function InitWebSocket() {

    //If the WebSocket object isn't initialized, we initialize it.
    if (webSocket == undefined) {
        webSocket = new WebSocket(UsdttwdHandlerUrl);

        //Open connection  handler.
        webSocket.onopen = function () {
            //webSocketStatusSpan.innerText = "WebSocket opened.";
            //webSocket.send(nameTextBox.value);
        };

        //Message data handler.
        webSocket.onmessage = function (e) {
            var tempData = e.data;
            //console.log(tempData);

            var obj = JSON.parse(tempData);

            var BtcusdtPrice = parseFloat(obj.BtcusdtPrice);
            var EthusdtPrice = parseFloat(obj.EthusdtPrice);
            var UsdtSellPrice = parseFloat(obj.UsdtSellPrice);

            //var ss = $("#BtcusdtPriceH2");

            //var ss2 = document.getElementById("BtcusdtPriceH2");


            //$("#BtcusdtPriceH2").html(toCurrency(Math.floor(BtcusdtPrice * UsdtSellPrice)));

            
            BtcSellPriceH2.innerText
                = toCurrency(Math.floor(BtcusdtPrice * UsdtSellPrice));

            EthSellPriceH2.innerText
                = toCurrency(Math.floor(EthusdtPrice * UsdtSellPrice));

            UsdtSellPriceH2.innerText
                = toCurrency(UsdtSellPrice);

            
        };

        //Close event handler.
        webSocket.onclose = function () {
            webSocketStatusSpan.innerText = "WebSocket closed.";
        };

        //Error event handler.
        webSocket.onerror = function (e) {
            webSocketStatusSpan.innerText = e.message;
        }
    }
}
