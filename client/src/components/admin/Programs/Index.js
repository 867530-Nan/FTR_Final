import React from 'react'
import { Tab } from 'semantic-ui-react'
import Fitness from './Fitness/Index'
import Nutrition from './Nutrition/Index'
import CreativeArts from './CreativeArts/Index'
import Service from './Service/Index'
import { connect } from 'react-redux'


class TabExampleSecondaryPointing extends React.Component {
  
  render() {
    const panes = [
      { menuItem: 'Fitness', render: () => <Fitness /> },
      { menuItem: 'Nutrition', render: () => <Nutrition /> },
      { menuItem: 'Community Service', render: () => <Service /> },
      { menuItem: 'Creative Arts', render: () => <CreativeArts /> },
    ]
    return(
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} style={{width: '90%', margin: '0 auto'}} />
    )
  }

}


export default connect()(TabExampleSecondaryPointing);