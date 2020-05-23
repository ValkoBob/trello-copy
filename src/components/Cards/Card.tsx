import React from "react";


export const Card = (props: any) => {
    const {id, title, onDragStart} = props
    return (
        <div
            draggable={true}
            key={id}
            id={id}
            className="card-list__item"
            onDragStart={(e)=>onDragStart(e, id)}
        >
            {title}
        </div>
    )
}