import {
    FETCH_BOARDS, DELETE_BOARD, CREATE_BOARD, RENAME_BOARD
} from "../constants/";
import {fetchData} from "./data-request";

export const fetchBoards = () =>
    fetchData("get", `/board`, FETCH_BOARDS, null)

export const deleteBoard = (id: string) =>
    fetchData("delete", `/board/${id}`, DELETE_BOARD, null);

export const createBoard = (title: string, background: string) =>
    fetchData("post", `/board`, CREATE_BOARD, {title, background})

export const renameBoard = (boardId: string, newData: {id: string, title: string, background: string}) =>
    fetchData("put", `/board/${boardId}`, RENAME_BOARD, newData)

