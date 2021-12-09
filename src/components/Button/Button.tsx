import { FC } from "react"
import './Button.styles.css'

export type ButtonProps = {
    title: string
    type: 'button' | 'link'
    variant?: 'error'
    onClick: () => void
}

export const Button: FC<ButtonProps> = ({ title, type, variant, onClick }) => {
    return (
        <button className={`${type}${variant ? ` button-${variant}`: ''}`} type="submit" onClick={onClick}>{title}</button>
    )
}