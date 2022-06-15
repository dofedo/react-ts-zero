import React from 'react';

interface ChildProps {
    color: string;
    onClick: () => void;
    children ?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            <h1>{color}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}

export const ChildAsFC: React.FC<ChildProps> = ( {color, onClick, children} ) => {
    return (
        <div>
            <h1>{color}</h1>
            {children}
            <button onClick={onClick}>Click me</button>
        </div>
    )

}