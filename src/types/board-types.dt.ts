import {IBoards} from "./index";

export interface BoardProps {
    fetchBoards: () => void;
    fetchLists: () => void;
    fetchCards: () => void;
    renameBoard: (boardId: string,
                  newData: IBoards) => any;
    onClickBoardMenu: (isActiveBoardMenu: boolean) => any;
    boards: IBoards[];
    loading: boolean;
    error: any;
    isActiveBoardMenu: boolean;
}