import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Footer from './footer'
import Header from './header'
import Main from './main'

import theme from '../constants/theme'

interface LayoutProps {
  children: JSX.Element[]
}

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto:900');

    html {
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.grey};
        font-family: ${props => props.theme.fonts.body};
        font-size: 1rem;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
`

const Layout = ({ children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Main>{children}</Main>
          <Footer />
        </StyledLayout>
      </ThemeProvider>
    )}
  />
)

export default Layout
