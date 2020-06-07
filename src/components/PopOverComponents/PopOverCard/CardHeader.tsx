import React from "react";
import {EditableName} from "../../MultipleComponents/EditableName";
import icon_card from '../style/images/card-icon.png'

export const CardHeader = (props: any) => {
  const {data, list, renameCard} = props
  const {card, boardId, listId} = data;
  const editText = (id: number, newTitle: string) => {
    renameCard(id, boardId, listId, newTitle)
  }
  const editClass = (className: string) => {
    return className + "__variant"
  }
  return (
      <div className="popover-card-header">
            <span className="popover-card-header__icon">
                <img src={icon_card} alt="icon"/>
            </span>
        <EditableName
            name={card[1].title}
            id={card[0]}
            editText={editText}
            editClass={editClass}
            className={"popover-card-header-title"}/>
        <div className="popover-card-header-inline">
          <p>
            у списку
            <span className="popover-card-header-inline__list">
              {list[1].title}
            </span>
          </p>
        </div>
      </div>
  )
}
