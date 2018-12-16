import React, { Component } from "react";
import {} from "react-router-dom";
import "../../styles/history.css";
import { Grid, Image, Divider, Segment } from "semantic-ui-react";
import imageOne from "../../assets/images/good4utah.png";
import imageTwo from "../../assets/images/PeoplesChoice.jpeg";
import imageThree from "../../assets/images/ScoreAward.jpeg";
import imageFour from "../../assets/images/CFU_logo.png";
import imageFive from "../../assets/images/Presentation.png";
import imageSix from "../../assets/images/superbowl50.png";
import imageSeven from "../../assets/images/gallery1.jpeg";
import imageEight from "../../assets/images/turkeyDinner.jpg";
import imageNine from "../../assets/images/30-40.jpeg";
import imageTen from "../../assets/images/IanNews.png";
import imageEleven from "../../assets/images/dealinindirt.jpeg";
import imageTwelve from "../../assets/images/thumbsup.jpeg";
import imageThirteen from "../../assets/images/beatsboombox.jpeg";
import DonateButton from "../DonateButton";
import { TopPadding } from "../ftr_home";

class History extends Component {
  render() {
    return (
      <div>
        <TopPadding />

        <div className="beforeafter img-responsive" style={styles.beforeafter}>
          <h1 className="beforeAfterWords" style={styles.beforeAfterWords}>
            Our History
          </h1>
        </div>

        <div className="redstripe" style={styles.redstripe}>
          <div style={styles.redStripeWords}>
            <h2 className="redStripeWords">
              {" "}
              Fit To Recover started as a small group of friends who wanted to
              support each other in sobriety through exercise and fellowship.
              They’d meet each Saturday to run the hills of Sugarhouse Park and
              share their dreams and fears of life in recovery.
              <br />
              The group grew in size. Together they got stronger.
              <br />
              Soon, an entire community formed around the group's passions in
              what we call our 4 Pillars: exercise, nutrition, creative
              expression and community service. FTR opened in January 2015.
              Today, more than 350 people in recovery each week pass through our
              doors. They attend fitness classes, scale our climbing wall, learn
              how to paint and write poetry, lay down tracks in the audio
              studio, cook and eat healthy food together, empower women in early
              recovery, and reach out in service to others in need. Mostly
              though, they’re friends who hold each other up and hold each other
              accountable.
            </h2>
          </div>
        </div>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment as="a" href="https://youtu.be/dzX1c_V8nbI" basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageOne}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment
              as="a"
              href="https://youtu.be/dzX1c_V8nbI"
              basic
              className="gridWords"
              style={styles.gridWords}
            >
              <div>
                <div style={styles.itemDate}>February 10, 2017</div>
                <div style={styles.itemDesc}>
                  Fit To Recover's 2nd Anniversary was highlighted on Good4Utah.
                  Randall Carlisle conducted the interview and also served as MC
                  for the Anniversary ceremony. Among the many highlights, the
                  food was prepared in FTR's new kitchen by Chef Leslie and a
                  wonderful crew of Food To Recover volunteers.
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageTwo}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment basic className="gridWords" style={styles.gridWords}>
              <div>
                <div style={styles.itemDate}>October 12, 2016</div>
                <div style={styles.itemDesc}>
                  Fit To Recover wins Salt Lake City's People's Choice Award.
                  The FTR team's presentation, led by Ian, focused on the Food
                  To Recover Recovery bar, an entreprenurial activity of Food To
                  Recover.
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment as="a" href="https://www.score.org/fit-recover" basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageThree}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment
              as="a"
              href="https://www.score.org/fit-recover"
              basic
              className="gridWords"
              style={styles.gridWords}
            >
              <div>
                <div style={styles.itemDate}>September 15, 2016</div>
                <div style={styles.itemDesc}>
                  Fit To Recover was selected as the SCORE National Community
                  Impact Award winner for 2016. This prestigious award
                  recognizes innovation, achievement and vision among small
                  businesses across the United States. SCORE's mission,
                  supported by the U.S. Small Business Administration, is to
                  provide mentorship for American small businesses so that the
                  business may succeed. Read, FTR's story here.
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageFour}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment basic className="gridWords" style={styles.gridWords}>
              <div style={styles.itemDate}>July 18, 2016</div>
              <div style={styles.itemDesc}>
                Ian Acker joins the Utah Enlightened 50
                <br />
                <br />
                Each year, the Community Foundation of Utah chooses 50 people
                whom:
                <br />
                <br />
              </div>
              <p>
                Pioneer innovative and sustainable approaches to the critical
                issues facing Utah
              </p>
              <Divider />
              <p>Demonstrate a commitment to community engagement</p>
              <Divider />
              <p>Make a profound mark on Utah's quality of life</p>
              <Divider />
              <p>Value collaboration, entrepreneurship and creativity</p>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment
              as="a"
              href="https://nebula.wsimg.com/af4f421236eb6ea47ca2e2105c3fc6d5?AccessKeyId=6C572ACEE6337077909C&disposition=0&alloworigin=1"
              basic
            >
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageFive}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment
              as="a"
              href="https://nebula.wsimg.com/af4f421236eb6ea47ca2e2105c3fc6d5?AccessKeyId=6C572ACEE6337077909C&disposition=0&alloworigin=1"
              basic
              className="gridWords"
              style={styles.gridWords}
            >
              <div>
                <div style={styles.itemDate}>May 2, 2016</div>
                <div style={styles.itemDesc}>
                  Ian Acker and Lacey Garcia presented two workshops at the
                  national Connecticut Conference on Addiction and Recovery
                  (CCAR). The conference presents speakers from around the
                  country with innovative approaches to recovery. FTR presented
                  their four pillars of recovery: Exercise, Nutrition, Creative
                  Expression and Service
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageSix}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment basic className="gridWords" style={styles.gridWords}>
              <div>
                <div style={styles.itemDate}>February 7, 2016</div>
                <div style={styles.itemDesc}>
                  Our Superbowl party was attended by about 50 people. The
                  Bronco fans went home happy; the Panther fans were better
                  sports than Cam Newton, had more fun and were better fed, too!
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment
              as="a"
              href="https://www.youtube.com/watch?v=6FCefn56X5I"
              basic
            >
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageSeven}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment
              as="a"
              href="https://www.youtube.com/watch?v=6FCefn56X5I"
              basic
              className="gridWords"
              style={styles.gridWords}
            >
              <div>
                <div style={styles.itemDate}>January 16, 2016</div>
                <div style={styles.itemDesc}>
                  Fit To Recover's First Year Anniversary. 120 Members and
                  Friends joined together to celebrate FTR's First Anniversary.
                  Food To Recover provided the food, Michael Kelsey, the
                  Entertainment, and Marci Warner unveiled our new climbing
                  wall. Click here for Channel 4's coverage of the Anniversary.
                  Click here for a list of our Friends and Sponsors.
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageEight}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment basic className="gridWords" style={styles.gridWords}>
              <div>
                <div style={styles.itemDate}>November 21, 2015</div>
                <div style={styles.itemDesc}>
                  Thanksgiving's Day of Thanks was accented with recipes,
                  demonstrations, and pickings from the tree of gratitude- tips
                  for healthy holiday eatings. More than twenty FTR members
                  stayed after Saturday bootcamp to learn more about the vital
                  role that proper nutrition plays in maintaining recovery.
                  Saturday, November 21st 11:30am-1:30pm at the FTR Gym and
                  Community Center.
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageNine}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment basic className="gridWords" style={styles.gridWords}>
              <div>
                <div style={styles.itemDate}>November 16th - December 31st</div>
                <div style={styles.itemDesc}>
                  We invite you to get a jump start on your New Year's goals and
                  join us for 30 workouts in 40 days. Sign up for our Monthly
                  Membership, plus a small $5 program buy in to participate. As
                  a community we will work toward this goal together tracking
                  progress and having fun. Members who complete all 30 workouts
                  will earn an FTR T-shirt!
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column
            as="a"
            href="https://youtu.be/GOGSNtlWOKg"
            computer={5}
            tablet={5}
            mobile={16}
          >
            <Segment basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageTen}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment
              as="a"
              href="https://youtu.be/GOGSNtlWOKg"
              basic
              className="gridWords"
              style={styles.gridWords}
            >
              <div>
                <div style={styles.itemDate}>October 21, 2015</div>
                <div style={styles.itemDesc}>
                  Ian Acker and members of the FTR Team are profiled by
                  ABC4Utah's Nadia Crow. She tours the gym, music studio, and
                  Food To Recover's garden, highlights FTR's service mission,
                  and interviews members of TeamFTR.
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageEleven}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment basic className="gridWords" style={styles.gridWords}>
              <div>
                <div style={styles.itemDate}>October 10, 2015</div>
                <div style={styles.itemDesc}>
                  "Dealin' in Dirt" headlined FTR's first community social
                  attended by more than 100 people, and they were rockin'. Food
                  was provided by The Red Truck, purveyors of fabulous Peruvian
                  food. Thanks to Francisca for organizing the event. Watch for
                  many more community gatherings.
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageTwelve}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment basic className="gridWords" style={styles.gridWords}>
              <div>
                <div style={styles.itemDate}>September 30, 2015</div>
                <div style={styles.itemDesc}>
                  Fit to Recover received the UTAH COMMUNITY IMPACT AWARD for
                  2015 from SCORE, the Service Corps of Retired Executives, a
                  national nonprofit mentorship organization with chapters in
                  all states. FTR was selected from over 1500 businesses that
                  SCORE counseled across Utah over the last twelve months. The
                  honor was presented at the awards luncheon by Doug McNeil,
                  Ian's business mentor and FTR's financial advisor for the past
                  three years. The photo above shows Lacey Garcia, FTR Women's
                  Program Director holding the award, flanked by Doug McNeil and
                  Ian Acker, FTR founder.
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>

        <Grid
          columns={2}
          stackable
          className="gridContainer"
          style={styles.gridContainer}
        >
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <Segment basic>
              <Image
                className="singlePic"
                style={styles.singlePic}
                src={imageThirteen}
                alt="Good 4 Utah logo"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column
            computer={11}
            tablet={11}
            mobile={16}
            className="wordsContainer"
            style={styles.wordsContainer}
          >
            <Segment basic className="gridWords" style={styles.gridWords}>
              <div>
                <div style={styles.itemDate}>August 11, 2012</div>
                <div style={styles.itemDesc}>
                  This boombox provided the heart beat for Fit To Recover in
                  August of 2012. Ian, and three others, ran the slopes of Sugar
                  House Park together to help maintain their recovery. The rest
                  is history, as detailed going up the chart. Send us pictures
                  and words to fill in the blanks.
                </div>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const styles = {
  topPadding: {
    paddingTop: "70px"
  },
  beforeafter: {
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  beforeAfterWords: {
    margin: 0,
    padding: 0,
    fontFamily: "Lato",
    fontWeight: 300,
    fontSize: "8em"
  },
  redstripe: {
    height: "450px",
    display: "flex",
    margin: "auto",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    color: "white",
    width: "998px"
  },
  redStripeWords: {
    margin: 0,
    padding: 0,
    textAlign: "center",
    fontSize: "26px",
    fontWeight: 300
  },
  gridContainer: {
    display: "flex"
  },
  singlePic: {
    width: "100%",
    borderRadius: "5px"
  },
  wordsContainer: {
    display: "flex"
  },
  gridWords: {
    alignSelf: "center"
  },
  itemDate: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "20px"
  },
  itemDesc: {
    fontSize: "16px"
  }
};

export default History;
