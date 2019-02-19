import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

function SidebarElement (props) {
  switch(props.elem.type){
    case 'link':
      return (<Menu.Item as='a' name={props.elem.text} onClick={props.elem.action}/>);
    case 'title':
      return (<Menu.Item as='p' name={props.elem.text} onClick={props.elem.action}/>);
    case 'icon':
      return (
      <Menu.Item as='a' name={props.elem.text} onClick={props.elem.action}>
        <Icon name={props.elem.icon} />
      </Menu.Item>);
  }
  
}

export default SidebarElement