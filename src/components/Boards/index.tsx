import React, {Component, useContext, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {BoardsView} from "./BoardsView";
import * as actions from "../../redux/actions";
import {IBoards, IState} from "../../types";
import BoardCreator from "./BoardCreator";
import {BoardsRender} from "./BoardsRender";
import {BoardCreatorView} from "./BoardCreatorView";
import {Spinner} from "../MultipleComponents/Spinner";

interface Props {
  fetchBoards: () => void,
  boards: IBoards[],
  loading: boolean,
  error: any,
  token: number
}

const Boards = (props: Props) => {
  const {boards, loading} = props;
  const [isShowCreator, setCreator] = useState(false)
  useEffect(() => {
      props.fetchBoards()
  }, [])


  const handleShowCreator = () => {
    setCreator(!isShowCreator)
  }

  if (loading) {
    return (
        <Spinner/>
    )
  } else {
    return (
        <BoardsView
            boardCreator={
              <BoardCreator
                  isShow={isShowCreator}
                  boardCreatorView={<BoardCreatorView handleShow={handleShowCreator}/>}
                  handleShow={handleShowCreator}
              />
            }
            boardsRender={
              <BoardsRender
                  boards={boards}
              />
            }
        />
    )
  }
}

const mapStateToProps = (state: IState) => {
  const {boards} = state.boards;
  const {loading, error} = state.dataRequest
  return {boards, loading, error};
}

export default connect(mapStateToProps, actions)(Boards);
