const initialState = []
export const topMenu = (state=initialState,action)=>{
    return action.data || state // temporary arrangement
}