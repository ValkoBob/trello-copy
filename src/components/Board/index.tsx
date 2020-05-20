import React, {useEffect, useState} from 'react';
import {BoardView} from "./BoardView";
import {EditableName} from "../MultipleComponents/EditableName";
import {IState} from "../../types";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {useParams} from "react-router";
import {Spinner} from "../MultipleComponents/Spinner";
import {BoardMenu, BoardMenuButton} from "./BoardMenu";

const Board = (props: any): any => {
    const {id_board}: any = useParams();
    const {boards, loading, error} = props;
    const objectWithBoard = boards.find((object: any) => object.id === id_board)
    useEffect(() => {
        props.fetchBoards();
        props.fetchLists();
        props.fetchCards();
    }, [])
    const editText = (id: string, newTitle: string) => {
        const newBoardTitle = objectWithBoard;
        newBoardTitle.title = newTitle;
        props.renameBoard(id, newBoardTitle);
    }
    const editClass = (className: string) => {
        return className + "__variant"
    }
    const [isVisible, setVisible] = useState(false)
    const isVisibleMenu = () => {
        setVisible(!isVisible)
    }
    if (loading || objectWithBoard === undefined) {
        return (
            <Spinner/>
        )
    }

    return (
        <BoardView
            editableName={
                <EditableName
                    name={objectWithBoard.title}
                    id={id_board}
                    editText={editText}
                    editClass={editClass}
                    className={"board-name"}
                />}
            boardMenu={<BoardMenu
                isVisibleMenu={isVisibleMenu}
                isVisible={isVisible}
            />}
            boardMenuButton={<BoardMenuButton isVisibleMenu={isVisibleMenu}/>}
        />
    )
}

const mapStateToProps = (state: IState) => {
    const {boards} = state.boards;
    const {lists} = state.lists;
    const {loading, error} = state.dataRequest
    return {lists, boards, loading, error};
}

export default connect(mapStateToProps, actions)(Board);
