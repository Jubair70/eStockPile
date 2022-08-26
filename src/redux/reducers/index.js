import { combineReducers } from "redux";
import { topMenu } from "./topMenu";
import {product} from "./product";

const rootReducer = combineReducers({
    topMenu,
    product
});

export default rootReducer;