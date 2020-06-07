import {
    CREATE_CARD, DELETE_CARD, RENAME_CARD,
    ADD_USER_TO_CARD, REMOVE_USER_FROM_CARD,
    EDIT_DESCRIPTION_IN_CARD, FETCH_CARDS
} from "../constants/";

type INITIAL_STATE_TYPE = {
    cards: {
        "id": number,
        "listId": number,
        "boardId": number,
        "title": string,
        "description": string,
        "slug": string,
        "position": number,
        "archived": boolean
    }[];
}

const INITIAL_STATE: INITIAL_STATE_TYPE = {
    "cards": []
};

export const cards = (state = INITIAL_STATE, action: any): INITIAL_STATE_TYPE => {
    switch (action.type) {
        case FETCH_CARDS:
            return {
                ...state,
                cards: action.payload
            }
        case CREATE_CARD:
            return {
                ...state,
                cards: [
                    ...state.cards,
                    action.payload
                ]
            }
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter((card) => {
                    return !(checkIdsCards(card.id, action.payload.id,
                        card.listId, action.payload.listId,
                        card.boardId, action.payload.boardId))
                })
            }
        case RENAME_CARD:
            return {
                ...state,
                cards: state.cards.map((card) => {
                    if (checkIdsCards(card.id, action.payload.id,
                        card.listId, action.payload.listId,
                        card.boardId, action.payload.boardId)) {
                        card.title = action.payload.title;
                        return card;
                    }
                    return card;
                })
            }
        /*case ADD_USER_TO_CARD:
            return {
                ...state,
                cards: state.cards.map((card) => {
                    // @ts-ignore
                    if (checkIds(card.id, action.payload.id,
                        // @ts-ignore
                        card.list_id, action.payload.listId,
                        // @ts-ignore
                        card.board_id, action.payload.boardId)) {
                        // @ts-ignore
                        return card.users.push(action.payload.id);
                    }
                    return card
                })
            }
        case REMOVE_USER_FROM_CARD:
            return {
                ...state,
                cards: state.cards.map((card) => {
                    // @ts-ignore
                    if (checkIds(card.id, action.payload.cardId,
                        // @ts-ignore
                        card.list_id, action.payload.listId,
                        // @ts-ignore
                        card.board_id, action.payload.boardId)) {
                        // @ts-ignore
                        return card.users.filter(user => user !== action.payload.userId);
                    }
                    return card
                })
            }*/
        case EDIT_DESCRIPTION_IN_CARD:
            return {
                ...state,
                cards: state.cards.map((card) => {
                    if (checkIdsCards(card.id, action.payload.id,
                        card.listId, action.payload.listId,
                        card.boardId, action.payload.boardId)) {
                        card.description = action.payload.description;
                        return card;
                    }
                    return card
                })
            }
        default:
            return state;
    }
}

const checkIdsCards = (cardId1: number, cardId2: number,
                  listId1: number, listId2: number,
                  boardId1: number, boardId2: number) => {
    return (cardId1 === cardId2  && listId1=== listId2 && boardId1 === boardId2)
}
