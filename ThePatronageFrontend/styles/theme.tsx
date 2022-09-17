import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Myanmar Khyay', monospace` }

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
})

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            red: '#f56565',
            offwhite: '#fdfdfd',
            pink: '#dbbdd9',
            turquiose: '#009393',
            cement: '#a8aeaf',
            bluegreen: '#004346',
            plum: '#42253f',
        gray: {
            800: '#000',
        },
    },
    fonts,
    breakpoints,
    global: {
        body: {
            bg: "black"
        }
    }
})

export default theme
