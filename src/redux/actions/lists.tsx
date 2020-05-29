import {
    CREATE_LIST, DELETE_LIST, FETCH_LISTS, RENAME_LIST
} from "../constants/";
import {fetchData} from "./data-request";
import {ILists} from "../../types";

export const fetchLists = () =>
    fetchData("get", `/list`, FETCH_LISTS, null)

export const createList = (boardId: string, title: string, position: number, archived: boolean) =>
    fetchData("post", `/list`, CREATE_LIST, {boardId, title, position, archived})

export const deleteList = (id: string) => {
    fetchData("delete", `/list/${id}`, DELETE_LIST, null);
};

export const renameList = (listId: string, newData: ILists) =>
    fetchData("put", `/list/${listId}`, RENAME_LIST, newData)
