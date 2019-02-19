import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import SidebarElement  from './SidebarElement'

export default class SidebarChase extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    const { activeItem } = this.state
    const sidebarElements = [
      { type: 'icon', text: 'close', icon: 'close', action: this.props.action},
      { type: 'link', text: 'Home'},
      { type: 'link', text: 'Sign in'},
      { type: 'link', text: 'Free Credit Score'},
      { type: 'link', text: 'News Stories'},
      { type: 'title', text: 'OPEN AN ACCOUNT'}
    ]
    return (
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={this.handleSidebarHide}
        vertical
        visible={this.props.visible}
        width='thin'
      >
        {sidebarElements.map(item => <SidebarElement key={item.text} elem={item} />)}
      </Sidebar>
    )
  }

}
