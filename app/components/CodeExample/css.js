import colors from 'utils/colors'

const editor = {
  '.fontLoaded &': {
    fontFamily: '"Roboto Mono", monospace'
  },
  overflow: 'scroll'
}

const error = {
  borderLeft: `5px ${colors.darkRed} solid`,
  backgroundColor: colors.red,
  padding: '0.5em',
  color: colors.darkRed,
  marginTop: '0.5em'
}

export { editor, error }
