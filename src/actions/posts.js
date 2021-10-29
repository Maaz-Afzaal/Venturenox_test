import * as api from '../api/index';
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log('data is', JSON.stringify(data));
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const view = (View) => async (dispatch) => {
  try {
    const views = {
      View: View,
    };
    alert('clickes', View);
    dispatch({ type: 'VIEW', payload: View });
  } catch (error) {
    console.log(error.message);
  }
};
