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

interface BoardProps {
  fetchBoards: (token: number) => void;
  fetchOneBoard: (id: number) => void;
  renameBoard: (boardId: number,
                title: string) => any;
  onClickBoardMenu: (isActiveBoardMenu: boolean) => any;
  boards: any;
  loading: boolean;
  error: any;
  isActiveBoardMenu: boolean;
  update: boolean
}

const Board: React.FunctionComponent<BoardProps> = (props): JSX.Element => {
  const {id_board} = useParams();
  // @ts-ignore
  const boardId = +id_board;
  const {boards, loading, error, isActiveBoardMenu, update} = props;
  const objectWithBoard = boards.find((object: IBoards) => object.id === boardId)
  useEffect(() => {
    props.fetchOneBoard(boardId);
  }, [update])
  const editText = (id: number | undefined, newTitle: string) => {
    if (id != null) {
      props.renameBoard(id, newTitle);
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
  } else {
    return (
        <BoardView
            editableName={
              <EditableName
                  name={objectWithBoard.title}
                  id={boardId}
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
}

const mapStateToProps = (state: any) => {
  const {boards, update} = state.boards;
  const {loading, error} = state.dataRequest
  const {isActiveBoardMenu} = state.popOver
  return {boards, loading, error, isActiveBoardMenu, update};
}

export default connect(mapStateToProps, actions)(Board);
