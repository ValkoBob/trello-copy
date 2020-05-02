import {
    CREATE_CARD, DELETE_CARD, RENAME_CARD,
    ADD_USER_TO_CARD, REMOVE_USER_FROM_CARD,
    EDIT_DESCRIPTION_IN_CARD, FETCH_CARDS
} from "../constants/";

const INITIAL_STATE = {
    "cards": []
};

export const cards = (state = INITIAL_STATE, action: any) => {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_CARDS:
            return {
                ...state,
                // @ts-ignore
                cards: [...state.cards, ...action.payload]
            }
        case CREATE_CARD:
            return {
                ...state,
                cards: [
                    ...state.cards,
                    action.payload.newCard
                ]
            }
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter((card) => {
                    // @ts-ignore
                    return !(checkIds(card.id, action.payload.cardId,
                        // @ts-ignore
                        card.list_id, action.payload.listId,
                        // @ts-ignore
                        card.board_id, action.payload.boardId))
                })
            }
        case RENAME_CARD:
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
                        card.title = action.payload.title;
                        return card;
                    }
                    return card;
                })
            }
        case ADD_USER_TO_CARD:
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
            }
        case EDIT_DESCRIPTION_IN_CARD:
            return {
                ...state,
                card: state.cards.map((card) => {
                    // @ts-ignore
                    if (checkIds(card.id, action.payload.cardId,
                        // @ts-ignore
                        card.list_id, action.payload.listId,
                        // @ts-ignore
                        card.board_id, action.payload.boardId)) {
                        // @ts-ignore
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

const checkIds = (cardId1: number, cardId2: number,
                  listId1: number, listId2: number,
                  boardId1: number, boardId2: number) => {
    return (cardId1 === listId1 && cardId2 === listId2 && boardId1 === boardId2)
}
