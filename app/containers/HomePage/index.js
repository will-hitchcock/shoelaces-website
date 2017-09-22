/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { Container, Row, Col } from 'react-shoelaces'
import Button from 'components/Button'
import Box from 'components/Box'
import Header from 'components/Header'
import messages from './messages'

export default class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Row>
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
        </Row>
        <Row>
          <Col xs="auto">
            <Button path="docs">Docs</Button>
          </Col>
          <Col xs="auto">
            <Button external path="https://github.com/will-hitchcock/shoelaces">
              Github
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={4 / 12}><Box /></Col>
          <Col xs={4 / 12}><Box /></Col>
          <Col xs={4 / 12}><Box /></Col>
        </Row>
        <Row>
          <Col xs={6 / 12}><Box /></Col>
          <Col xs={6 / 12}><Box /></Col>
        </Row>
      </Container>
    )
  }
}
