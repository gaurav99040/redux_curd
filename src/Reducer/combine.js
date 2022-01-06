import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import Reducer from "./Reducer";

const presistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({ Reducer });
export default persistReducer(presistConfig, rootReducer );