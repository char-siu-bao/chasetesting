import React from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'

const footerElement = () => (
    <Grid.Column>
    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
  </Grid.Column>
)

const Footer = () => (
    <Grid columns={6} divided>
      <Grid.Row>
      {Array.apply(null, { length: 6 }).map((e, i) => (
  <Grid.Column>
  <Icon name='birthday cake' size='huge'/>
  <h2>Subheading </h2> 
  <p>some sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample text</p>
</Grid.Column>
))}
      </Grid.Row>
  
      <Grid.Row>
      {Array.apply(null, { length: 6 }).map((e, i) => (
  <Grid.Column>
  <Icon name='birthday cake' size='huge'/>
  <h2>SubHeading</h2>
  <p>some sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample textsome sample text</p>
</Grid.Column>
))}
      </Grid.Row>
    </Grid>
  )
  
  export default Footer