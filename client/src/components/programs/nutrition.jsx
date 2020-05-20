import React, { Component } from "react";
import {} from "react-router-dom";
import axios from "axios";
import "../../styles/nutrition.css";
import {
  Grid,
  Image,
  Item,
  Icon,
  Loader,
  Segment,
  Dimmer,
  Card,
} from "semantic-ui-react";
import DisplayBlog from "./DisplayBlog";

import moment from "moment";
import { TopPadding } from "../ftr_home";
import { MindBody } from "../../GlobalLinks/Links";
import styled from "styled-components";

class Nutrition extends Component {
  state = { posts: [], loaded: false };

  componentDidMount() {
    this.fetchBlogs();
    this.fetchNutrition();
  }

  fetchNutrition() {
    axios
      .get("/api/nutrition")
      .then((res) => this.setState({ classes: res.data }));
  }

  fetchBlogs() {
    axios
      .get("api/blogs/index")
      .then((res) => this.setState({ posts: res.data, loaded: true }));
  }

  displayPosts = () => {
    return this.state.posts.items.map((post, i) => (
      <Item key={i * Math.random()} className="singlePostEntire">
        <Item.Image className="blogPic" as="a" src={post.images[0].url} />
        <Item.Content
          className="blogContent"
          as="a"
          target="_blank"
          rel="noreferrer noopener"
          href={post.url}
        >
          <Item.Header className="postAlignCenter"> {post.title} </Item.Header>
          <Item.Description className="postAlignCenter singlePostContent">
            {moment(post.published).format("MMMM Do YYYY")}
          </Item.Description>
        </Item.Content>
      </Item>
    ));
  };

  displayClasses = () => {
    const arr = ["orange", "teal", "green", "red"];

    return this.state.classes.map((single, i) => {
      console.log(arr[i]);
      return (
        <Card
          key={i * Math.random()}
          color={arr[i]}
          raised
          centered
          className="classCard"
        >
          <Card.Content
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Card.Header style={{ textAlign: "center", fontSize: "1.18em" }}>
              {single.title}
            </Card.Header>
          </Card.Content>
          <Image className="nutritionCardPhoto" src={single.image} />
          <Card.Content
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Card.Description>{single.body}</Card.Description>
          </Card.Content>
        </Card>
      );
    });
  };

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <TopPadding />

          <div className="nutritionTopPhoto" />
          <div className="nourishingRecovery">
            <div className="programWordsh2">
              Food To Recover promotes connecting with food, with others, and
              with ourselves.
            </div>
            <div className="programWordsh3">
              Together, we learn about the importance of proper nutrition in our
              daily lives, how to eat mindfully, and how to create our own
              healthy meals.
            </div>
          </div>

          <a
            rel="noopener noreferrer"
            className="nutritionClassLink"
            href={MindBody}
            target="_blank"
          >
            Click here to Sign Up for Classes
          </a>

          <Grid stackable style={{ margin: "0 30px" }}>
            <Grid.Row>
              <Grid.Column
                className="cardsColumn"
                computer={12}
                tablet={10}
                mobile={16}
              >
                {this.state.classes && this.displayClasses()}
              </Grid.Column>
              <Grid.Column computer={4} tablet={6} mobile={16}>
                {this.state.posts && <DisplayBlog posts={this.state.posts} />}
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <div className="nutritionBottom">
            <p className="nutritionBottomWords">
              Proper nutrition is the foundation of good health. It can be
              especially important during recovery to help keep blood sugars
              stable and reduce cravings, to improve and stabilize mood, and to
              replenish nutritional deficiencies that may have occurred during
              substance use.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <Segment style={{ height: "600px" }}>
          <Dimmer active>
            <Loader>Loading Blog Posts</Loader>
          </Dimmer>
        </Segment>
      );
    }
  }
}

const BlogWrap = styled.div`
  width: 50%;
`;

export default Nutrition;
