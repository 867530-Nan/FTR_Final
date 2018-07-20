import React from 'react'
import axios from 'axios'
import NewsletterList from './NewsletterList'
import NewNewsletter from './NewNewsletter'
import EditNewsletter from './EditNewsletter'

class Newsletter extends React.Component{

  state = { showAll: true, newsletters: [] }

  componentDidMount() {
    this.fetchNewsletters()
  }

  fetchNewsletters = () => {
    axios.get('/api/newsletters')
      .then( res => this.setState({ newsletters: res.data, showAll: true }))
      .catch( res => console.log(res))
  }

  editButton = info => {
    this.setState({ editNewsletter: info, showAll: false, create: false  })
  }

  deleteButton = (newsletter) => {
    axios.delete(`/api/newsletters/${newsletter.id}`)
    const newArr = this.state.newsletters.filter(single => single.id !== newsletter.id)
    this.setState({ newsletters: newArr })
  }

  cancelButton = () => {
    this.setState({ showAll: true })
  }

  render(){
    if (this.state.showAll){
      return <NewsletterList 
              editButton={this.editButton} 
              newsletters={this.state.newsletters} 
              deleteButton={this.deleteButton}
              createButton={() => this.setState({ create: true, showAll: false })}
            />
    } else if (this.state.create){
      return(
        <NewNewsletter
          back={this.fetchNewsletters} 
          cancelButton={this.cancelButton}
        />
      )
    } else {
      return(
        <EditNewsletter
          newsletter={this.state.editNewsletter} 
          back={this.fetchNewsletters} 
          cancelButton={this.cancelButton} 
        />
      )
    }
  }
}

export default Newsletter