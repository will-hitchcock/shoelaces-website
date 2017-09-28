/**
*
* Button
*
*/
import React from 'react'
import { node, bool, string } from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router'
import css from './css'

const StyledLink = styled(Link)`${css}`
const A = styled.a`${css}`

const Button = ({ children, external, path }) =>
  external ? (
    <A href={path} target="_blank">{children}</A>
  ) : (
    <StyledLink to={path}>{children}</StyledLink>
  )

Button.propTypes = {
  children: node,
  external: bool,
  path: string.isRequired
}

export default Button
