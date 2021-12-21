import { FC, FormEvent } from "react"
import './InputText.styles.css'

export type InputTextProps = {
    placeholder: string
    value: string
    onChange: (e: FormEvent<HTMLInputElement>) => void
}

export const InputText: FC<InputTextProps> = ({ placeholder, value, onChange }) => <input type="text" placeholder={placeholder} value={value} onChange={onChange} />