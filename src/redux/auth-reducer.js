import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
}


const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: action.data.isAuth,
      }

    default:
      return state;
  }
}

const setUserData = (userID, email, login,isAuth) => {
  return {
  type: SET_USER_DATA,
    data: {
      userID,
      email,
      login,
      isAuth,
    }
  }
}
export const getUserData = () => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
      dispatch(setUserData(data.data.id, data.data.email, data.data.login,true));
    }
  
}

export const login = (email,password, rememberMe) => async (dispatch) => {
  let data = await authAPI.login(email,password, rememberMe)
    if (data.data.resultCode === 0) {
      dispatch(getUserData());
    }else {
      let message = data.data.messages[0] ? data.data.messages[0] : "Some error"
      let action = stopSubmit('login',{_error: message});
      dispatch(action);
    }
}
export const logout = () =>async (dispatch) => {
  let data = await authAPI.logout()
    if (data.data.resultCode === 0) {
      dispatch(setUserData(null,null,null,false));
    }
}


export default authReducer;