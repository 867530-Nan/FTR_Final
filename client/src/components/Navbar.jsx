import React, { Component } from 'react'
import { } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Dropdown, Menu } from 'semantic-ui-react'
import  Logo from '../assets/images/FTR-logo-NAVBAR.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/navbar.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ResponsiveMenu from './ResponsiveNavbar'
import hamburgerIcon from '../assets/images/logoHamburger.png'

const ThisPlace = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=GJ2922U6S4SEN&lc=US&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"

const thisIsNavbar = (
  <Menu
    className="newNav"
  >
    <div
      className="logoWrapper"
    >
      <a href="/">
        <img className="navbarImage" src={Logo} alt="FTR Logo"/>
      </a>
    </div>
    <div
      className="newNavLinks"
    >
    <Menu.Item
      style={{backgroundColor: 'red'}}
      as="a"
      href={ThisPlace}
    >
      <a 
        target="_blank" 
        rel="noopener referrer" 
        to={ThisPlace} 
        style={{color: 'white'}}
      >
        DONATE
      </a>
    </Menu.Item>
    <Menu.Item
      className="HomeNavLink"
    >
      <Link 
        to="/" 
        style={{color: 'red'}}
      >
        Home
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/calendar">Calendar</Link>
    </Menu.Item>
    <Dropdown text='About Us' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to="/philosophy">Philosophy</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/history">History</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/testimonials">Testimonials</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/sponsorsandpartners">Sponsors &amp; Partners</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown text='Programs' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to="/fitness">Fitness</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/nutrition">Nutrition</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/community">Community</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/creativearts">Creative Arts</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown text='Media' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to="/gallery">Gallery</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/newstime">Newsletter Archive</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown text='Team FTR' pointing="top right" className='link item lastGuyNav'>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to="/currentstaff">Current Staff</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/board">Board of Directors</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/contact">Contact Us</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  </Menu>
)

const hamburger = (
  <div
    className="hamburgerNewNav"
  >
    <img src={hamburgerIcon} alt="navbar Icon" style={{height: '100%', margin: '10px'}}/>
  </div>
)

class NavBar extends Component {
  state = { showMenu: false }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  componentDidUpdate(pP){
    if (pP.router !== this.props.router) {
      this.setState({ showMenu: false })
    }
  }

  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={hamburger}
        menuCloseButton={hamburger}
        changeMenuOn="768px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={thisIsNavbar}
        router={this.props.router}
        handleClick={this.handleClick}
        showMenu={this.state.showMenu}
      />
    )
  }
}

export default connect()(withRouter(NavBar))



{/* <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">
          <a href="/">
            <img className="navbarImage" src={Logo} alt="FTR Logo"/>
          </a>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="paypalDonateButton">
              <NavLink target="_blank" rel="noopener referrer" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=GJ2922U6S4SEN&lc=US&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"><BLink href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=GJ2922U6S4SEN&lc=US&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted" className="donateText" target="_blank" rel="noopener referrer">DONATE</BLink></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/calendar" ><BLink>Calendar</BLink></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About Us
              </DropdownToggle>
              <DropdownMenu >
                <NavItem>
                 <NavLink href="/philosophy"><BLink>Philosophy</BLink></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/history"><BLink>Our History</BLink></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/testimonials"><BLink>Testimonials</BLink></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sponsorsandpartners"><BLink>Sponsors &amp; Partners</BLink></NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Programs
              </DropdownToggle>
              <DropdownMenu >
                <NavItem>
                 <NavLink href="/fitness"><BLink>Fitness</BLink></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/creativearts"><BLink>Creative Arts</BLink></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/nutrition"><BLink>Nutrition</BLink></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/community"><BLink>Community Service</BLink></NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Media
              </DropdownToggle>
              <DropdownMenu >
                <NavItem>
                 <NavLink href="/gallery"><BLink>Gallery</BLink></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/newstime"><BLink>Newsletter Archive</BLink></NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Team FTR
              </DropdownToggle>
              <DropdownMenu >
                <NavItem>
                 <NavLink href="/currentstaff"><BLink>Current Staff</BLink></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/board"><BLink>Board of Directors</BLink></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact"><BLink>Contacts Us</BLink></NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar> */}