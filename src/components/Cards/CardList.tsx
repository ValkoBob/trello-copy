import React, {useEffect, useState} from 'react'
import {Card} from "./Card";

export const CardList = (props: any) => {
    const {cards, listId} = props
    const [state, setState] = useState({cards})
    useEffect(()=> setState({cards}),[cards])
    const onDragOver = (e: any) => {
        e.preventDefault()
    }
    const onDragStart = (e: any, id: number) => {
        e.dataTransfer.setData("id", id)
    }
    const onDrop = (e: any) => {
        e.preventDefault()
        const updatedCards = state.cards;
        const idFrom = e.dataTransfer.getData('id');
        const idTo = e.target.getAttribute("id")
        if(idFrom === idTo) {
            return
        }
        console.log(idFrom + "-" + idTo)
        const element =
        updatedCards.splice(idTo, 0, );
        console.log(updatedCards)

    }
    return (
        <div className="card-list"
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            {state.cards.map((card: any, index: number) => {
                    return (
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            onDragStart={onDragStart}
                        />
                    )
                }
            )}
        </div>
    )
}