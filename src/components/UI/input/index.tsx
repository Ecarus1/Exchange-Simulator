import React, { HTMLInputTypeAttribute, useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";

interface IInput {
  type: HTMLInputTypeAttribute;
  name: string;
  title: string;
  callback: (e: string, name: string) => void;
  val: string | number;
}

function Input({type, name, title, callback, val}: IInput): React.ReactElement {
  // Внутренний стейт по умолчанию с переданным value
  const [value, setValue] = useState(val);

  // Задержка для вызова props.onChange
  const changeThrottle = useCallback(
    debounce((value) => callback(value, name), 300),
    [callback, name]
  );

  // Обработчик изменений в поле
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    changeThrottle(e.target.value)
  }, [setValue, changeThrottle]);

  // Обновление стейта, если передан новый value
  useEffect(() => {
    setValue(val);
  }, [val]);

  return (
    <input type={type} name={name} placeholder={title} value={value} onChange={(e) => onChange(e)}/>
  );
}

export default React.memo(Input);