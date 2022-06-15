import React from "react";

export const EventComponent: React.FC = (e) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log("I'm being dragged!")
    }

    return(
        <div>
            <h1>Event Component</h1>
            <input onChange={(e) => onChange}/>

            <div draggable onDragStart={onDragStart}>Drag me!</div>
        </div>
    )
}

