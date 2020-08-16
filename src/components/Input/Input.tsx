import React, { useState } from 'react';
import './input.scss';

interface Props {
    label: string,
    submitValue: (value: string) => void
}

const Input: React.FC<Props> = ({label, submitValue}) => {
    const [value, setValue] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const submitHandler = function (e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key.toLowerCase() === 'enter') {
            submitValue(value);
            setValue('');
        }
    };

    const onBlurHandler = function () :void {
        if (value) return;
        setIsFocused(false);
    }

    const focusedClass: string = isFocused ? ' field-focused' : '';

    return (
        <div className={"input-field" + focusedClass}>
            <label>{label}</label>
            <input 
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyUp={e => submitHandler(e)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => onBlurHandler()}
            />
        </div>
    )
}

export default Input;