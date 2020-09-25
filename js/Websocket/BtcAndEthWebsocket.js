

var webSocketStatusSpan = document.getElementById("webSocketStatusSpan");



var nameTextBox = document.getElementById("nameTextBox");

var webSocket;

//The address of our HTTP-handler  :58584 http://brickerbtc.servehttp.com

InitWebSocket();
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
        webSocket = new WebSocket(BtcAndEthHandlerUrl);

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
            var ExchangeName = obj.ExchangeName;
            var Symbol = obj.Symbol;
            var Price1 = obj.Price1;
            var Amount1 = obj.Amount1;
            var Price2 = obj.Price2;
            var Amount2 = obj.Amount2;
            var Price3 = obj.Price3;
            var Amount3 = obj.Amount3;
            var Price4 = obj.Price4;
            var Amount4 = obj.Amount4;
            var Price5 = obj.Price5;
            var Amount5 = obj.Amount5;

            if (ExchangeName == "Binance") {

                if (Symbol == "Btcusdt") {
                    webSocketReceive_Binance_Btcusdt_Price1.innerText
                        = toCurrency(RoundToDecimal2(Price1));
                    webSocketReceive_Binance_Btcusdt_Amount1.innerText = Amount1;
                    webSocketReceive_Binance_Btcusdt_Price2.innerText
                        = toCurrency(RoundToDecimal2(Price2));
                    webSocketReceive_Binance_Btcusdt_Amount2.innerText = Amount2;
                    webSocketReceive_Binance_Btcusdt_Price3.innerText
                        = toCurrency(RoundToDecimal2(Price3));
                    webSocketReceive_Binance_Btcusdt_Amount3.innerText = Amount3;
                    webSocketReceive_Binance_Btcusdt_Price4.innerText
                        = toCurrency(RoundToDecimal2(Price4));
                    webSocketReceive_Binance_Btcusdt_Amount4.innerText = Amount4;
                    webSocketReceive_Binance_Btcusdt_Price5.innerText
                        = toCurrency(RoundToDecimal2(Price5));
                    webSocketReceive_Binance_Btcusdt_Amount5.innerText = Amount5;
                    
                } else if (Symbol == "Ethusdt") {
                    webSocketReceive_Binance_Ethusdt_Price1.innerText
                        = toCurrency(RoundToDecimal2(Price1));
                    webSocketReceive_Binance_Ethusdt_Amount1.innerText = Amount1;
                    webSocketReceive_Binance_Ethusdt_Price2.innerText
                        = toCurrency(RoundToDecimal2(Price2));
                    webSocketReceive_Binance_Ethusdt_Amount2.innerText = Amount2;
                    webSocketReceive_Binance_Ethusdt_Price3.innerText
                        = toCurrency(RoundToDecimal2(Price3));
                    webSocketReceive_Binance_Ethusdt_Amount3.innerText = Amount3;
                    webSocketReceive_Binance_Ethusdt_Price4.innerText
                        = toCurrency(RoundToDecimal2(Price4));
                    webSocketReceive_Binance_Ethusdt_Amount4.innerText = Amount4;
                    webSocketReceive_Binance_Ethusdt_Price5.innerText
                        = toCurrency(RoundToDecimal2(Price5));
                    webSocketReceive_Binance_Ethusdt_Amount5.innerText = Amount5;

                }
                
            } else if (ExchangeName == "Bitopro") {
                if (Symbol == "Btctwd") {
                    webSocketReceive_Bitopro_Btctwd_Price1.innerText
                        = toCurrency(RoundToInt(Price1));
                    webSocketReceive_Bitopro_Btctwd_Amount1.innerText = Amount1;
                    webSocketReceive_Bitopro_Btctwd_Price2.innerText
                        = toCurrency(RoundToInt(Price2));
                    webSocketReceive_Bitopro_Btctwd_Amount2.innerText = Amount2;
                    webSocketReceive_Bitopro_Btctwd_Price3.innerText
                        = toCurrency(RoundToInt(Price3));
                    webSocketReceive_Bitopro_Btctwd_Amount3.innerText = Amount3;
                    webSocketReceive_Bitopro_Btctwd_Price4.innerText
                        = toCurrency(RoundToInt(Price4));
                    webSocketReceive_Bitopro_Btctwd_Amount4.innerText = Amount4;
                    webSocketReceive_Bitopro_Btctwd_Price5.innerText
                        = toCurrency(RoundToInt(Price5));
                    webSocketReceive_Bitopro_Btctwd_Amount5.innerText = Amount5;

                } else if (Symbol == "Ethtwd") {
                    webSocketReceive_Bitopro_Ethtwd_Price1.innerText
                        = toCurrency(RoundToInt(Price1));
                    webSocketReceive_Bitopro_Ethtwd_Amount1.innerText = Amount1;
                    webSocketReceive_Bitopro_Ethtwd_Price2.innerText
                        = toCurrency(RoundToInt(Price2));
                    webSocketReceive_Bitopro_Ethtwd_Amount2.innerText = Amount2;
                    webSocketReceive_Bitopro_Ethtwd_Price3.innerText
                        = toCurrency(RoundToInt(Price3));
                    webSocketReceive_Bitopro_Ethtwd_Amount3.innerText = Amount3;
                    webSocketReceive_Bitopro_Ethtwd_Price4.innerText
                        = toCurrency(RoundToInt(Price4));
                    webSocketReceive_Bitopro_Ethtwd_Amount4.innerText = Amount4;
                    webSocketReceive_Bitopro_Ethtwd_Price5.innerText
                        = toCurrency(RoundToInt(Price5));
                    webSocketReceive_Bitopro_Ethtwd_Amount5.innerText = Amount5;

                }
                
            } else if (ExchangeName == "Maicoin") {
                if (Symbol == "Btctwd") {
                    webSocketReceive_Maicoin_Btctwd_Price1.innerText
                        = toCurrency(RoundToInt(Price1));
                    webSocketReceive_Maicoin_Btctwd_Amount1.innerText = Amount1;
                    webSocketReceive_Maicoin_Btctwd_Price2.innerText
                        = toCurrency(RoundToInt(Price2));
                    webSocketReceive_Maicoin_Btctwd_Amount2.innerText = Amount2;
                    webSocketReceive_Maicoin_Btctwd_Price3.innerText
                        = toCurrency(RoundToInt(Price3));
                    webSocketReceive_Maicoin_Btctwd_Amount3.innerText = Amount3;
                    webSocketReceive_Maicoin_Btctwd_Price4.innerText
                        = toCurrency(RoundToInt(Price4));
                    webSocketReceive_Maicoin_Btctwd_Amount4.innerText = Amount4;
                    webSocketReceive_Maicoin_Btctwd_Price5.innerText
                        = toCurrency(RoundToInt(Price5));
                    webSocketReceive_Maicoin_Btctwd_Amount5.innerText = Amount5;

                } else if (Symbol == "Ethtwd") {
                    webSocketReceive_Maicoin_Ethtwd_Price1.innerText
                        = toCurrency(RoundToInt(Price1));
                    webSocketReceive_Maicoin_Ethtwd_Amount1.innerText = Amount1;
                    webSocketReceive_Maicoin_Ethtwd_Price2.innerText
                        = toCurrency(RoundToInt(Price2));
                    webSocketReceive_Maicoin_Ethtwd_Amount2.innerText = Amount2;
                    webSocketReceive_Maicoin_Ethtwd_Price3.innerText
                        = toCurrency(RoundToInt(Price3));
                    webSocketReceive_Maicoin_Ethtwd_Amount3.innerText = Amount3;
                    webSocketReceive_Maicoin_Ethtwd_Price4.innerText
                        = toCurrency(RoundToInt(Price4));
                    webSocketReceive_Maicoin_Ethtwd_Amount4.innerText = Amount4;
                    webSocketReceive_Maicoin_Ethtwd_Price5.innerText
                        = toCurrency(RoundToInt(Price5));
                    webSocketReceive_Maicoin_Ethtwd_Amount5.innerText = Amount5;

                }
                
            }
            



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
