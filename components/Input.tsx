import React from 'react';

type InputProps = {
    val: string,
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = (props:InputProps) => {

    const { val, handleChange } = props

    return (
        <input
            type="text"
            value={val}
            onChange={handleChange}
        />
    )
};

export default Input;
