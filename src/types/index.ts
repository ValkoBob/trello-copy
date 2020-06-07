export interface IState {
    boards: { boards: IBoards[]}
    lists: { lists: ILists[]},
    cards: {cards: ICards[]},
    users: {users: [], "isAuthenticated": boolean,
        'token': number},
    dataRequest: IDataRequest,
    popOver: IPopOver
}

export interface IBoards {
    id: number,
    title: string
}

export interface ILists{
    "id": number,
    "boardId": number,
    "title": string,
    "position": number,
    "archived": boolean
}

export interface ICards {
    "id": number,
    "listId": number,
    "boardId": number,
    "title": string,
    "description": string,
    "slug": string,
    "archived": boolean,
    "position": number
}

export interface IDataRequest {
    loading: boolean,
    error: null
}

export interface IPopOver {
    pop_over: boolean,
    position: number,
    currentListId: number | null,
    isActiveBoardMenu: boolean,
    isActiveListCreator: boolean,
    isActiveCardCreator: boolean,
    isActiveCardEditor: boolean,
    data: ICards,
    isActivePopOverCard: boolean,
    dataPopOverCard: ICards
}
