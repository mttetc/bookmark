import { FC } from "react"
import './Button.styles.css'

export type ButtonProps = {
    title: string
    buttonType?: 'button' | 'link'
    variant?: 'error'
    onClick?: (e: React.FormEvent) => void
}

export const Button: FC<ButtonProps> = ({ title, buttonType = 'button', variant, onClick }) => <button className={`${buttonType}${variant ? ` button-${variant}`: ''}`} type="submit" onClick={onClick}>{title}</button>