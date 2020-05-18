import {
    FETCH_BOARDS, DELETE_BOARD, CREATE_BOARD, RENAME_BOARD
} from "../constants/";
import {fetchData} from "./data-request";

export const fetchBoards = () =>
    fetchData("get", `/board`, FETCH_BOARDS, null)

export const deleteBoard = (id: number) =>
    fetchData("delete", `/board/${id}`, DELETE_BOARD, null);

export const createBoard = (id: number, title: string, background: string) =>
    fetchData("post", `/board`, CREATE_BOARD, {id, title, background})

export const renameBoard = (boardId: number, newData: {id: number, title: string, background: string}) =>{
    console.log("renaming board...")
    return fetchData("put", `/board/${boardId}`, RENAME_BOARD, newData)
}

