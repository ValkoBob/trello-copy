import React from "react";
import {EditableName} from "../MultipleComponents/EditableName";

export const List = (props: any) => {
    const {lists, boardId, editText, editClass} = props;
    return (
        lists.map((list: any) => {
            if (list.boardId === boardId) {
                return (
                    <div key={list.id} className="board-content-list__item">
                        <div className="board-list-header">
                            <EditableName
                                name={list.title}
                                id={list.id}
                                editText={editText}
                                editClass={editClass} className={"board-list-name"}/>
                            <div className="board-list-header__icon">
                                ...
                            </div>
                        </div>
                        <div className="board-list-add">
                            <div className="board-list-add__card">
                                <span className="board-list-add__icon-add">+</span>
                                <span className="board-list-add__title">Додати картку</span>
                                <span className="board-list-add__title-another hide">Додати картку</span>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    )
}