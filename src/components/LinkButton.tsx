import type { ReactNode } from "react";
import './link-button.css'

interface LinkButtonProps {
    url: string;
    children: ReactNode;
}

export function LinkButton({url, children}: LinkButtonProps) {
    return (
        <a href={url} className="link-btn">{children}</a>
    );
}