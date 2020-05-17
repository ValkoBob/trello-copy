import React from "react";
import "./style/Lists.scss"
import {ListsView} from "./ListsView";
import {IListsResponse} from "../../types";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ListCreator} from "./ListCreator";
import {useParams} from "react-router";

export const Lists = (props: any) => {
    const {id_board}: any = useParams();
    const boardId = + id_board;
    const {lists} = props;
    const addListName = (text: string) => {
        const position = lists.length + 1;
        props.createList(text, boardId, position)
    }
    return(
        <ListsView listCreator={
            <ListCreator addListName={addListName}/>
        }/>
    )
}

const mapStateToProps = ({lists}: { lists: IListsResponse[] }) => {
    return lists;
}

export default connect(mapStateToProps, actions)(Lists);