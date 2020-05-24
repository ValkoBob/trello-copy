import React from 'react';
import './../Board/style/Board.scss';
import Lists from "../Lists";
import BoardCheckerClick from "./BoardCheckerClick";

interface Props {
    editableName: JSX.Element[] | JSX.Element,
    boardMenu: JSX.Element[] | JSX.Element,
    boardMenuButton: JSX.Element[] | JSX.Element,
    popOverComponents: JSX.Element[] | JSX.Element
}

export const BoardView = (props: Props) => {
    return (
        <>
        <BoardCheckerClick>
            <div className="board-wrapper">
                <div className="board-content">
                    <div className="board-header">
                        {props.editableName}
                        <div className="board-users">
                            <div className="board-users__ava">ava</div>
                            <span className="board-users__invite">Запросити</span>
                        </div>
                        {props.boardMenuButton}
                    </div>
                    <Lists />
                </div>
                {props.boardMenu}
            </div>
        </BoardCheckerClick>
        {props.popOverComponents}
        </>
    )
}
