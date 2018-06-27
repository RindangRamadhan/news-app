import {SET_NEWS} from './actionTypes'

const initialState = {
  news: [],
  refresPage: true
}


const reducers = (state = initialState, action) => {
  if (action.type = SET_NEWS) {
    return {
      ...state,
      news: action.payload,
      refresPage: false
    }
  }

  return state
}

export default reducers
