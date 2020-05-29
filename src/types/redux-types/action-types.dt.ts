import {IBoards} from "../index";

export interface IRenameBoard {
    boardId: number,
    newData: IBoards
}

export interface IClickBoardMenu {
    isActiveBoardMenu: boolean
}