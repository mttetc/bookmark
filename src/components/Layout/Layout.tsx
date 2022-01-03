import { FC } from "react";
import { Menu } from "../Menu/Menu";

export const Layout: FC = ({ children }) => {
    return (
        <>
            <Menu />

            {children}
        </>
    )
}