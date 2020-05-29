import React from "react";

export const NewBoardView = (props: {
    handleShow:
        ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
}) => {
    return (
        <button className="header-userbar-newboard" onClick={props.handleShow}>
                    <span className="header-userbar-newboard__add">
                        <i className="fas fa-plus">
                        </i>
                    </span>
        </button>
    )
}