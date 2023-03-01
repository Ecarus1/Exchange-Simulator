import React from "react";

interface IButton {
  title: string;
  callback: () => void;
  className: string
}

function Button({title, callback, className}: IButton): React.ReactElement {
  return (
    <button className={className} onClick={callback}>{title}</button>
  );
}

export default React.memo(Button);