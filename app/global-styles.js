import { injectGlobal } from 'styled-components'
import colors from 'utils/colors'

export const globalStyles = {
  'html, body': {
    height: '100%',
    width: '100%'
  },
  body: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    '.fontLoaded': {
      fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    }
  },
  '#app': {
    color: 'white',
    background: `linear-gradient(45deg, ${colors.primaryLighter} 0%, ${colors.primaryDarker} 100%)`,
    minHeight: '100%',
    minWidth: '100%'
  }
}

/* <Row>
  <Col xs={1 / 5}><Box color="#d40606"/></Col>
  <Col xs={1 / 5}><Box color="#ee9c00"/></Col>
  <Col xs={1 / 5}><Box color="#e3ff00"/></Col>
  <Col xs={1 / 5}><Box color="#06bf00"/></Col>
  <Col xs={1 / 5}><Box color="#001a98"/></Col>
</Row> */

/* eslint no-unused-expressions: 0 */
injectGlobal`${globalStyles}`
