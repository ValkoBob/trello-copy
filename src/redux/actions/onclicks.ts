import {ONCLICK_BOARD_MENU, ONCLICK_CARD_CREATOR, ONCLICK_LIST_CREATOR} from "../constants";


export const onClickBoardMenu = (isActiveBoardMenu: boolean) => {
    return {
        type: ONCLICK_BOARD_MENU,
        payload: {isActiveBoardMenu}
    }
}

export const onClickListCreator = (isActiveListCreator: boolean) => {
    return {
        type: ONCLICK_LIST_CREATOR,
        payload: {isActiveListCreator}
    }
}

export const onClickCardCreator = (isActiveCardCreator: boolean) => {
    return {
        type: ONCLICK_CARD_CREATOR,
        payload: {isActiveCardCreator}
    }
}