// InputForm.js
import { Input } from "antd";
import React from "react";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
    const { placeholder = 'Nhập text', onChange, value, ...rests } = props;

    const handleOnChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <WrapperInputStyle
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
            {...rests}
        />
    );
}

export default InputForm;
