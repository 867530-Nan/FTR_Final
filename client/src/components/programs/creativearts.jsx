import React, { Component } from 'react'
import styled from 'styled-components'
import '../../styles/creativearts.css'
import { List, Grid } from 'semantic-ui-react'
import riverWriting from '../../assets/images/creative-writing.png'
import groupMural from '../../assets/images/guys-paintings.png'
import outdoors from '../../assets/images/outdoorsPainting.png'
import SongWriting from '../../assets/images/SongWriting.jpg'

import DonateButton from '../DonateButton'
import { TopPadding } from '../ftr_home'

const HighlightedTrackWrap = styled.div`
  height: 250px;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const HighlightHeader = styled.h1`
  color: black;
  text-align: center;
  width: 75%;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

class CreativeArts extends Component {
  render() {
    return (
      <div>
        <TopPadding />

        <div className='creativeTop' style={styles.creativeTop}>
          <h1 className='creativityHead' style={styles.creativityHead}>
            Creative expression has the power to connect us.
          </h1>
        </div>
        {/* asdfasdf */}
        <div className='sarahPainting' />

        <div className='creativeArtsStory' style={styles.creativeArtsStory}>
          <div className='creativeArtsStoryWords' style={styles.creativeArtsStoryWords}>
            Recovery is strengthened when a person takes ownership of their story and
            expresses it through different media.
          </div>
        </div>

        {/* <a
          className='creativeCalendarButton'
          target='_blank'
          rel='noopener noreferrer'
          href='https://clients.mindbodyonline.com/classic/ws?studioid=280495&stype=-7&sVT=18&sView=week&sLoc=0'
        >
          <div className='creativeCalendarButtonWords'>
            Click here for the Creative Arts class calendar
          </div>
        </a> */}

        <div className='artClass' style={styles.artClass}>
          <div className='artBox music' style={styles.artBox}>
            <h4 className='artBoxWords' style={styles.artBoxWords}>
              Music
            </h4>
            <img
              class='icon icons8-Music'
              alt='small icon of a musical note'
              width='75'
              height='75'
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAEoklEQVR4Xu2czW7TQBDHd50UFRVEewGFU3iChhukkSg31AYlb5DwBM0b0D5BwxM0vIErSsWNIkHh1vAEhEtTuBSk8iE18TJr7BKq7DpjTxLHXksIocyuvT/+OztrzyxnKb665dIqE6ImOK/C352M5WzdevHeViHhaWP1da1Y6HFeg4FXGef5IeN/mNt7ezCMSypgdR/dy/NstuIIUeecF7QCEeJ57uW7eqpgnVYLi7/PFyqgHjnwVcQMegPKGmqfOGV111dcH+ROs3BXsmGdrBUrEpAHaTEco4tWyYM1gqMOyywZsHxHLYRoKFaysIAG280uLN9RC8YagSsZBSrGZgvWBaBojjosutmAReyokwfLd9QyHoLlPupKFhZQfH2WdNQsm63Bfqw+RkcdFtz0pyFqyxF2mKO2E+y74KLDGV8e0mR6sOTOHlayjQgR9agI9HYAiDFhW5ZjyzcL8Fyb0OBpbGDB1mPH25vRDDhELxCT7XIh7PkrP+0lu/3N7yJWsI7XV2RctB1ifJGbCCY+MsFaV+d+tAYBDXYcL1jl0ulEVzchPoMfsnnPaeZefegEEY8VLHgYcFVjvjw/lBGieXP/sI25W3pgwQs631FjAMV2GlIrS+WoDSyPgO+oeb9vj+KHMOCSMQ2RjhoDKBnTMIKjTg0s6YfgW11L960uLIygdrMyDd8wx2ldjqiDBkf9+6zAUn7EpAai68/AQtA2sAwsBAGEqVGWgYUggDA1yjKwEAQQpkZZBhaCAMLUKMvAQhBAmBplGVgIAghToywDC0EAYWqUZWAhCCBMjbIMLAQBhKlR1hBYMg2zb1kV+EnmiRUuklWgCkyRdTj5ZDbN5/uJfLD48vh+1XGs7RBpmOmB5eWr7kglIWbloGk6YHXXinVhWdsR88KSD0uCYpYlFRX1SjYst3yXsddRKXntkwtL+iiRzR5FnHrp8FmQEd2CFa9GpCrZTTKV5cVQR4SgIMnZeXZ777AxrM/IZb9uBVf/+jKUllxeqjcVgyCLs47LxSZn1gYlLMjweZLbP2yRwopQOUEGC6bgpxBBp5btfPZsSZU7j1aWJ31ZDBA26KODRZ0+rjmmQBJGwToplzZgf9WMKPt4woJUzfm5s7xKVShYhHU48YSl8VW+OEZSFiEoeV8yWMfllbaiDA4lft0KONhRICzCbYR/XzpYNMVUW3BCiGrl/g+6FtYYomOWcZy72DobnUxCqwt8lGX165hMaT0s+uiYwf9ioJoxc0jGeb96Cweo6QirHuv3N7FVG8oHd4PN3rVTzIMH2kL1BJwglA+0Qxp4z9qA8BsOx2A3hjYnqNxQwhqDr9JuJZB8lObeG4h/MaDjdDKMtSmmvhLWWLYSvd4drPSpIFL0o1ZWuXQAN3hAcRO3j4DomOw+Y+xoMrBGiI7HOEayricyDanDBbLRIztSwiJ7VzTCNgL5zFMz18dZUfwWTL2McFYpVqGp0bl0Yy2sUAGf68vFLpypUNft4OMCAPMcgdG0C+x8oQUHWshP4NrLLfrmvKk65zOofdx/D4TlD8D70luHf/8N+ITIw1vKjjw5Fv4cTLvYchKg/wA6j1d5PFnAEAAAAABJRU5ErkJggg=='
            />
          </div>
          <div className='artBox poetry' style={styles.artBox}>
            <h4 className='artBoxWords' style={styles.artBoxWords}>
              Poetry
            </h4>
            <img
              class='icon icons8-Quill-With-Ink-Filled'
              alt='small icon of quill and ink'
              width='75'
              height='75'
              src='data:image/png;base64,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'
            />
          </div>
          <div className='artBox writing' style={styles.artBox}>
            <h4 className='artBoxWords' style={styles.artBoxWords}>
              Writing
            </h4>
            <img
              class='icon icons8-Hand-With-Pen'
              width='75'
              height='75'
              alt='small icon of a hand with a pencil'
              src='data:image/png;base64,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'
            />
          </div>
        </div>

        <HighlightedTrackWrap>
          <HighlightHeader>
            Think Benjamin helped start the music program and recorded his entire album at
            the studio upstairs at FTR
          </HighlightHeader>
          <iframe
            width='75%'
            height='200'
            scrolling='no'
            frameborder='no'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/666503228&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          />
        </HighlightedTrackWrap>

        <div className='hidden-xs'>
          <div className='expression riverWriting'>
            <div className='expressionWords'>
              <span className='riverWritingWords'>Creative Writing</span>
              <br />
              Writing offers an outlet for thoughts and feelings. It is a powerful tool in
              awareness. It can be used to process past events, or to create a vision for
              the future.
            </div>
            <img
              style={{ maxWidth: '400px', minWidth: '350px' }}
              src={riverWriting}
              alt='the words Creative Writing in unique font'
            />
          </div>
          <div className='expression groupMural'>
            <img
              className='img-responsive'
              style={{ maxWidth: '20%', minWidth: '350px' }}
              src={SongWriting}
              alt='Group Paint Night'
            />
            <div className='expressionWordsEven'>
              <span className='riverWritingWords'>Song Writing Circle</span>
              <br />
              Learn song writing techniques in a group setting that provides an
              opportunity for enhanced creativity, self expression and community
              connection. By the end of the session writers will have a completed,
              recorded song!
            </div>
          </div>
          <div className='expression groupMural'>
            <div className='expressionWords'>
              <span className='riverWritingWords'>Saturday Freestyle</span>
              <br />
              Come in, Catch a Vibe, Record a Freestyle. <br />
              This program is for everyone and anyone, regardless of writing skills and
              comfort in front of the mic. Creative Writing - free to members Remove
              creative arts calendar
            </div>
            <img
              style={{ maxWidth: '15%', minWidth: '200px', height: 'unset !important' }}
              src='https://files.constantcontact.com/25b22253501/45d6c501-b2e2-426d-9799-0ebf89a288de.jpg'
              alt='Group Paint Night'
            />
          </div>
        </div>

        <div className='variousMedia'>
          <h2 className='variousMediaWords'>
            The Creative Expression Pillar offers tools for authentic processing of life.
            Many addicts are bright and artistic, they just need an opportunity to devlop
            their voice. By offering experiences in both visual and language arts, the
            mission of this pillar is to empower members and clients to use their voice
            and to cultivate mindful expression.
          </h2>
        </div>
      </div>
    )
  }
}

const styles = {
  topCreativePadding: {
    paddingTop: '55px'
  },
  creativeTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '110px'
  },
  creativityHead: {
    color: '#007FFF',
    fontWeight: 700,
    fontSize: '3.8em',
    fontFamily: 'Cabin Sketch',
    textAlign: 'center',
    padding: '0 30px'
  },
  creativeArtsStory: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '150px'
  },
  creativeArtsStoryWords: {
    width: '84%',
    fontWeight: 300,
    textAlign: 'center',
    fontSize: '2.5em',
    margin: '0 auto',
    color: '#007FFF',
    lineHeight: 1
  },
  recoveryWords: {
    width: '84%',
    fontWeight: 300,
    textAlign: 'center',
    fontSize: '2em',
    margin: '0 auto',
    color: '#5A00BB',
    lineHeight: 1
  },
  artClass: {
    height: '200px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '1px solid lightgray'
  },
  artBox: {
    borderRadius: '5px',
    height: '170px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: '0className="artBoxWords"  1 15%'
  },
  artBoxWords: {
    fontSize: '3.2em',
    fontWeight: 300
  },
  creativeBottomList: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  quadTitle: {
    fontSize: '1.4em'
  },
  quadDescription: {
    fontSize: '1.1em'
  }
}

export default CreativeArts
