import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='hamburger'
          active={activeItem === 'hamburger'}
          onClick={this.props.action}
        >
        <Icon name='bars' />
        </Menu.Item>

        <Menu.Item
          name='Open an account'
          active={activeItem === 'Open an account'}
          onClick={this.handleItemClick}
        >
          Open an account <Icon name='angle down' />
        </Menu.Item>
        <Menu.Item header>Chase </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item
          name='ATM and branch'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        >
          ATM &amp; branch
        </Menu.Item>
        <Menu.Item name='Espanol' active={activeItem === 'Espanol'} onClick={this.handleItemClick} />
      
        <Menu.Item
          name='search'
          active={activeItem === 'search'}
          onClick={this.handleItemClick}
        >
        <Icon name='search' />
        </Menu.Item>
        </Menu.Menu>
      </Menu>
      
    )
  }
}

export default Header