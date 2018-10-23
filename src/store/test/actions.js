import * as actionType from '../constants/index'
import api from '../../api/index'

export const updateImgTest = () => dispatch => {


  return dispatch({
    type: actionType.STORE_UPDATE_TEST,
    promise: api.fetchTestImg()
  })
}