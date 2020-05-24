import React from "react";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";

const BoardCheckerClick = (props: any) => {
    const handleOnClick = (e: any) => {
        if(e.target.className === "board-canvas"
            || e.target.className === "card-list"
            || e.target.className === "board-header") {
            props.checkOnClickBoard(true)
        }
    }
    return (
        <div onClick={handleOnClick} className="board">
            {props.children}
        </div>
    )
}


export default connect(null, actions)(BoardCheckerClick);
