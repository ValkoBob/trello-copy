import React, {useEffect} from "react";
import "./style/Lists.scss"
import {ListsView} from "./ListsView";
import {ILists, IState} from "../../types";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ListCreator} from "./ListCreator";
import {useParams} from "react-router";
import {List} from "./List";

interface Props {
    createList: (boardId: number, title: string, position: number, archived: boolean) => void;
    renameList: any;
    onClickListCreator: (isActiveListCreator: boolean) => void;
    boards: any;
    isActiveListCreator: boolean;
    fetchOneBoard: any;
}

const Lists = (props: any) => {
    const {id_board} = useParams();
    // @ts-ignore
    const boardId = +id_board;
    const {boards, isActiveListCreator} = props;
    const expectBoard = boards.find((board: { id: number; }) => board.id === boardId);
    if(expectBoard.lists === undefined) {
        return null
    }
    const {lists} = expectBoard;
    const expectedLists = Object.entries(lists)
    const sortedLists = expectedLists.sort((a: any, b: any) =>
        (a[1].position > b[1].position) ? 1 : ((b[1].position > a[1].position) ? -1 : 0))
    const addListName = (text: string) => {
        const position = sortedLists.length + 1;
        const archived = false;
        if (props.createList && boardId != null) {
            props.createList(boardId, text, position, archived)
        }
    }
    const editListName = (id: number, newTitle: string) => {
        const newListTitle = sortedLists.find((object: any) => object[0] === id);
        if (newListTitle) {
            // @ts-ignore
            newListTitle[1].title = newTitle;
        }
        if (props.renameList && newListTitle) {
            // @ts-ignore
            props.renameList(boardId, id, newListTitle[1].position, newListTitle[1].title );
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

const mapStateToProps = (state: any) => {
    const {boards} = state.boards
    const {isActiveListCreator} = state.popOver
    const {loading} = state.dataRequest
    return {boards, isActiveListCreator, loading};
}

export default connect(mapStateToProps, actions)(Lists);
