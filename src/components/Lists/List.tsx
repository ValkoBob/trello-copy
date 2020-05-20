import React from "react";
import {EditableName} from "../MultipleComponents/EditableName";
import Cards from "../Cards";

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
                        <Cards listId={list.id} boardId={boardId}/>
                    </div>
                )
            }
        })
    )
}