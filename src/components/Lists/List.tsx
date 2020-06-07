import React from "react";
import {EditableName} from "../MultipleComponents/EditableName";
import Cards from "../Cards";
import ListMenu from "./ListMenu";

interface Props {
  lists: any;
  boardId: number;
  editText: (id: number, newTitle: string) => void;
  editClass: (className: string) => string;
}

export const List = (props: Props) => {
  const {lists, boardId, editText, editClass} = props;
  const listsRender = lists.map((list: any) => {
    if (!list.archived) {
      return (
          <div key={list[0]} className="board-content-list__item">
            <div className="board-list-header">
              <EditableName
                  name={list[1].title}
                  id={list[0]}
                  editText={editText}
                  editClass={editClass} className={"board-list-name"}/>
              <ListMenu
                  listId={list[0]}
                  boardId={boardId}
              />
            </div>
            <Cards
                listId={list[0]}
                boardId={boardId}
                cards={list[1].cards}
            />
          </div>
      )
    }
  })
  return (<>{listsRender}</>)
}
