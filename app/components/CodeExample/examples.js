import ReactShoelaces from 'react-shoelaces'
// import { container } from 'shoelaces'
import Box from 'components/Box'

const ReactScope = { Box, ...ReactShoelaces }

const examples = [
  {
    name: 'basic',
    scope: ReactScope,
    code: `<Container>
  <Row>
    <Col xs={1 / 5}><Box /></Col>
    <Col xs={1 / 5}><Box /></Col>
    <Col xs={1 / 5}><Box /></Col>
    <Col xs={1 / 5}><Box /></Col>
    <Col xs={1 / 5}><Box /></Col>
  </Row>
  <Row>
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
  <Row>
    <Col xs={1 / 2}><Box /></Col>
    <Col xs={1 / 2}><Box /></Col>
  </Row>
</Container>
  `
  },
  {
    name: 'justify',
    scope: ReactScope,
    code: `<Container>
  <Row>
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
  <Row justifyContent="around">
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
  <Row justifyContent="center">
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
  <Row justifyContent="start">
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
  <Row justifyContent="end">
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
</Container>
  `
  },
  {
    name: 'nesting',
    scope: ReactScope,
    code: `<Container>
  <Row>
    <Col xs={1 / 2}>
      <Box color="primaryDark">
        <Row>
          <Col xs={1 / 3}><Box/></Col>
          <Col xs={2 / 3}>
            <Box>
              <Row>
                <Col xs={1 / 4}><Box color="primaryDarker"/></Col>
                <Col xs={3 / 4}><Box color="primaryDarker"/></Col>
              </Row>
            </Box>
          </Col>
        </Row>
      </Box>
    </Col>
    <Col xs={1 / 2}><Box color="primaryDark" /></Col>
  </Row>
</Container>
  `
  },
  {
    name: 'responsive',
    scope: ReactScope,
    code: `<Container>
  <Row>
    <Col xs={1} md={1 / 2} lg={1 / 4}><Box /></Col>
    <Col xs={1} md={1 / 2} lg={1 / 4}><Box /></Col>
    <Col xs={1} md={1 / 2} lg={1 / 4}><Box /></Col>
    <Col xs={1} md={1 / 2} lg={1 / 4}><Box /></Col>
  </Row>
  <Row>
    <Col xs={1} lg={1 / 3}><Box /></Col>
    <Col xs={1} lg={1 / 3}><Box /></Col>
    <Col xs={1} lg={1 / 3}><Box /></Col>
  </Row>
</Container>
  `
  },
  {
    name: 'math',
    scope: ReactScope,
    code: `<Container>
  <Row>
    <Col xs={1} md={1 / Math.PI}><Box /></Col>
    <Col xs={1} md={1 / 1 - (1 / Math.PI)}><Box /></Col>
  </Row>
  <Row>
    <Col xs={1} md={1 / 1 - (1 / Math.E)}><Box /></Col>
    <Col xs={1} md={1 / Math.E}><Box /></Col>
  </Row>
  <Row>
    <Col xs={1} md={1 - (1 / ((1 + Math.sqrt(5)) / 2))}><Box /></Col>
    <Col xs={1} md={1 / ((1 + Math.sqrt(5)) / 2)}><Box /></Col>
  </Row>
</Container>
`
  }
]

export default examples
