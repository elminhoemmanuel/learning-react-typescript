import React from 'react'
import { IFormInput } from "../../pages/index"
import {  Path, UseFormRegister } from "react-hook-form";


type InputProps = {
    label: Path<IFormInput>,
    register: UseFormRegister<IFormInput>,
    required: boolean
} & React.ComponentProps<'input'>



const CustomInput = ({  register, label, required, ...rest }: InputProps) => {
    return (
        <input {...register(label, { required })} type="text" {...rest} />
    )
}

export default CustomInput