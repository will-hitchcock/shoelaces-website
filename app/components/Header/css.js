import colors from 'utils/colors'

const phi = (1 + Math.sqrt(5)) / 2
const shared = {
  textAlign: 'center',
  color: colors.primaryDark,
  margin: '0.25em 0'
}

const h1 = {
  fontSize: `${phi ** 3}em`,
  ...shared
}
const h2 = {
  fontSize: `${phi ** 2}em`,
  ...shared
}
const h3 = {
  fontSize: `${phi ** 1}em`,
  ...shared
}
const h4 = {
  fontSize: '1em',
  ...shared
}
const h5 = {
  fontSize: '1em',
  ...shared
}

export default { h1, h2, h3, h4, h5 }
