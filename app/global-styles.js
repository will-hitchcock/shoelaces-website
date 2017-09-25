import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
export const globalStyles = injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    color: white;
    background: linear-gradient(45deg, rgba(70,130,180,1) 0%, rgba(99,184,255,1) 100%);
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`
