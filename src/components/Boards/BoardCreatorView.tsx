import React from "react";

export const BoardCreatorView = (props: any) => {
    return(
        <li className="boards-list__item" onClick={props.handleShow}>
            <div className="boards-list__tile boards-creator">
                <span>Створити нову дошку</span>
            </div>
        </li>
    )
}