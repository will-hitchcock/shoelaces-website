/**
*
* Button
*
*/
import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router'
import css from './css'

const StyledLink = styled(Link)`${css};`
const A = styled.a`${css};`

const Button = ({ children, external, path }) =>
  external ? (
    <A href={path}>{children}</A>
  ) : (
    <StyledLink to={path}>{children}</StyledLink>
  )

Button.propTypes = {}

export default Button
