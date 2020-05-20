import React from "react";
import {ICardsResponse} from "../../types";


export const Card = (props: any) => {
    const{cards, boardId, listId} = props
    return(
        cards.map((card: any) => {
            if(card.boardId === boardId && card.listId === listId){
                return(
                    <div key={card.id} className="card-list__item">
                        {card.title}
                    </div>
                )
            }
        })
    )
}