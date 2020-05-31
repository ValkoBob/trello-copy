import React from "react";
import {EditableName} from "../../MultipleComponents/EditableName";
import icon_card from '../style/images/card-icon.png'

export const CardHeader = (props: any) => {
    const {card, list, renameCard} = props
    const editText = (id: string, newTitle: string) => {
        card.title = newTitle
        renameCard(card.id, card)
    }
    const editClass = (className: string) => {
        return className + "__variant"
    }
    if(card.title) {
        return (
            <div className="popover-card-header">
            <span className="popover-card-header__icon">
                <img src={icon_card} alt="icon"/>
            </span>
                <EditableName
                    name={card.title}
                    id={card.id}
                    editText={editText}
                    editClass={editClass}
                    className={"popover-card-header-title"}/>
                <div className="popover-card-header-inline">
                    <p>
                        у списку
                        <span className="popover-card-header-inline__list">
                            {list.title}
                        </span>
                    </p>
                </div>
            </div>
        )
    }
    return null
}