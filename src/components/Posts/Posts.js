import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import blogSingle from './BlogSingle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BlogSingle from './BlogSingle';
import { view } from '../../actions/posts';
const Posts = () => {
  var [view_count, setview_count] = useState(0);
  var [Viewed, setViewed] = useState(0);
  const dispatch = useDispatch();
  try {
    const getdata = useSelector((state) => {
      console.log('view i ', state.posts.views);
      setViewed(state.posts.views);
      return state.posts.posts;
    });

    const post = JSON.stringify(getdata);
    const posts = JSON.parse(post);
    const handleClick = (a) => {
      view_count = view_count + 1;
      dispatch(view(view_count));
    };
    return (
      <div className="container">
        <div className="row m-3">
          {posts.map((item) => (
            <div
              key={item.id}
              className="col-4"
              onClick={(e) => handleClick(e)}
            >
              <Card className="border-0" style={{ color: 'black' }}>
                <Link to={'/blog/' + item.id}>
                  <CardImg width="100%" src={item.Image} alt={item.Title} />{' '}
                </Link>
                <CardBody>
                  <i className="fa fa-eye me-2"></i>
                  {view_count}
                  <CardTitle>
                    <h1> {item.Title}</h1>
                  </CardTitle>
                  <CardSubtitle>{item.Subtitle}</CardSubtitle>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (e) {
    return <></>;
  }
};

export default Posts;
