import React from 'react';
import "./style/Cards.scss"
import {CardsView} from "./CardsView";
import {CardCreator} from "./CardCreator";
import { Card } from './Card';
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {ICardsResponse} from "../../types";

const Cards = (props: any) => {
    const {cards, boardId, listId} = props;
    const addCardName = (newCard: string) => {
        const archived= false;
        props.createCard(listId, boardId, newCard, archived)
    }
    return (
        <CardsView
            cardCreator={<CardCreator addCardName={addCardName}/>}
            oneCard={<Card cards={cards} boardId={boardId} listId={listId}/>}
        />
    )
}

const mapStateToProps = ({cards}: { cards: ICardsResponse[] }) => {
    return cards;
}

export default connect(mapStateToProps, actions)(Cards);
