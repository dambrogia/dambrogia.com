import {Html, Head, Main, NextScript} from 'next/document'

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandNum(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const themes = ['business', 'night', 'forest', 'dark', 'black', 'luxury']
const selectedTheme = themes[getRandNum(0, themes.length + 1)]

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div data-theme={'black'}>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
