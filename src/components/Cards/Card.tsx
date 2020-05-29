import React from "react";
import icon from './style/images/pencil.png'
import {ICards} from "../../types";

interface Props {
    card: ICards;
    onDragStart: (e: {
        dataTransfer:
            { setData: (arg0: string, arg1: string) => void; };
    }, id: string) => void;
    popOverCardEditor: (data?: ICards) => void;
}

export const Card = (props: Props) => {
    const {card, onDragStart, popOverCardEditor} = props
    return (
        <div
            draggable={true}
            key={card.id}
            id={card.id}
            className="card-list__item"
            onDragStart={(e) => onDragStart(e, card.id)}
        >
            {card.title}
            <div
                onClick={() => popOverCardEditor(card)}
                className="card-list__item-icon">
                <img src={icon} alt="icon"/>
            </div>
        </div>
    )
}