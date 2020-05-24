export interface IState {
    boards: { boards: {
        id: number,
        title: string,
        _background: string
    }[]}
    lists: { lists: {
        "id": number,
        "board_id": number,
        "title": string,
        "position": number,
        "archived": boolean
    }[]},
    cards: {cards: {
            "id": number,
            "list_id": number,
            "board_id": number,
            "title": string,
            "users": number[],
            "description": string,
            "slug": string,
            "archived": number
        }[]},
    users: {users: []},
    dataRequest: {
        loading: boolean,
        error: null
    },
    popOver: {
        pop_over: boolean,
        position: number,
        currentListId: number | null,
        isActiveBoardMenu: boolean,
        isActiveListCreator: boolean,
        isActiveCardCreator: boolean
    }
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

export interface ICardsResponse {
    "id": number,
    "listId": number,
    "boardId": number,
    "title": string,
    "description": string,
    "slug": string,
    "archived": number
}
