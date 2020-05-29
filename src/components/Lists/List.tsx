import React from "react";
import {EditableName} from "../MultipleComponents/EditableName";
import Cards from "../Cards";
import ListMenu from "./ListMenu";
import {ILists} from "../../types";

interface Props {
    lists: ILists[];
    boardId: string;
    editText: (id: string, newTitle: string) => void;
    editClass: (className: string) => string;
}

export const List = (props: Props) => {
    const {lists, boardId, editText, editClass} = props;
        const listsRender = lists.map((list: ILists) => {
            if (!list.archived) {
                return (
                    <div key={list.id} className="board-content-list__item">
                        <div className="board-list-header">
                            <EditableName
                                name={list.title}
                                id={list.id}
                                editText={editText}
                                editClass={editClass} className={"board-list-name"}/>
                            <ListMenu listId={list.id}/>
                        </div>
                        <Cards
                            listId={list.id}
                            boardId={boardId}
                        />
                    </div>
                )
            }
        })
    return (<>{listsRender}</>)
}