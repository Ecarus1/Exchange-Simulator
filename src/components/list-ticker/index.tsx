import React from "react";
import Button from "../UI/button";

import "./style.css";

interface IListTicker {
  createTiker: () => void;
  renderItem: () => void;
}

function ListTicker({createTiker, renderItem}: IListTicker): React.ReactElement {
  return (
    <div className="list-ticker">

      <Button callback={createTiker} title="Создать тикер" className="list-ticker__btn"/>
    </div>
  );
}

export default React.memo(ListTicker);