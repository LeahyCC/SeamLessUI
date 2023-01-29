import { ThemeDefinition } from './definitions'

export const scrollbarWidth = '14px'

// Scroll bar styles are in a specific order
export const getGlobalStyles = (theme: ThemeDefinition) => `
  body {
    background-color: ${theme.color.pageBackground};
    color: ${theme.color.text};
    font-family: ${theme.fontFamily.default};
    font-weight: ${theme.fontWeight.default};
    line-height: ${theme.lineHeight.default};
    min-height: 100vh;
  }

 ::-webkit-scrollbar {
    width: ${scrollbarWidth};
  }
  
  body {
    scrollbar-width: auto;
    scrollbar-color: ${theme.color.gray400} ${theme.color.gray200};
  }
  
  ::-webkit-scrollbar-track {
    background: ${theme.color.gray200};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.color.gray400};
    border-radius: 12px;
    border: 3px solid ${theme.color.gray200};
  } 

  ::-webkit-scrollbar-corner {
    background: ${theme.color.gray200};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 0;
    -webkit-text-fill-color: ${theme.color.text};
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    mix-blend-mode: lighten;
    font-family: ${theme.fontFamily.default}
  }
`
