import React from "react";
import icon from './style/images/pencil.png'
import {ICards} from "../../types";
import {useHistory} from "react-router";
import {changeTitle} from "../Boards/BoardsRender";

interface Props {
    card: any;
    onDragStart: any;
    /*(e: {
        dataTransfer:
            { setData: (arg0: number, arg1: number) => void; };
    }, id: number) => void*/
    popOverCardEditor: (data?: any) => void;
    popOverCard: (data?: any) => void
    boardId: number;
    listId: number;
}

export const Card = (props: Props) => {
    const {card, boardId, listId, onDragStart, popOverCardEditor, popOverCard} = props
    const history = useHistory()
    const showPopOverCard = () => {
        history.push(`/c/${card[0]}/${changeTitle(card[1].title)}`)
        popOverCard({card, boardId, listId})
    }
    const showQuickCardEditor = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = e.pageX;
        const width = document.body.clientWidth;
      console.log(e.pageY)
        /*let pos: number;*/
        popOverCardEditor({card, boardId, listId})
    }
    return (
        <div draggable={true}
            key={card[0]}
            id={card[0]}
            className="card-list__item"
            onDragStart={(e) => onDragStart(e, card.id)}>
            <span onClick={() => showPopOverCard()}>{card[1].title}</span>
            <div onClick={showQuickCardEditor}
                className="card-list__item-icon">
                <img src={icon} alt="icon"/>
            </div>
        </div>
    )
}
