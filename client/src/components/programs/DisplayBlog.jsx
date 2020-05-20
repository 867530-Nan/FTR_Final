import React from "react";
import { Grid, Item, Icon } from "semantic-ui-react";
import moment from "moment";
import "../../styles/nutrition.css";
import styled from "styled-components";

class DisplayBlog extends React.Component {
  displayPosts = () => {
    return this.props.posts.items.map((post, i) => (
      <SinglePost key={i * Math.random()} className="singlePostEntire">
        <SingleBlogPic src={post.images[0].url} />
        <PostTextWrap
          className="blogContent"
          as="a"
          target="_blank"
          rel="noreferrer noopener"
          href={post.url}
        >
          <h3 style={{ color: "black" }}> {post.title} </h3>
          <Date>{moment(post.published).format("MMMM Do YYYY")}</Date>
        </PostTextWrap>
      </SinglePost>
    ));
  };
  render() {
    return (
      <BlogWrap>
        <a
          style={{ color: "black", fontSize: "20px", margin: "20px" }}
          href="http://food2recover.blogspot.com/"
        >
          Food To Recover Blog
        </a>
        <PostWrap scroll={this.props.scroll}>{this.displayPosts()}</PostWrap>
      </BlogWrap>
    );
  }
}

const BlogWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #99e889;
  height: 100%;
`;

const PostWrap = styled.div`
  overflow-y: ${(props) => (props.scroll ? "scroll" : null)};
`;

const SingleBlogPic = styled.img`
  width: 25%;
`;

const SinglePost = styled.div`
  height: 150px;
  display: flex;
`;

const PostTextWrap = styled.div`
  width: 75%;
  padding: 0 10px;
`;

const Date = styled.h3`
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default DisplayBlog;
