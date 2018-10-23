import * as actionTypes from '../constants/index'

const initialState = {
  data:{}
}

export function testReducer (state = initialState, action) {
  switch (action.type) {

    case actionTypes.STORE_UPDATE_TEST_SUCCESS:
      return {
        ...state,
        data: action.json.Data
      }

    default :
      return state
  }
}