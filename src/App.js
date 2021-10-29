import React, { useEffect } from 'react';
import BlogSingle from './components/Posts/BlogSingle.js';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import './styles.css';
import { getPosts } from './actions/posts';
import { useDispatch } from 'react-redux';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/blog">
            <Posts />
          </Route>
          <Route path="/blog/:blogId">
            <BlogSingle />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
