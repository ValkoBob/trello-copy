import { combineReducers } from 'redux';
import {boards} from "./boards";
import {cards} from "./cards";
import {lists} from "./lists";
import {users} from "./users";


export default combineReducers({ boards, cards, lists, users});
