import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import SidebarChase from './SidebarComponents/SidebarChase'
import { Button, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'
import Footer from './Footer'


class App extends Component {
  constructor(props) {
    super(props)

    // Bind the this context to the handler function
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);

    // Set some state
    this.state = {
      sidebarIsOpen: false
    };
  }

  openSidebar() {
    this.setState({
      sidebarIsOpen: true
    });
  }

  closeSidebar() {
    this.setState({
      sidebarIsOpen: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar.Pushable as={Segment}>
          <Sidebar.Pusher dimmed={this.state.sidebarIsOpen} >
          <Segment basic>
            <Header action={this.openSidebar} className='header'/>
          </Segment>
          <Image src='https://www.planwallpaper.com/static/images/cold_galaxy-HD.jpg' />
          {/* </Header> */}
          {/* </Segment> */}
          <Footer />
          </Sidebar.Pusher >
          <SidebarChase visible={this.state.sidebarIsOpen} action={this.closeSidebar}/>
        </Sidebar.Pushable>
      </React.Fragment>
    );
  }
}

export default App;
