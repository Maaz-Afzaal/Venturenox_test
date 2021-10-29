import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
const BlogSingle = () => {
  useEffect(() => {
    a();
  }, []);
  const [blogSingle, setblogSingle] = useState({});

  const baseUrl = 'https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/';
  var url = JSON.stringify(window.location.pathname);
  url = url.substring(7, url.length - 1);
  const a = () => {
    axios.get(baseUrl + url).then((res) => {
      console.log(res.data);
      setblogSingle(res.data);
    });
  };
  const single = JSON.stringify(blogSingle);
  const singlepost = JSON.parse(single);
  try {
    return (
      <>
        <div className="container">
          <div className="row offset-1 col-10">
            <div className="text-center m-2">
              <h1>
                {JSON.stringify(singlepost.Title).substring(
                  1,
                  JSON.stringify(singlepost.Title).length - 1,
                )}
              </h1>
              <p>
                {JSON.stringify(singlepost.Subtitle).substring(
                  1,
                  JSON.stringify(singlepost.Subtitle).length - 1,
                )}
              </p>
            </div>
          </div>

          <div className="text-center">
            <img
              src={JSON.stringify(singlepost.Image).substring(
                1,
                JSON.stringify(singlepost.Image).length - 1,
              )}
              className="text-center"
            />
          </div>
          <div className="row offset-1 col-10">
            <div className="text=center m-2">
              <p>
                {JSON.stringify(singlepost.Article).substring(
                  1,
                  JSON.stringify(singlepost.Article).length - 1,
                )}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } catch (e) {
    return <></>;
  }
};
export default BlogSingle;
