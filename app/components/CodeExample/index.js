/**
*
* CodeExample
*
*/
import React from 'react'
import styled from 'styled-components'
import { string, object } from 'prop-types'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Row, Col } from 'react-shoelaces'
import { flex } from 'shoelaces'
import { editor, error } from './css'

const StyledEditor = styled(LiveEditor)`
  ${editor}
  ${flex}`
const StyledError = styled(LiveError)`
  ${error}
`

const CodeExample = ({ code, scope }) =>
  <LiveProvider scope={scope} code={code}>
    <LivePreview />
    <Row justifyContent="center">
      <Col xs={1} lg={8 / 12}>
        <StyledEditor />
        <StyledError />
      </Col>
    </Row>
  </LiveProvider>


CodeExample.propTypes = {
  code: string,
  scope: object
}

export default CodeExample
