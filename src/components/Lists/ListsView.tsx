import React from "react";

interface Props {
    listCreator: JSX.Element[] | JSX.Element
}

export const ListsView = (props: Props) => {
    return (
        <div className="board-canvas">
            {props.listCreator}
            <div className="board-content__list">

            </div>
        </div>
    )
}