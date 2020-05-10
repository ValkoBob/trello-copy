export interface IBoardsProps {
    fetchBoards():void,
    createBoard(id: number, title: string, background: string):void,
    boards: IBoardsResponse[]
}

export interface IBoardsResponse {
    id: number,
    title: string,
    background: string
}
