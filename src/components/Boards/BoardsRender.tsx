import React from 'react';
import {IBoardsResponse} from "../../types";
import {Link} from "react-router-dom";

export const BoardsRender = ({boards}: {boards: IBoardsResponse[]}) : any=> {
    return (
        boards.map((board: IBoardsResponse) => {
                return (
                    <li key={board.id} className="boards-list__item">
                        <Link to={`/b/${board.id}/${changeTitle(board.title)}`} style={{textDecoration: 'none'}}
                              className="boards-list__item">
                            <div className="boards-list__tile">
                                {board.title}
                            </div>
                        </Link>
                    </li>
                )
            })
    )
}

export const changeTitle = (title: string) => {
    const str = title.replace(/[ @:?#&=\/\\]/g, "-");
    return str.toLowerCase();
}
