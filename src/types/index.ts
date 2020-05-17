export interface IState {
    boards: {
        boards: {
        id: number,
        title: string,
        _background: string
    }[]}
    lists: {lists: {
        "id": number,
        "board_id": number,
        "title": string,
        "position": number,
        "archived": boolean
    }[]},
    cards: {cards: []},
    users: {users: []},
    dataRequest: {
        loading: boolean,
        error: null
    }
}

export interface IBoardsProps {
    fetchBoards(): void,

    createBoard(id: number, title: string, background: string): void,

    boards: IBoardsResponse[]
}

export interface IBoardsResponse {
    id: number,
    title: string,
    background: string
}

export interface IListsResponse {
    "id": number,
    "board_id": number,
    "title": string,
    "position": number,
    "archived": boolean
}
