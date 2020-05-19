import React from "react";
import "./style/Lists.scss"
import {ListsView} from "./ListsView";
import {IListsResponse} from "../../types";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ListCreator} from "./ListCreator";
import {useParams} from "react-router";
import {List} from "./List";
import {EditableName} from "../MultipleComponents/EditableName";

const Lists = (props: any) => {
    const {id_board}: any = useParams();
    const boardId = id_board;
    const {lists} = props;
    const addListName = (text: string) => {
        const position = lists.length + 1;
        const archived = false;
        console.log(text)
        props.createList(boardId, text, position, archived)
    }
    const editListName = (id: string, newTitle: string) =>{
        const newListTitle = lists.find((object: any) => object.boardId === boardId && object.id === id);
        newListTitle.title = newTitle;
        props.renameBoard(id, newListTitle);
    }

    const editClass = (className: string) => {
        return className + "__variant"
    }
    return(
        <ListsView
            listCreator={<ListCreator addListName={addListName}/>}
            oneList={<List lists={lists}
                           boardId={boardId}
                           editText={editListName}
                           editClass={editClass}/>}
        />
    )
}

const mapStateToProps = ({lists}: { lists: IListsResponse[] }) => {
    return lists;
}

export default connect(mapStateToProps, actions)(Lists);