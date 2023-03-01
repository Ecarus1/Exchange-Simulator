import React, { useCallback, useMemo } from "react";

import Ticker from "../../components/tiсker";
import ListTicker from "../../components/list-ticker";

function Tickers(): React.ReactElement {



  const callbacks = {
    createTiker: useCallback(() => {
      console.log("Создал тикер")
    }, []),
    onInputMoney: useCallback((data: string, name: string) => {
      console.log(data, name)
    }, []),
    onSell: useCallback(() => {
      console.log("Продал")
    }, []),
    onBuy: useCallback(() => {
      console.log("Купил")
    }, [])
  }

  const options = {
    exchanger: useMemo(() => ([
      {code: "EUR/USD", sell: 1.0577, buy: 1.5766},
      {code: "GBP/USD", sell: 1.2033, buy: 1.2022},
      {code: "EUR/JPY", sell: 144.21, buy: 143.77}
    ]), [])
  }

  const renders = {
    item: useCallback(() => (
      <Ticker
        callbackInput={callbacks.onInputMoney}
        callbackSell={callbacks.onSell}
        callbackBuy={callbacks.onBuy}
      />
    ), [])
  }

  return (
    <ListTicker createTiker={callbacks.createTiker} renderItem={renders.item}/>
  );
}

export default Tickers;