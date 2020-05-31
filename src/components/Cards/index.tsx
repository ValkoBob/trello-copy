import React from 'react';
import "./style/Cards.scss"
import {CardsView} from "./CardsView";
import {CardCreator} from "./CardCreator";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ICards, IState} from "../../types";
import {CardList} from "./CardList";

interface Props {
    createCard: (listId: string,
                  boardId: string,
                  newCard: string,
                  archived: boolean,
                  position: number) => void;
    popOverCardEditor: (data?: ICards) => void;
    popOverCard: (data?: ICards) => void;
    cards: ICards[];
    boardId: string;
    listId: string;
}

const Cards = (props: Props) => {
    const {cards, boardId, listId} = props;
    const expectedCards = cards!.filter((card: ICards) =>
        (card.listId === listId && card.boardId === boardId)
    )
    const sortedCards = expectedCards.sort((a: ICards, b: ICards) =>
        (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0))
    const addCardName = (newCard: string) => {
        const archived = false;
        const position = expectedCards.length + 1;
        if (props.createCard) {
            props.createCard(listId, boardId, newCard, archived, position)
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
                />
            }
        />
    )
}

const mapStateToProps = (state: IState) => {
    const {cards} = state.cards
    return {cards};
}

export default connect(mapStateToProps, actions)(Cards);
