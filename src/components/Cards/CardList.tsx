import React, {useEffect, useState} from 'react'
import {Card} from "./Card";
import {ICards} from "../../types";

interface Props {
  cards: any;
  popOverCardEditor: (data?: ICards) => void;
  popOverCard: (data?: ICards) => void;
  boardId: number;
  listId: number
}

export const CardList = (props: Props) => {
  const {cards, boardId, listId, popOverCardEditor, popOverCard} = props
  const [state, setState] = useState({cards})
  useEffect(() => setState({cards}), [cards])
  const onDragOver = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
  }
  const onDragStart = (e: { dataTransfer: { setData: (arg0: string, arg1: string) => void; }; },
                       id: string) => {
    e.dataTransfer.setData("id", id)
  }
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const updatedCards = state.cards;
    const idFrom = e.dataTransfer.getData('id');
    const idTo = (e.target as HTMLDivElement).getAttribute("id")
    if (idFrom === idTo) {
      return
    }
    console.log(idFrom + "-" + idTo)
    /*updatedCards.splice(idTo, 0,);*/
    console.log(updatedCards)

  }
  return (
      <div className="card-list"
           onDragOver={onDragOver}
           onDrop={onDrop}
      >
        {state.cards.map((card: any) => {
              return (
                  <Card
                      key={card[0]}
                      card={card}
                      boardId={boardId}
                      listId={listId}
                      onDragStart={onDragStart}
                      popOverCardEditor={popOverCardEditor}
                      popOverCard={popOverCard}
                  />
              )
            }
        )}
      </div>
  )
}
