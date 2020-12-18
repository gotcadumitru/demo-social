import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}


const usersReducer = (state = initialState, action) => {

  let stateCopy = { ...state };
  switch (action.type) {
    case FOLLOW:
      return stateCopy = {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {
              ...u,
              followed: true,
            }
          }
          return u
        })
      };
    case UN_FOLLOW:
      return stateCopy = {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {
              ...u,
              followed: false,
            }
          }
          return u
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      }
    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => id != action.userID),
      }
    default:
      return state;
  }
}

export const followSuccess = (userID) => {
  return {
    type: FOLLOW,
    userID,
  }
}
export const unFollowSuccess = (userID) => {
  return {
    type: UN_FOLLOW,
    userID,
  }
}
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  }
}
export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page: page,
  }
}
export const setUsersTotalCount = (usersCount) => {
  return {
    type: SET_USERS_TOTAL_COUNT,
    usersCount,
  }
}
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  }
}
export const toggleFollowingProgress = (isFetching, userID) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID,
  }
}

// THUNK (SANKI)

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage))
  let data = await usersAPI.getUsers(currentPage, pageSize)
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
}
export const follow = (userID) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userID));
  let data = await usersAPI.follow(userID)
      if (data.resultCode === 0) {
        dispatch(followSuccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
}
export const unFollow = (userID) =>async (dispatch) => {
  
  dispatch(toggleFollowingProgress(true, userID));
  let data = await usersAPI.unFollow(userID)
    if (data.resultCode === 0) {

      dispatch(unFollowSuccess(userID))
    }
    dispatch(toggleFollowingProgress(false, userID));

}
export const toggleFollow = (userID) =>async (dispatch) => {
  
  dispatch(toggleFollowingProgress(true, userID));
  let data = await usersAPI.toffleFollow(userID)
    if (data.resultCode === 0) {

      dispatch(unFollowSuccess(userID))
    }
    dispatch(toggleFollowingProgress(false, userID));

}

export default usersReducer;