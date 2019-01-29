import { rem } from 'polished'
import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled.nav`
  font-family: ${props => props.theme.fonts.heading};
`
const StyledUl = styled.ul`
  display: flex;
`

const StyledLi = styled.ul`
  margin-right: ${rem(24)};

  &:last-child {
    margin-right: 0;
  }
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  display: block;
  font-family: ${props => props.theme.fonts.heading};
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2.3px;
  position: relative;
  text-transform: uppercase;

  &.active {
    position: relative;

    &:after {
      border-bottom: solid ${rem(6)} ${props => props.theme.colors.white};
      bottom: -${rem(12)};
      content: '';
      left: 0;
      position: absolute;
      right: 0;
    }
  }
`

const Nav = () => (
  <StyledNav>
    <StyledUl>
      <StyledLi>
        <StyledLink to="/" activeClassName="active">
          Home
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/about" activeClassName="active">
          About
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/clients" activeClassName="active">
          Clients
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/contact" activeClassName="active">
          Contact
        </StyledLink>
      </StyledLi>
    </StyledUl>
  </StyledNav>
)

export default Nav
