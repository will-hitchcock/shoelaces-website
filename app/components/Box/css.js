import colors from 'utils/colors'

export const css = ({ color }) => ({
  padding: '1em',
  backgroundColor: colors[color || 'primary']
})

export default css
