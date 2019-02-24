import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto:900');

    *, *:before, *:after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 100%;
        line-height: 1.5;
    }

    body {
        background: linear-gradient(
            ${props => props.theme.colors.darkBlue},
            ${props => props.theme.colors.black}
        );
        background-repeat: no-repeat;
        color: ${props => props.theme.colors.grey};
        font-family: ${props => props.theme.fonts.body};
        margin: 0;
    }

    ul, ol, li {
        list-style-type: none;
        padding: 0;
        padding-inline-start: 0;
        margin: 0;
    }

    a {
        cursor: pointer;
        text-decoration: none;
    }

    button {
        background: none;
        border: 0;
        cursor: pointer;
        padding: 0;

        &:focus {
            outline: 0;
        }
    }

    img {
        height: 100%;
        width: 100%;
    }

    p {
        margin: 0;
    }
`
