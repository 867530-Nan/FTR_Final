import React, { Component } from "react";
import {} from "react-router-dom";
import "../../styles/creativearts.css";
import { List, Grid } from "semantic-ui-react";
import riverWriting from "../../assets/images/creative-writing.png";
import groupMural from "../../assets/images/guys-paintings.png";
import outdoors from "../../assets/images/outdoorsPainting.png";
import DonateButton from "../DonateButton";
import { TopPadding } from "../ftr_home";

class CreativeArts extends Component {
  render() {
    return (
      <div>
        <TopPadding />

        <div className="creativeTop" style={styles.creativeTop}>
          <h1 className="creativityHead" style={styles.creativityHead}>
            Creative expression has the power to connect us.
          </h1>
        </div>

        <div className="sarahPainting" style={styles.sarahPainting} />

        <div className="creativeArtsStory" style={styles.creativeArtsStory}>
          <div
            className="creativeArtsStoryWords"
            style={styles.creativeArtsStoryWords}
          >
            Recovery is strengthened when a person takes ownership of their
            story and expresses it through different media.
          </div>
        </div>

        <a
          className="creativeCalendarButton"
          target="_blank"
          rel="noopener noreferrer"
          href="https://clients.mindbodyonline.com/classic/ws?studioid=280495&stype=-7&sVT=18&sView=week&sLoc=0"
        >
          <div className="creativeCalendarButtonWords">
            Click here for the Creative Arts class calendar
          </div>
        </a>

        <div className="artClass" style={styles.artClass}>
          <div className="artBox music" style={styles.artBox}>
            <h4 className="artBoxWords" style={styles.artBoxWords}>
              Music
            </h4>
            <img
              class="icon icons8-Music"
              alt="small icon of a musical note"
              width="75"
              height="75"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAEoklEQVR4Xu2czW7TQBDHd50UFRVEewGFU3iChhukkSg31AYlb5DwBM0b0D5BwxM0vIErSsWNIkHh1vAEhEtTuBSk8iE18TJr7BKq7DpjTxLHXksIocyuvT/+OztrzyxnKb665dIqE6ImOK/C352M5WzdevHeViHhaWP1da1Y6HFeg4FXGef5IeN/mNt7ezCMSypgdR/dy/NstuIIUeecF7QCEeJ57uW7eqpgnVYLi7/PFyqgHjnwVcQMegPKGmqfOGV111dcH+ROs3BXsmGdrBUrEpAHaTEco4tWyYM1gqMOyywZsHxHLYRoKFaysIAG280uLN9RC8YagSsZBSrGZgvWBaBojjosutmAReyokwfLd9QyHoLlPupKFhZQfH2WdNQsm63Bfqw+RkcdFtz0pyFqyxF2mKO2E+y74KLDGV8e0mR6sOTOHlayjQgR9agI9HYAiDFhW5ZjyzcL8Fyb0OBpbGDB1mPH25vRDDhELxCT7XIh7PkrP+0lu/3N7yJWsI7XV2RctB1ifJGbCCY+MsFaV+d+tAYBDXYcL1jl0ulEVzchPoMfsnnPaeZefegEEY8VLHgYcFVjvjw/lBGieXP/sI25W3pgwQs631FjAMV2GlIrS+WoDSyPgO+oeb9vj+KHMOCSMQ2RjhoDKBnTMIKjTg0s6YfgW11L960uLIygdrMyDd8wx2ldjqiDBkf9+6zAUn7EpAai68/AQtA2sAwsBAGEqVGWgYUggDA1yjKwEAQQpkZZBhaCAMLUKMvAQhBAmBplGVgIAghToywDC0EAYWqUZWAhCCBMjbIMLAQBhKlR1hBYMg2zb1kV+EnmiRUuklWgCkyRdTj5ZDbN5/uJfLD48vh+1XGs7RBpmOmB5eWr7kglIWbloGk6YHXXinVhWdsR88KSD0uCYpYlFRX1SjYst3yXsddRKXntkwtL+iiRzR5FnHrp8FmQEd2CFa9GpCrZTTKV5cVQR4SgIMnZeXZ777AxrM/IZb9uBVf/+jKUllxeqjcVgyCLs47LxSZn1gYlLMjweZLbP2yRwopQOUEGC6bgpxBBp5btfPZsSZU7j1aWJ31ZDBA26KODRZ0+rjmmQBJGwToplzZgf9WMKPt4woJUzfm5s7xKVShYhHU48YSl8VW+OEZSFiEoeV8yWMfllbaiDA4lft0KONhRICzCbYR/XzpYNMVUW3BCiGrl/g+6FtYYomOWcZy72DobnUxCqwt8lGX165hMaT0s+uiYwf9ioJoxc0jGeb96Cweo6QirHuv3N7FVG8oHd4PN3rVTzIMH2kL1BJwglA+0Qxp4z9qA8BsOx2A3hjYnqNxQwhqDr9JuJZB8lObeG4h/MaDjdDKMtSmmvhLWWLYSvd4drPSpIFL0o1ZWuXQAN3hAcRO3j4DomOw+Y+xoMrBGiI7HOEayricyDanDBbLRIztSwiJ7VzTCNgL5zFMz18dZUfwWTL2McFYpVqGp0bl0Yy2sUAGf68vFLpypUNft4OMCAPMcgdG0C+x8oQUHWshP4NrLLfrmvKk65zOofdx/D4TlD8D70luHf/8N+ITIw1vKjjw5Fv4cTLvYchKg/wA6j1d5PFnAEAAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="artBox poetry" style={styles.artBox}>
            <h4 className="artBoxWords" style={styles.artBoxWords}>
              Poetry
            </h4>
            <img
              class="icon icons8-Quill-With-Ink-Filled"
              alt="small icon of quill and ink"
              width="75"
              height="75"
              src="data:image/png;base64,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"
            />
          </div>
          <div className="artBox painting" style={styles.artBox}>
            <h4 className="artBoxWords" style={styles.artBoxWords}>
              Painting
            </h4>
            <img
              class="icon icons8-Paint-Brush-Filled"
              alt="small icon of paint brush"
              width="75"
              height="75"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAFiUlEQVR4Xu2cUXITORBApQkfLKQK+IEKP+s9weZzN04V4QR4T0A4QeJcYMMFPNkTrDkBcAJMFWH3j3ACwk+88JNsFRR8EGtbMx7HHs9oWlK3LIedv1Q0GvVTd6vValmKJXxO0/WbX8T1F1KoP9a6r/uhRJChPkT1nQtQcj3vc/QoFLClgjUPqpiCMMCWBlY9qHDAlgJWM6gwwKKHhQfFDyxqWPageIFFC8sdFB+wKGH5g+IBFh0sOlD0wKKCRQ+KFlg0sPhA0QGLAhY/KBpgC4cVDpQ/sIXCCg/KD9jCYJGAUuJfIdSzDIGUD+0yG/ab74XAqgH1GIT9HSWwhiTFwVXx6eBW9+jsQ/prZyRWnqLenWlkByw4rGpQ+aBPehsHUiY7RqGVeiLk+f5a9+/joh3qvdpO8cCCwjKBMgpemFsJUvHOMG2/Azts2WuWnQ8LBgsD6kL4X0DwZCv/Ozle674a1IEYppu63Qt3UHhgQWBVggJzWts73PYVcthr9+2de91XzSbJDsu86uH9RZV4uu+vYvXUF/js+/VjYoWFCw/cgQ3TDdDM5E9aWLq36jGxwcKBwvuLKiAnvfYzKeUDeljVwFhg2YFyBzbsbQ4g3rrHA2seGDksN1BuwPhhzQIjheUHyh7YSdrelUKmfJo1OyYyWDSg7IBlq6FaPQZTvBECGBksmOU3MMvjI3WKoeNWyY/pxvq5SrTvmgemxEsl1BkIuQ6x2I8+o1JKvSWBRRdFl8XBAcvjrWsdCCNasOwfrwhxdLv7+qjozXd8GtQP8vMWCSxec8ABM2mND6wClM5ukMDSA/Xb+TcZiB8w1+B1GpQeIRmsYao3v1dg98/1uANz2T+WQZHCyrWrfQQR9c9cuFxrsWxTOFWg6GEFiXvsNQx8lsJOYB0oclj8pmgXh+nWNpkJEyhyWGFM0R4YbIvOmgLXJlAssEDl96Fj3MED1jZq2+FMMjvQUCuQJKyO9DGguGBtQccEaV4sSRywsYvYFkrsTkPDgmKBpTu1cahYJOZ2WGCzyUIbUHyw2PNMVejMwMqBqS0oNli8GUyTjlUDowDFBiusky/DmwVGBYoNFu8+EePlcmCUoFhg6fzSN5HAvRpxEyMWXxvVh63vdtG/i48qj41sI607jgfUrJgUoEg165/e5o6CyhY+TXHrmQoUCaxxYk1H7DoYjeqhBOUFK2ZIWjBqUE6wIJH2EJL/2nFGp0mUzrzKRFAOfpzm2IGkEJzTLXqVM1s6h0YVX2yEpTVJSXkQOyQu05ueGiMsSMdChcpFrBKV9y4NhlOjGjWLHRSUPiox6kMN6dlEbgV+0KHQIwSoWgcfAtSKHG1NH4ROK4peaZUadeCEu9N0khwKVCUs1zM2GxNNxPlvd7p/5fXrDU8Woii1XVUKGRLUHKysbkAkb5oE8Pk/CPj87t4hHLXbPeMVebfIdIYGNQcLZlGng5njp28/Tdew2yHLW2ttM1Uwu/SJeWeyGoYwPzAnkgpljGAcbaZg+RbeY4bnr1WYr3C1yWD9r1U4vGNYDb4KisIg/hmAU+241zIst1ZlDr75yN2c00bNyZL7qkJGaSpirVvm7atlll+rcs0y3315DEv0fll7rE5vLolWjWEZC+8HAOt+GRa62Bb2f1flp5YuMUSZa+SNwAw3T83pF3efBZXC3bvdw+jy8q5zAg4eVeg1gA8MQHi9ucWVb18i85s4eJYrHZcQFMbB22vsJQU1jrMo7+zhSn/sZyCON7II3j5uKg0eInxI5u3WJfPiENV/FBks4/0X0zeUei+kgp8NCPdbof4iu/cwyTpkdQpKQk4cUcee7RVH/e8F0mQ1LHPOi1UTyGTKFpzrtuCsEO6sSAgqFVxVUxBCjCBQvfgBCvd5Wr43/wPWQqTGGj4oagAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="artBox drawing" style={styles.artBox}>
            <h4 className="artBoxWords" style={styles.artBoxWords}>
              Drawing
            </h4>
            <img
              class="icon icons8-Picture"
              width="75"
              height="75"
              alt="small icon of generic painting"
              src="data:image/png;base64,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"
            />
          </div>
          <div className="artBox writing" style={styles.artBox}>
            <h4 className="artBoxWords" style={styles.artBoxWords}>
              Writing
            </h4>
            <img
              class="icon icons8-Hand-With-Pen"
              width="75"
              height="75"
              alt="small icon of a hand with a pencil"
              src="data:image/png;base64,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"
            />
          </div>
        </div>

        <div className="hidden-xs">
          <div className="expression riverWriting">
            <div className="expressionWords">
              <span className="riverWritingWords">River Writing</span>
              <br />
              This class offers a healthy form of expression for those who are
              learning a new way of life. It offers an outlet for thoughts and
              feelings. It is a powerful tool in awareness. It can be used to
              process past events, or to create a vision for the future.
            </div>
            <img
              className="img-responsive"
              src={riverWriting}
              alt="the words Creative Writing in unique font"
            />
          </div>

          <div className="expression groupMural">
            <img
              className="img-responsive"
              src={groupMural}
              alt="Group Paint Night"
            />
            <div className="expressionWordsEven">
              <span className="riverWritingWords">GroupPaint Nite</span>
              <br />
              It's not just for wine drinkers anymore! We offer one night of
              guided art making in an atmosphere where you can succeed and have
              a finished piece to be proud of. Participants will work
              individually on a painting of the same composition.{" "}
            </div>
          </div>

          <a
            className="creativeCalendarButton"
            target="_blank"
            rel="noopener noreferrer"
            href="https://clients.mindbodyonline.com/classic/ws?studioid=280495&stype=-7&sVT=18&sView=week&sLoc=0"
          >
            <div className="creativeCalendarButtonWords">
              Click here for the Creative Arts class calendar
            </div>
          </a>

          <Grid className="expressionList sketchbook">
            <Grid.Column computer={2} tablet={2}>
              <List>
                <List.Item className="bottomCreativeIcons">
                  <List.Icon
                    color="green"
                    className="bottomSingleIcon"
                    size="large"
                    name="paint brush"
                  />
                  <List.Icon
                    color="red"
                    className="bottomSingleIcon"
                    size="large"
                    name="write"
                  />
                  <List.Icon
                    color="teal"
                    className="bottomSingleIcon"
                    size="large"
                    name="object group"
                  />
                  <List.Icon
                    color="orange"
                    className="bottomSingleIcon"
                    size="large"
                    name="image"
                  />
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column computer={8} tablet={8}>
              <List style={styles.creativeBottomList}>
                <List.Item className="bottomListIcon">
                  <List.Header style={styles.quadTitle}>
                    Community Service Art Making
                  </List.Header>
                  <List.Description style={styles.quadDescription}>
                    At FTR we seek to carry our voices into the community!
                    Artists at Fit To Recover have made large scale paintings as
                    decoration for area businesses &amp; organizations.
                  </List.Description>
                </List.Item>

                <List.Item className="bottomListIcon">
                  <List.Header style={styles.quadTitle}>
                    Record Your Story
                  </List.Header>
                  <List.Description style={styles.quadDescription}>
                    Using FTR's recording studio, participants are invited to
                    record their journey of recovery. Using the River Writing
                    practice, participants will be guided through a series of
                    prompts to help them write down their experience of getting
                    sober, and seeking a powerful change.
                  </List.Description>
                </List.Item>

                <List.Item className="bottomListIcon">
                  <List.Header style={styles.quadTitle}>
                    Graphic Journal // Collage // Vision Board
                  </List.Header>
                  <List.Description style={styles.quadDescription}>
                    We are flooded with images daily. In this class we will
                    couple our words with images. Making a conscious choice
                    about what images resonate and which ones to ignore is an
                    exercise in awareness. Participants will have a visual
                    record of this precious time of early recovery.
                  </List.Description>
                </List.Item>

                <List.Item className="bottomListIcon">
                  <List.Header style={styles.quadTitle}>
                    On-Site Mural // Painting made by residents
                  </List.Header>
                  <List.Description style={styles.quadDescription}>
                    Leave your mark and let new people know it is possible to
                    recover. Fit to Recover has been painted by hand by our own
                    community. Residents develop content, and skills for
                    painting for the final piece.
                  </List.Description>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column computer={6} tablet={6} className="creativePicFTarts">
              <img
                className="outdoorsPainting img-responsive"
                src={outdoors}
                alt="Daily Sketchbook"
              />
            </Grid.Column>
          </Grid>
        </div>

        <div className="variousMedia" style={styles.variousMediaWords}>
          <h2 className="variousMediaWords" style={styles.variousMediaWords}>
            The Creative Expression Pillar offers tools for authentic processing
            of life. Many addicts are bright and artistic, they just need an
            opportunity to devlop their voice. By offering experiences in both
            visual and language arts, the mission of this pillar is to empower
            members and clients to use their voice and to cultivate mindful
            expression.
          </h2>
        </div>
      </div>
    );
  }
}

const styles = {
  topCreativePadding: {
    paddingTop: "55px"
  },
  creativeTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "110px"
  },
  creativityHead: {
    color: "#007FFF",
    fontWeight: 700,
    fontSize: "3.8em",
    fontFamily: "Cabin Sketch",
    textAlign: "center",
    padding: "0 30px"
  },
  creativeArtsStory: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "150px"
  },
  creativeArtsStoryWords: {
    width: "84%",
    fontWeight: 300,
    textAlign: "center",
    fontSize: "2.5em",
    margin: "0 auto",
    color: "#007FFF",
    lineHeight: 1
  },
  recoveryWords: {
    width: "84%",
    fontWeight: 300,
    textAlign: "center",
    fontSize: "2em",
    margin: "0 auto",
    color: "#5A00BB",
    lineHeight: 1
  },
  artClass: {
    height: "200px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid lightgray"
  },
  artBox: {
    borderRadius: "5px",
    height: "170px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flex: '0className="artBoxWords"  1 15%'
  },
  artBoxWords: {
    fontSize: "3.2em",
    fontWeight: 300
  },
  creativeBottomList: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  quadTitle: {
    fontSize: "1.4em"
  },
  quadDescription: {
    fontSize: "1.1em"
  }
};

export default CreativeArts;
