import React, { FC, useRef } from "react"
import sty from "./input.module.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    width: string;
    id: string;
}


const Input: FC<InputProps> = ({ placeholder, width, id, ...props }) => {
    return (
        <>
            <div className={sty.input} style={{width: width}} >
                <input type="text" id={id} placeholder=" " {...props} />
                <label className={sty.placeholder}htmlFor={id}>{placeholder}</label>
            </div>
        </>
    )
}

export default Input;