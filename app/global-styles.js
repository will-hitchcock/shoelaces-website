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
      fontFamily: '"Roboto", sans-serif'
    }
  },
  '#app': {
    color: colors.primary,
    background: 'white',
    // background: `linear-gradient(45deg, ${colors.primaryLighter} 0%, ${colors.gray} 100%)`,
    minHeight: '100%',
    minWidth: '100%'
  }
}

/* eslint no-unused-expressions: 0 */
injectGlobal`${globalStyles}`
