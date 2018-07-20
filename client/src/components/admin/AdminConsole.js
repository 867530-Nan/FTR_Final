import React from 'react'
import AdminNavigationTabs from './AdminNavigationTabs'

class AdminRouter extends React.Component {



  switchRouter = () => {

  }

  render() {
    return(
        <div
          style={{paddingTop: '100px'}}
        >
          <AdminNavigationTabs />
        </div>
    )
  }
}

export default AdminRouter;