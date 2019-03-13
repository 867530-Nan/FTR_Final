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
  Card
} from "semantic-ui-react";
import nutritionApple from "../../assets/images/nutritionApple.jpg";
import nutritionGroup from "../../assets/images/nutritionGroup.jpg";
import nutritionMeal from "../../assets/images/nutritionMeal.jpg";
import nutritionChopping from "../../assets/images/nutritionChopping.jpg";
import DonateButton from "../DonateButton";

import moment from "moment";
import { TopPadding } from "../ftr_home";

class Nutrition extends Component {
  state = { posts: [], loaded: false };

  componentDidMount() {
    axios
      .get("api/blogs/index")
      .then(res => this.setState({ posts: res.data, loaded: true }));
  }

  displayPosts = () => {
    return this.state.posts.items.map(post => (
      <Item className="singlePostEntire">
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
            href="https://clients.mindbodyonline.com/classic/ws?studioid=280495&stype=-7&sVT=23&sView=week&sLoc=0"
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
                <Card color="orange" raised centered className="classCard">
                  <Card.Content
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <Card.Header
                      style={{ textAlign: "center", fontSize: "1.18em" }}
                    >
                      Connecting with Food: Cooking Classes
                    </Card.Header>
                  </Card.Content>
                  <Image
                    className="nutritionCardPhoto"
                    src={nutritionChopping}
                  />
                  <Card.Content
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around"
                    }}
                  >
                    <Card.Description>
                      Have you ever seen broccoli grow? Ever wondered how many
                      different dishes you can make with eggs? Looking for
                      healthy and quick recipes on a budget? Join us for a
                      cooking class and use garden-fresh ingredients from our
                      Food to Recover garden, learn new techniques and
                      combinations in the kitchen, and gain confidence in
                      preparing your own food!
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card color="teal" raised centered className="classCard">
                  <Card.Content
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <Card.Header
                      style={{ textAlign: "center", fontSize: "1.18em" }}
                    >
                      Connecting with Others: Community Meal Prep
                    </Card.Header>
                  </Card.Content>
                  <Image className="nutritionCardPhoto" src={nutritionGroup} />
                  <Card.Content
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around"
                    }}
                  >
                    <Card.Description>
                      Preparing food as a group establishes and strengthens
                      connections with others. Come to the FTR Kitchen with a
                      few ingredients and leave with tupperware full of healthy
                      meals for your week. Little to no experience in the
                      kitchen? No problem! We're all here for each other. View
                      the schedule and sign up here. You will be assigned
                      ingredients to bring.
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card color="green" raised centered className="classCard">
                  <Card.Content
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <Card.Header
                      style={{ textAlign: "center", fontSize: "1.18em" }}
                    >
                      Connecting with Ourselves: Individual Counseling
                    </Card.Header>
                  </Card.Content>
                  <Image className="nutritionCardPhoto" src={nutritionMeal} />
                  <Card.Content
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around"
                    }}
                  >
                    <Card.Description>
                      Meet one-on-one with a registered dietitian to meet your
                      personal nutrition goals. With a no-diet and
                      individualized approach, we will work together to help you
                      tune into your hunger cues and nutritional needs that will
                      be the foundation for nourishing yourself. We'll focus on
                      realistic goals and sustainable strategies that will
                      promote healthy and productive living.
                    </Card.Description>
                  </Card.Content>
                </Card>

                <Card color="red" raised centered className="classCard">
                  <Card.Content
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <Card.Header
                      style={{ textAlign: "center", fontSize: "1.18em" }}
                    >
                      Nutrition Services for Treatment Centers
                    </Card.Header>
                  </Card.Content>
                  <Image className="nutritionCardPhoto" src={nutritionApple} />
                  <Card.Content
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around"
                    }}
                  >
                    <Card.Description>
                      Food to Recover provides group nutrition education,
                      cooking classes, one-on-one counseling for clients, and
                      facility menu reviews. All services are performed by a
                      registered dietitian. Contact Georgia Gregersen for more
                      information!
                    </Card.Description>
                    <Card.Description>
                      Sample classes include: Mindful Eating, Important
                      Nutrients in Recovery, Nutrition 101, Food and Mood, and
                      many more!
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column computer={4} tablet={6} mobile={16}>
                <div className="blogTitle">
                  <a
                    style={{ color: "black", fontSize: "20px" }}
                    href="http://food2recover.blogspot.com/"
                  >
                    <Icon
                      style={{ marginTop: "10px" }}
                      name="feed"
                      color="green"
                    />{" "}
                    Food To Recover Blogposts
                  </a>
                </div>
                <Item.Group
                  className="commentGroup"
                  style={styles.commentGroup}
                >
                  {this.displayPosts()}
                </Item.Group>
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
          <a
            href="mailto:nicolette@fit2recover.org"
            className="nutritionBottomEmailWords"
          >
            <Icon
              name="mail outline"
              color="white"
              style={{ fontSize: "20px" }}
            />
            Contact Nicolette Pessetto for more information
            <Icon
              name="mail outline"
              color="white"
              style={{ fontSize: "20px" }}
            />
          </a>
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

const styles = {
  topNutritionPadding: {
    paddingTop: "55px"
  }
};

export default Nutrition;
