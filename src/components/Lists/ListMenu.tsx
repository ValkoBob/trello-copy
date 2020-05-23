import React from "react";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";

const ListMenu = (props: any) => {
    const {listId} = props;
    const showPopOver = (e: any) => {
        const x = e.pageX;
        const width = document.body.clientWidth;
        let pos = 0;
        if(x > (width - 260)) {
            pos = width - 305;
        } else if(x > (width/2)) {
            pos = x - (305/2);
        } else {
            pos = x - 10;
        }
        props.popOverListMenu(pos, listId);
    }

    return(
        <div onClick={showPopOver} className="board-list-header__icon">
            ...
        </div>
    )
}

export default connect(null, actions)(ListMenu);