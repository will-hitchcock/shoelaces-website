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
import { Container, Row } from 'react-shoelaces'
import Button from 'components/Button'
import Header from 'components/Header'
import BasicExample from 'components/BasicExample'
import messages from './messages'

export default class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Row justifyContent="center">
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
        </Row>
        <Row justifyContent="center">
          <Button path="docs">
            <FormattedMessage {...messages.docs} />
          </Button>
          <Button external path="https://github.com/will-hitchcock/shoelaces">
            <FormattedMessage {...messages.github} />
          </Button>
        </Row>
        <BasicExample />
      </Container>
    )
  }
}
