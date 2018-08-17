import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer'
import './App.css';
import AsyncComponent from './AsyncComponent'
import FetchUser from './FetchUser'
import AuthRoute from './AuthRoute'
import ProtectedRoute from './ProtectedRoute'

const Calendar = AsyncComponent(() => {
  return (
      import('./components/calendar').then(module => module.default)
)}
)

const Sponsors = AsyncComponent(() => {
  return (
      import('./components/aboutus/sponsors').then(module => module.default)
)}
)

const Login = AsyncComponent(() => {
  return (
      import('./components/admin/Login').then(module => module.default)
)}
)

const Newsletter = AsyncComponent(() => {
  return (
      import('./components/media/newsletter').then(module => module.default)
)}
)

const Home = AsyncComponent(() => {
  return (
      import('./components/ftr_home').then(module => module.default)
)}
)

const NoMatch = AsyncComponent(() => {
  return (
      import('./components/nomatch').then(module => module.default)
)}
)

const Contact = AsyncComponent(() => {
  return (
      import('./components/teamftr/contact').then(module => module.default)
)}
)

const CurrentStaff = AsyncComponent(() => {
  return (
      import('./components/teamftr/currentstaff').then(module => module.default)
)}
)

const Gallery = AsyncComponent(() => {
  return (
      import('./components/media/gallery').then(module => module.default)
)}
)

const CommunityService = AsyncComponent(() => {
  return (
      import('./components/programs/communityservice').then(module => module.default)
)}
)

const CreativeArts = AsyncComponent(() => {
  return (
      import('./components/programs/creativearts').then(module => module.default)
)}
)

const Board = AsyncComponent(() => {
  return (
      import('./components/teamftr/board').then(module => module.default)
)}
)

const Testimonials = AsyncComponent(() => {
  return (
      import('./components/aboutus/testimonials').then(module => module.default)
)}
)

const Fitness = AsyncComponent(() => {
  return (
      import('./components/programs/fitness').then(module => module.default)
)}
)

const Nutrition = AsyncComponent(() => {
  return (
      import('./components/programs/nutrition').then(module => module.default)
)}
)

const FTRHistory = AsyncComponent(() => {
  return (
      import('./components/aboutus/history').then(module => module.default)
)}
)

const Philosophy = AsyncComponent(() => {
  return (
      import('./components/aboutus/philosophy').then(module => module.default)
)}
)

const Admin = AsyncComponent(() => {
  return (
      import('./components/admin/Index').then(module => module.default)
)}
)

const Register = AsyncComponent(() => {
  return (
      import('./Register').then(module => module.default)
)}
)

let routerNumber = 0

class App extends Component {

  componentDidMount(){
    if (window.location.href === "http://localhost:3000/undefined" || window.location.href === "https://fit2recover.org/undefined" || window.location.href === "https://www.fit2recover.org/undefined") {
      alert("Something went wrong, and this link is temporarily broken.\n\nIf you still wish to view this page..\na) Directly type the address into the URL above,\nb) Switch to another browser, as this issue is Safari only, at least to our Web Master's knowledge..\n\nOur sincere apologies,\n ~ Team FTR"),
      window.history.back()
    }
  }

  componentDidUpdate(){
    routerNumber++
  }

  render() {
    
    return (
      <div> 
        <NavBar router={routerNumber}/>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/calendar' component={Calendar}/>
            <Route exact path='/history' component={FTRHistory}/>
            <Route exact path='/philosophy' component={Philosophy}/>
            <Route exact path='/testimonials' component={Testimonials}/>
            <Route exact path='/sponsorsandpartners' component={Sponsors} />
            <Route exact path='/fitness' component={Fitness}/>
            <Route exact path='/nutrition' component={Nutrition}/>
            <Route exact path='/community' component={CommunityService}/>
            <Route exact path='/creativearts' component={CreativeArts}/>
            <Route exact path='/board' component={Board}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/currentstaff' component={CurrentStaff}/>
            <Route exact path='/gallery' component={Gallery}/>
            <Route exact path='/newstime' component={Newsletter}/>
            <AuthRoute exact path='/login' component={Login} />
            {/* <Route exact path='/register' component={Register} /> */}
            <ProtectedRoute exact path='/admin' component={Admin} />
            <Route component={NoMatch} />
          </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
