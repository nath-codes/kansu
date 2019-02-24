import { rem } from 'polished'
import * as React from 'react'
import { animated, useTrail } from 'react-spring'
import styled from 'styled-components'
import Container from '../components/container'
import Heading from '../components/heading'
import Section from '../components/section'
import SEO from '../components/seo'
import Text from '../components/text'

import AmazonLogo from '../images/amazon.svg'
import Fresh8Logo from '../images/fresh-8.png'
import GenomicsEnglandLogo from '../images/genomics-england.png'
import MubalooLogo from '../images/mubaloo.svg'
import RHELogo from '../images/rhe.png'
import ZoneLogo from '../images/zone.svg'

import { META_TITLES } from '../constants'

const StyledDiv = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: ${rem(24)};
  grid-row-gap: ${rem(24)};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${rem(48)} ${rem(48)};

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    grid-column-gap: ${rem(48)};
    grid-row-gap: ${rem(24)};
    grid-template-rows: ${rem(96)} ${rem(96)};
  }
`

const StyledText = styled(Text)`
  margin-bottom: ${rem(24)};
`

const StyledImg = styled(animated.img)`
  object-fit: contain;
`

const clients = [
  { src: AmazonLogo, alt: 'Amazon logo' },
  { src: ZoneLogo, alt: 'Zone Digital logo' },
  { src: MubalooLogo, alt: 'Mubaloo logo' },
  { src: Fresh8Logo, alt: 'Fresh 8 Logo logo' },
  { src: GenomicsEnglandLogo, alt: 'Genomics England logo' },
  { src: RHELogo, alt: 'RHE logo' },
]

const ClientsPage = () => {
  const trail = useTrail(6, {
    from: { opacity: 0 },
    opacity: 1,
  })

  return (
    <>
      <SEO title={META_TITLES.CLIENTS} />
      <Section>
        <Heading>Clients</Heading>
        <Container>
          <StyledText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            omnis molestiae deserunt? Dolore, eos exercitationem! Vitae
            doloremque illum aliquam esse laboriosam, nihil nostrum, vero
            dolores, magnam ipsam maiores quos mollitia!
          </StyledText>
          <StyledDiv>
            {trail.map((styleProps, index) => (
              <StyledImg
                {...clients[index]}
                key={clients[index].alt}
                style={styleProps}
              />
            ))}
          </StyledDiv>
        </Container>
      </Section>
    </>
  )
}

export default ClientsPage
