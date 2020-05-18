import React from "react";

export const NewBoardView = (props: any) => {
    return(
        <button className="header-userbar-newboard" onClick={props.handleShow}>
                    <span className="header-userbar-newboard__add">
                        <i className="fas fa-plus">
                        </i>
                    </span>
        </button>
    )
}