import { combineReducers } from 'redux';
import {boards} from "./boards";
import {cards} from "./cards";
import {lists} from "./lists";
import {users} from "./users";
import {dataRequest} from "./data-request";


export default combineReducers({ boards, cards, lists, users, dataRequest});
