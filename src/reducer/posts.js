export default (state = { posts: [], views: 0 }, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return { ...state, posts: action.payload };
    case 'VIEW':
      return { ...state, views: action.payload };
    default:
      return state;
  }
  return state;
};
