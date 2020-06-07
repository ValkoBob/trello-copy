import React, {useEffect} from 'react';
import "./style/Cards.scss"
import {CardsView} from "./CardsView";
import {CardCreator} from "./CardCreator";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ICards, IState} from "../../types";
import {CardList} from "./CardList";

interface Props {
    createCard: (listId: number,
                  boardId: number,
                  newCard: string,
                  position: number) => void;
    popOverCardEditor: (data?: ICards) => void;
    popOverCard: (data?: ICards) => void;
    cards: ICards[];
    boardId: number;
    listId: number;
}

const Cards = (props: Props) => {
    const {cards, boardId, listId} = props;
    if(cards === undefined) {
        return null
    }
    const expectedCards = Object.entries(cards)
    const sortedCards = expectedCards.sort((a: any, b: any) =>
        (a[1].position > b[1].position) ? 1 : ((b[1].position > a[1].position) ? -1 : 0))
    const addCardName = (newCard: string) => {
        const position = expectedCards.length + 1;
        if (props.createCard) {
            props.createCard(listId, boardId, newCard, position)
        }
    }

    return (
        <CardsView
            cardCreator={
                <CardCreator
                addCardName={addCardName}
            />}
            cardList={
                <CardList
                    popOverCardEditor={props.popOverCardEditor}
                    popOverCard={props.popOverCard}
                    cards={sortedCards}
                    boardId={boardId}
                    listId={listId}
                />
            }
        />
    )
}


export default connect(null, actions)(Cards);
