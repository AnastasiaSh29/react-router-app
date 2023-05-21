import { FETCH_POSTS, NEW_POST, DELETE_POST } from "../PostsList/postConstants";

const initialState = {
    posts: [],
  post: {},
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };

    case NEW_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    default:
      return state;
  }
}