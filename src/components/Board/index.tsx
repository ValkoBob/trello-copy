import React, {useEffect} from 'react';
import {BoardView} from "./BoardView";
import {EditableName} from "../MultipleComponents/EditableName";
import {IBoards, IState} from "../../types";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {useParams} from "react-router";
import {Spinner} from "../MultipleComponents/Spinner";
import {BoardMenu, BoardMenuButton} from "./BoardMenu";
import {PopOverComponents} from "../PopOverComponents";
import {BoardProps} from "../../types/board-types.dt";


const Board: React.FunctionComponent<BoardProps> = (props): JSX.Element => {
    const {id_board} = useParams();
    const {boards, loading, error, isActiveBoardMenu} = props;
    const objectWithBoard = boards.find((object: IBoards) => object.id === id_board)
    useEffect(() => {
        props.fetchBoards();
        props.fetchLists();
        props.fetchCards();
    }, [])
    const editText = (id: string|undefined, newTitle: string) => {
        const newBoardTitle = objectWithBoard;
        newBoardTitle!.title = newTitle;
        if (newBoardTitle) {
            if (id != null) {
                props.renameBoard(id, newBoardTitle);
            }
        }
    }
    const editClass = (className: string) => {
        return className + "__variant"
    }
    const isVisibleMenu = (isShow: boolean) => {
        props.onClickBoardMenu(isShow)
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
                isVisible={isActiveBoardMenu}
            />}
            boardMenuButton={<BoardMenuButton isVisibleMenu={isVisibleMenu}/>}
            popOverComponents={<PopOverComponents/>}
        />
    )
}

const mapStateToProps = (state: IState) => {
    const {boards} = state.boards;
    const {lists} = state.lists;
    const {loading, error} = state.dataRequest
    const {isActiveBoardMenu} = state.popOver
    return {lists, boards, loading, error, isActiveBoardMenu};
}

export default connect(mapStateToProps, actions)(Board);
