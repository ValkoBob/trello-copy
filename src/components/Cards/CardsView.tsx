import React from 'react';

interface Props {
    cardCreator: JSX.Element[] | JSX.Element,
    cardList: JSX.Element[] | JSX.Element
}

export const CardsView = (props: Props) => {
    return (
        <>
            {props.cardList}
            {props.cardCreator}
        </>
    )
}