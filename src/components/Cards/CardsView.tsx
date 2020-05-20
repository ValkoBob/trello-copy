import React from 'react';

interface Props {
    cardCreator: JSX.Element[] | JSX.Element,
    oneCard: JSX.Element[] | JSX.Element
}

export const CardsView = (props: Props) => {
    return (
        <>
            <div className="card-list">
                {props.oneCard}
            </div>
            {props.cardCreator}
        </>
    )
}