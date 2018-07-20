import React from 'react'
import { Tab } from 'semantic-ui-react'
import BulletinBoard from './BulletinBoard'
import CurrentStaff from './CurrentStaff'
import BoardMembers from './BoardMembers'
import Newsletter from './Newsletter'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { handleLogout } from '../../reducers/user';


class TabExampleSecondaryPointing extends React.Component {
  
  render() {
    const panes = [
      { menuItem: 'Bulletin Board', render: () => <BulletinBoard /> },
      { menuItem: 'Current Staff', render: () => <CurrentStaff /> },
      { menuItem: 'Board Members', render: () => <BoardMembers /> },
      { menuItem: 'Newsletter', render: () => <Newsletter /> },
      { menuItem: 'Log Out', render: () => <Button primary onClick={() => this.props.dispatch(handleLogout(this.props.history))} />},
    ]
    return(
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} style={{width: '90%', margin: '0 auto'}} />
    )
  }

}


export default connect()(TabExampleSecondaryPointing);