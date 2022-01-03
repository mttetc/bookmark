import { FC } from "react";
import { Link } from "react-router-dom";

export const Menu: FC = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </>
    )
}