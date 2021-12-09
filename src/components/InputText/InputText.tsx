import { FC, FormEvent, KeyboardEvent } from "react"
import './InputText.styles.css'

export type InputTextProps = {
    placeholder: string
    value: string
    onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void
    onChange: (e: FormEvent<HTMLInputElement>) => void
}

export const InputText: FC<InputTextProps> = ({ placeholder, value, onKeyDown, onChange }) => {
    return (
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown} />
    )
}