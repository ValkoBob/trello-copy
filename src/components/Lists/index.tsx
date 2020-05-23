import React from "react";
import "./style/Lists.scss"
import {ListsView} from "./ListsView";
import {IListsResponse} from "../../types";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ListCreator} from "./ListCreator";
import {useParams} from "react-router";
import {List} from "./List";

const Lists = (props: any) => {
    const {id_board}: any = useParams();
    const boardId = id_board;
    const {lists} = props;
    const expectedLists = lists.filter((list: any) =>
        list.boardId === boardId)
    const sortedLists = expectedLists.sort((a: any,b: any) =>
        (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0))
    const addListName = (text: string) => {
        const position = sortedLists.length + 1;
        const archived = false;
        props.createList(boardId, text, position, archived)
    }
    const editListName = (id: string, newTitle: string) => {
        const newListTitle = sortedLists.find((object: any) => object.id === id);
        newListTitle.title = newTitle;
        props.renameBoard(id, newListTitle);
    }

    const editClass = (className: string) => {
        return className + "__variant"
    }

    return (
        <ListsView
            listCreator={<ListCreator addListName={addListName}/>}
            oneList={<List lists={sortedLists}
                      boardId={boardId}
                      editText={editListName}
                      editClass={editClass}/>
            }
        />
    )
}

const mapStateToProps = ({lists}: { lists: IListsResponse[] }) => {
    return lists;
}

export default connect(mapStateToProps, actions)(Lists);