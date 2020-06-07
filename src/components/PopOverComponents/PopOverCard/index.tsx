import React from 'react'
import './../style/PopOverCard.scss'
import {CardHeader} from "./CardHeader";
import {ILists, IState} from "../../../types";
import {connect} from "react-redux";
import * as actions from "../../../redux/actions";
import {CardDescription} from "./CardDescription";
import {useHistory} from "react-router";
import {changeTitle} from "../../Boards/BoardsRender";
import {CardSidebar} from "./CardSidebar";

const PopOverCard = (props: any) => {
  const {isActivePopOverCard, dataPopOverCard, boards, update} = props
  const history = useHistory()
  if(dataPopOverCard.boardId === undefined) {
    return null
  }
  const {lists} = boards.find((board: { id: number; }) => board.id === dataPopOverCard.boardId);
  const expectedLists = Object.entries(lists)
  const list = expectedLists.find((element: any) => {
    if (element[0] === dataPopOverCard.listId) {
      return element
    }
  })
  const closeCard = () => {
    const title = boards.find((b: any) => b.id === dataPopOverCard.boardId).title;
    /*const board = boards.find((b: any) => b.id === dataPopOverCard.boardId);
    board.lists[dataPopOverCard.listId].title = 'test'*/
    history.push(`/b/${dataPopOverCard.boardId}/${changeTitle(title)}`)
    props.popOverCard(dataPopOverCard)
    /*props.rewriteBoard(dataPopOverCard.boardId, board)*/
  }
  return (
      <div className={`popover-wrapper ${isActivePopOverCard ? 'show' : 'hide'}`}>
        <div className="popover-card">
                <span
                    className="popover-card__close"
                    onClick={() => closeCard()}
                >x</span>
          <div className="popover-card-container">
            <CardHeader
                data={dataPopOverCard}
                renameCard={props.renameCard}
                list={list}
            />
            <div className="popover-card-main">
              <CardDescription
                  data={dataPopOverCard}
                  editDescriptionInCard={props.editDescriptionInCard}
              />
            </div>
            <div className="popover-card-sidebar">
              <CardSidebar/>
            </div>
          </div>
        </div>
      </div>
  )
}
const mapStateToProps = (state: any) => {
  const {boards, update} = state.boards
  const {isActivePopOverCard, dataPopOverCard} = state.popOver
  return {isActivePopOverCard, dataPopOverCard, boards, update};
}

export default connect(mapStateToProps, actions)(PopOverCard);
