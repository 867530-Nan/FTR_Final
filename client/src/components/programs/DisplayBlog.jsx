import React from "react";
import moment from "moment";
import "../../styles/nutrition.css";
import styled from "styled-components";

class DisplayBlog extends React.Component {
  displayPosts = () => {
    return this.props.posts.items.map((post, i) => (
      <SinglePost key={i * Math.random()} href={post.url} target="_blank">
        <SingleBlogPic src={post.images[0].url} />
        <PostTextWrap
          className="blogContent"
          as="a"
          target="_blank"
          rel="noreferrer noopener"
          href={post.url}
        >
          <h3 style={{ color: "white" }}> {post.title} </h3>
          <Date>{moment(post.published).format("MMMM Do YYYY")}</Date>
        </PostTextWrap>
      </SinglePost>
    ));
  };
  render() {
    return (
      <BlogWrap maxHeight={this.props.frontPage}>
        <a
          style={{
            color: "white",
            margin: "20px",
            width: "100%",
            textAlign: "center",
          }}
          href="http://food2recover.blogspot.com/"
        >
          <h2>Food To Recover Blog</h2>
        </a>
        {this.props.posts.items ? (
          <PostWrap frontPage={this.props.frontPage}>
            {this.displayPosts()}
          </PostWrap>
        ) : null}
      </BlogWrap>
    );
  }
}

const BlogWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0b6623;
  max-width: 750px;
  margin: 0 auto;
  border-radius: 3px;
  box-shadow: 0px 0px 30px -4px black;
  height: 100%;
  max-height: ${(props) => (props.maxHeight ? "500px" : null)};

  @media (max-width: 768px) {
    margin: 40px auto;
  }
`;

const PostWrap = styled.div`
  overflow-y: ${(props) => (props.frontPage ? "scroll" : null)};
`;

const SingleBlogPic = styled.img`
  width: 25%;
  max-width: 100px;
`;

const SinglePost = styled.a`
  height: 150px;
  display: flex;
  padding: 15px;

  &:hover {
    cursor: pointer;
    background-color: #084318;
  }
`;

const PostTextWrap = styled.div`
  width: 75%;
  padding: 0 10px;
`;

const Date = styled.h3`
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default DisplayBlog;
