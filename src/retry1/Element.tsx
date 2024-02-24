import React from "react";

interface Props {
    speed?: number;
    reverse?: boolean;
    className?: string
}


export const Element:React.FC<Props> = ({speed = 3, reverse = false, className}) => {
    const reversedDirection = reverse ? 'reverse' : ''
    const style: React.CSSProperties = {
        animation: `move ${speed}s linear infinite ${reversedDirection}`,
        // animationDelay: '0.5s',
    };
    return <span className={className} style={style}></span>;
}

