/**
*
* BasicExample
*
*/

import React from 'react'
import { Container, Row, Col } from 'react-shoelaces'
import Box from 'components/Box'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const scope = { Container, Row, Col, Box }

const code =
`<Container>
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
`
const BasicExample = () =>
  <LiveProvider scope={scope} code={code}>
    <LivePreview />
    <Col xs={8 / 12} offset={2 / 12}>
      <LiveEditor />
      <LiveError />
    </Col>
  </LiveProvider>

export default BasicExample