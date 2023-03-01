import React, { useCallback } from "react";

import Button from "../UI/button";
import Input from "../UI/input";

import "./style.css";

interface ITicker {
  callbackInput: (data: string, name: string) => void;
  callbackSell: () => void;
  callbackBuy: () => void
}

function Ticker({callbackInput, callbackSell, callbackBuy}: ITicker): React.ReactElement {
  return(
    <div className="ticker">
        <div className="ticker__box">
          <p className="ticker__currency">cnh/rub</p>
        </div>

        <div className="ticker__box">
          <Input type="number" name="amount" title="1000000" callback={callbackInput} val={1}/>
        </div>

        <div className="ticker__controll">
          <div className="ticker__controll-box">
            <span className="ticker__price">8.558</span>
            <Button title="sell" callback={callbackSell} className="ticker__btn ticker__btn-sell"/>
          </div>

          <div className="ticker__controll-box">
            <span className="ticker__price">9.559</span>
            <Button title="buy" callback={callbackBuy} className="ticker__btn ticker__btn-buy"/>
          </div>
        </div>
    </div>
  );
}

export default React.memo(Ticker);