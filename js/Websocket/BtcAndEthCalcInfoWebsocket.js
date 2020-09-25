
var CalcInfowebSocket;

//The address of our HTTP-handler  :58584 http://brickerbtc.servehttp.com

InitCalcInfoWebSocket();
function Go() {

    //Initialize WebSocket.
    CalcInfowebSocket.open();


}

function CloseWebSocket() {
    CalcInfowebSocket.close();
}

function InitCalcInfoWebSocket() {

    //If the WebSocket object isn't initialized, we initialize it.
    if (CalcInfowebSocket == undefined) {
        CalcInfowebSocket = new WebSocket(BtcAndEthCalcInfoHandlerUrl);

        //Open connection  handler.
        CalcInfowebSocket.onopen = function () {
            //webSocketStatusSpan.innerText = "WebSocket opened.";
            //webSocket.send(nameTextBox.value);
        };

        //Message data handler.
        CalcInfowebSocket.onmessage = function (e) {
            var tempData = e.data;
            //console.log(tempData);

            var obj = JSON.parse(tempData);
            var ExchangeName = obj.ExchangeName;
            var Symbol = obj.Symbol;
            var Datetime = obj.Datetime;
            var SellAmount = obj.SellAmount;
            var TwdGain = obj.TwdGain;
            var BinanceXxxBuyAmount = obj.BinanceXxxBuyAmount;
            var UsdtSpend = obj.UsdtSpend;
            var TwdSpend = obj.TwdSpend;
            var TwdNetEarning = obj.TwdNetEarning;
            var BenefitPercentage = obj.BenefitPercentage;
            var TakeDepth = obj.TakeDepth;

            if (ExchangeName == "Bitopro") {
                if (Symbol == "Btc") {
                    webSocketReceive_Bitopro_Btc_SellAmount.innerText = SellAmount;

                    webSocketReceive_Bitopro_Btc_TwdGain.innerText
                        = toCurrency(RoundToInt(TwdGain));

                    webSocketReceive_Bitopro_Btc_BinanceXxxBuyAmount.innerText = BinanceXxxBuyAmount;

                    webSocketReceive_Bitopro_Btc_UsdtSpend.innerText
                        = toCurrency(RoundToDecimal3(UsdtSpend));

                    webSocketReceive_Bitopro_Btc_TwdSpend.innerText
                        = toCurrency(RoundToInt(TwdSpend));

                    webSocketReceive_Bitopro_Btc_sellBrickTwdNetEarning.innerText
                        = toCurrency(RoundToInt(TwdNetEarning));

                    webSocketReceive_Bitopro_Btc_sellBrickBenefitPercentage.innerText = BenefitPercentage;

                    webSocketReceive_Bitopro_Btc_TakeDepth.innerText = TakeDepth;
                } else if (Symbol == "Eth") {
                    webSocketReceive_Bitopro_Eth_SellAmount.innerText = SellAmount;

                    webSocketReceive_Bitopro_Eth_TwdGain.innerText
                        = toCurrency(RoundToInt(TwdGain));

                    webSocketReceive_Bitopro_Eth_BinanceXxxBuyAmount.innerText = BinanceXxxBuyAmount;

                    webSocketReceive_Bitopro_Eth_UsdtSpend.innerText
                        = toCurrency(RoundToDecimal2(UsdtSpend));

                    webSocketReceive_Bitopro_Eth_TwdSpend.innerText
                        = toCurrency(RoundToInt(TwdSpend));

                    webSocketReceive_Bitopro_Eth_sellBrickTwdNetEarning.innerText
                        = toCurrency(RoundToInt(TwdNetEarning));

                    webSocketReceive_Bitopro_Eth_sellBrickBenefitPercentage.innerText = BenefitPercentage;

                    webSocketReceive_Bitopro_Eth_TakeDepth.innerText = TakeDepth;
                }
            }
            if (ExchangeName == "Maicoin") {
                if (Symbol == "Btc") {
                    webSocketReceive_Maicoin_Btc_SellAmount.innerText = SellAmount;

                    webSocketReceive_Maicoin_Btc_TwdGain.innerText
                        = toCurrency(RoundToInt(TwdGain));

                    webSocketReceive_Maicoin_Btc_BinanceXxxBuyAmount.innerText = BinanceXxxBuyAmount;

                    webSocketReceive_Maicoin_Btc_UsdtSpend.innerText
                        = toCurrency(RoundToDecimal2(UsdtSpend));

                    webSocketReceive_Maicoin_Btc_TwdSpend.innerText
                        = toCurrency(RoundToInt(TwdSpend));

                    webSocketReceive_Maicoin_Btc_sellBrickTwdNetEarning.innerText
                        = toCurrency(RoundToInt(TwdNetEarning));

                    webSocketReceive_Maicoin_Btc_sellBrickBenefitPercentage.innerText = BenefitPercentage;

                    webSocketReceive_Maicoin_Btc_TakeDepth.innerText = TakeDepth;
                } else if (Symbol == "Eth") {
                    webSocketReceive_Maicoin_Eth_SellAmount.innerText = SellAmount;

                    webSocketReceive_Maicoin_Eth_TwdGain.innerText
                        = toCurrency(RoundToInt(TwdGain));

                    webSocketReceive_Maicoin_Eth_BinanceXxxBuyAmount.innerText = BinanceXxxBuyAmount;

                    webSocketReceive_Maicoin_Eth_UsdtSpend.innerText
                        = toCurrency(RoundToDecimal3(UsdtSpend));

                    webSocketReceive_Maicoin_Eth_TwdSpend.innerText
                        = toCurrency(RoundToInt(TwdSpend));

                    webSocketReceive_Maicoin_Eth_sellBrickTwdNetEarning.innerText
                        = toCurrency(RoundToInt(TwdNetEarning));

                    webSocketReceive_Maicoin_Eth_sellBrickBenefitPercentage.innerText = BenefitPercentage;

                    webSocketReceive_Maicoin_Eth_TakeDepth.innerText = TakeDepth;
                }
            }
        };

        //Close event handler.
        CalcInfowebSocket.onclose = function () {
            console.log("WebSocket closed.");
        };

        //Error event handler.
        CalcInfowebSocket.onerror = function (e) {
            console.log(e.message);
        }
    }
}
