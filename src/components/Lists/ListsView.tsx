import React from "react";

interface Props {
    listCreator: JSX.Element[] | JSX.Element,
    oneList: JSX.Element[] | JSX.Element
}

export const ListsView = (props: Props) => {
    return (
        <div className="board-canvas">
            {props.oneList}
            {props.listCreator}
        </div>
    )
}