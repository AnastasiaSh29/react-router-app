import {
  FETCH_USERS,
  NEW_USER,
  DELETE_USER,
  FETCH_USER_TODOS,
  FETCH_USER_POSTS,
  FETCH_USER_ALBUMS,
  LOAD_USER_LOADING,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
} from "../UserList/userConstants";

const initialState = {
  users: [],
  user: {},
  userTodos: [],
  userPosts: [],
  userAlbums: [],
  loading: true,
  error: "",
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loading: true, users: action.payload };

    case LOAD_USER_LOADING:
      return { ...state, loading: true, error: "" };

    case LOAD_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case LOAD_USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case FETCH_USER_TODOS:
      return { ...state, userTodos: action.payload };

    case FETCH_USER_POSTS:
      return { ...state, userPosts: action.payload };

    case FETCH_USER_ALBUMS:
      return { ...state, userAlbums: action.payload };

    case NEW_USER:
      return {
        ...state,
        loading: true,
        users: [...state.users, action.payload],
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
}
