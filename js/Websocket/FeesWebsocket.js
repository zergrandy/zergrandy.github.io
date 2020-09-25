var webSocketFees;

InitwebSocketFees();
function GoFees() {

    //Initialize WebSocket.
    webSocketFees.open();

    //Send data if WebSocket is opened.
    /*if (webSocket.OPEN && webSocket.readyState == 1)
        webSocket.send(nameTextBox.value);*/

    //If WebSocket is closed, show message.
    /*if (webSocket.readyState == 2 || webSocket.readyState == 3)
        webSocketStatusSpan.innerText = "WebSocket closed, the data can't be sent.";*/
}

function ClosewebSocketFees() {
    webSocketFees.close();
}

function InitwebSocketFees() {

    //If the WebSocket object isn't initialized, we initialize it.
    if (webSocketFees == undefined) {
        webSocketFees = new WebSocket(FeesHandlerUrl);

        //Open connection  handler.
        webSocketFees.onopen = function () {
            console.log("webSocketFees opened");
            //webSocketStatusSpan.innerText = "WebSocket opened.";
            //webSocket.send(nameTextBox.value);
        };

        //Message data handler.
        webSocketFees.onmessage = function (e) {
            var tempData = e.data;
            console.log(tempData);

            var obj = JSON.parse(tempData);
            var Datetime = obj.Datetime;
            var BinanceBtcWithdrawFee = obj.BinanceBtcWithdrawFee;
            var BinanceEthWithdrawFee = obj.BinanceEthWithdrawFee;
            var BinanceFee = obj.BinanceFee;
            var BitoproFee = obj.BitoproFee;
            var MaicoinFee = obj.MaicoinFee;

            webSocketReceive_BinanceBtcWithdrawFee.innerText = RoundToDecimal(BinanceBtcWithdrawFee);
            webSocketReceive_BinanceEthWithdrawFee.innerText = RoundToDecimal(BinanceEthWithdrawFee);
            webSocketReceive_BinanceFee.innerText = RoundToDecimal(BinanceFee);
            webSocketReceive_BitoproFee.innerText = RoundToDecimal(BitoproFee);
            webSocketReceive_MaicoinFee.innerText = RoundToDecimal(MaicoinFee);

        };

        //Close event handler.
        webSocketFees.onclose = function () {
            console.log("webSocketFees closed");
            //webSocketFees.innerText = "WebSocket closed.";
        };

        //Error event handler.
        webSocketFees.onerror = function (e) {
            console.log("webSocketFees ERROR  e.message");
            //webSocketFees.innerText = e.message;
        }
    }
}
