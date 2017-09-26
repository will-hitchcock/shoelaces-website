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
import Header from 'components/Header'
import CodeExample from 'components/CodeExample'
import examples from 'components/CodeExample/examples'
import messages from './messages'

export default class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Col justifyContent="center">
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
          <Header type="h3">
            <FormattedMessage {...messages.subHeader} />
          </Header>
        </Col>
        <Row justifyContent="center">
          <Button path="docs">
            <FormattedMessage {...messages.docs} />
          </Button>
          <Button external path="https://github.com/will-hitchcock/shoelaces">
            <FormattedMessage {...messages.github} />
          </Button>
        </Row>
        {examples.map(item => <CodeExample key={item.name} scope={item.scope} code={item.code} />)}
      </Container>
    )
  }
}
