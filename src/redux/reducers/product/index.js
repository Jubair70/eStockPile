import * as actionTypes from '../../actions/product/types';
const initialState = {
    categories:[]
}
export const product = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.PRODUCT_CATEGORY:
            return {
                ...state,
                categories:action.data
            }
        default:
            return state;
    }
}