import React from 'react';
import "./style/Cards.scss"
import {CardsView} from "./CardsView";
import {CardCreator} from "./CardCreator";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ICardsResponse, IState} from "../../types";
import {CardList} from "./CardList";

const Cards = (props: any) => {
    const {cards, boardId, listId, check} = props;
    const expectedCards = cards.filter((card: any) =>
        (card.listId === listId && card.boardId === boardId)
    )
    const sortedCards = expectedCards.sort((a: any, b: any) =>
        (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0))
    const addCardName = (newCard: string) => {
        const archived = false;
        const position = expectedCards.length + 1;
        props.createCard(listId, boardId, newCard, archived, position)
    }

    return (
        <CardsView
            cardCreator={
                <CardCreator
                addCardName={addCardName}
            />}
            cardList={
                <CardList
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
