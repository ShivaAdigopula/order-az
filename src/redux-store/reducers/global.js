import { HIDE_LOADING_INDICATOR, SHOW_LOADING_INDICATOR } from "../action-constants";


const initialState = {
    loadingIndicator: false,
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_LOADING_INDICATOR:
        state.loadingIndicator = true;
        return state;
      case HIDE_LOADING_INDICATOR:
        state.loadingIndicator = false;
        return state;
      default:
        return state;
    }
  }
  
export default globalReducer;