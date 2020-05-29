import React from "react";
import "./style/Lists.scss"
import {ListsView} from "./ListsView";
import {ILists, IState} from "../../types";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ListCreator} from "./ListCreator";
import {useParams} from "react-router";
import {List} from "./List";

interface Props {
    createList: (boardId: string, title: string, position: number, archived: boolean) => void;
    renameList: (listId: string, newData: ILists) => void;
    onClickListCreator: (isActiveListCreator: boolean) => void;
    lists: ILists[];
    isActiveListCreator: boolean;
}

const Lists = (props: Props) => {
    const {id_board} = useParams();
    const boardId = id_board != null ? id_board : '';
    const {lists, isActiveListCreator} = props;
    const expectedLists = lists!.filter((list: ILists) =>
        list.boardId === boardId)
    const sortedLists = expectedLists.sort((a: any, b: any) =>
        (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0))
    const addListName = (text: string) => {
        const position = sortedLists.length + 1;
        const archived = false;
        if (props.createList && boardId != null) {
            props.createList(boardId, text, position, archived)
        }
    }
    const editListName = (id: string, newTitle: string) => {
        const newListTitle = sortedLists.find((object: ILists) => object.id === id);
        newListTitle!.title = newTitle;
        if (props.renameList && newListTitle) {
            props.renameList(id, newListTitle);
        }
    }

    const editClass = (className: string) => {
        return className + "__variant"
    }

    const setActiveCreator = (isShow: boolean) => {
        if (props.onClickListCreator) {
            props.onClickListCreator(isShow)
        }
    }

    return (
        <ListsView
            listCreator={<ListCreator
                addListName={addListName}
                isActive={isActiveListCreator}
                setActiveCreator={setActiveCreator}
            />}
            oneList={<List lists={sortedLists}
                           boardId={boardId}
                           editText={editListName}
                           editClass={editClass}/>
            }
        />
    )
}

const mapStateToProps = (state: IState) => {
    const {lists} = state.lists
    const {isActiveListCreator} = state.popOver
    return {lists, isActiveListCreator};
}

export default connect(mapStateToProps, actions)(Lists);