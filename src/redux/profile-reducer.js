import { profileAPI, usersAPI } from "../api/api";

const SET_USER_PROFILE = 'SET-USER-PROFILE',
      ADD_POST = 'ADD-POST',
      DELETE_POST = 'DELETE_POST',
      SET_STATUS = 'SET_STATUS';
let initialState = {
  postsArray: [
    {
      id: 1,
      likeCounter: 10,
      message: "Fugiat sunt veniam tempor exercitation.",
      name: "Gotca Dumitru"
    },
    {
      id: 2,
      likeCounter: 15,
      message: "Fugiat Laborum ipsum aliqua ut occaecat sint aute duis aliquip pariatur id eu magna. tempor exercitation.",
      name: "Pavalache valeria"
    },
    {
      id: 3,
      likeCounter: 20,
      message: "Ullamco nisi mollit eu incididunt sit officia esse esse laborum do ullamco.",
      name: "User Name"
    },
  ],
  profile : null,
  status: ''
}


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        likeCounter: 0,
        message: action.postText,
        name: "Dima",
      };
      return {
        ...state,
        postsArray: [...state.postsArray, newPost],
        newPostText: '',
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.userProfile,
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }
    case DELETE_POST:
      return {
        ...state,
        postsArray: state.postsArray.filter((p)=> {
          if(p.id!=action.id)
          {
            return p
          }
        }) 
      }
    default:
      return state;
  }
}

export const addPost = (postText) => {
  return {
    type: 'ADD-POST',
    postText,
  }
}
export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id,
  }
}

const setUserProfile = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    userProfile,
  }
}
const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  }
}
export const getUserProfile = (userID) => async (dispatch)=> {
  let data = await usersAPI.getProfile(userID)
    dispatch(setUserProfile(data));
}
export const getStatus = (userID) => async (dispatch)=> {
  let response = await profileAPI.getStatus(userID)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch)=> {
  let response = await profileAPI.updateStatus(status)
    if(!response.data.resultCode){
      dispatch(setStatus(status))
    }
}
export default profileReducer;