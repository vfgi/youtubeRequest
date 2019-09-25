import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  .ScrollbarsCustom {
          /* height: 100%; */
          transition: all 0.5s ease;

          .ScrollbarsCustom-Wrapper {
            right: 5px !important;
            bottom: 0 !important;
          }

          .ScrollbarsCustom-Content {
            height: 100%;
            width: 100%;
          }

          .ScrollbarsCustom-Track {
            /* background-color: rgba(105, 189, 53, 0.3) !important; */
            background-color: #69bd3566 !important;
          }

          .ScrollbarsCustom-Thumb {
            background-color: #69bd35 !important;
          }

          .ScrollbarsCustom-TrackY {
            height: 100% !important;
            width: 5px !important;
            top: 0 !important;
          }

          .ScrollbarsCustom-TrackX {
            height: 5px !important;
            width: 100% !important;
            left: 0 !important;
            display:none;
          }
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: #091E42;
    font-family: 'Open Sans', sans-serif;
  }
`

export default GlobalStyle
