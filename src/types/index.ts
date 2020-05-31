export interface IState {
    boards: { boards: IBoards[]}
    lists: { lists: ILists[]},
    cards: {cards: ICards[]},
    users: {users: []},
    dataRequest: IDataRequest,
    popOver: IPopOver
}

export interface IBoards {
    id: string,
    title: string,
    background: string
}

export interface ILists{
    "id": string,
    "boardId": string,
    "title": string,
    "position": number,
    "archived": boolean
}

export interface ICards {
    "id": string,
    "listId": string,
    "boardId": string,
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
    currentListId: string | null,
    isActiveBoardMenu: boolean,
    isActiveListCreator: boolean,
    isActiveCardCreator: boolean,
    isActiveCardEditor: boolean,
    data: ICards,
    isActivePopOverCard: boolean,
    dataPopOverCard: ICards
}
