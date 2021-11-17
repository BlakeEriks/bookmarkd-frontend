import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const SubTitle = styled.div`
    font-family: 'Playfair Display', serif;
    color: ${colors.dark};
    font-size: ${fontSizes.large};
    font-weight: bold;
    text-align: center;
    text-decoration: underline;
    margin-bottom: 10px;
`

export const Text = styled.li`
    font-family: Arial, Helvetica, sans-serif;
    color: ${props => props.color || colors.dark};
    font-size: ${props => props.fontSize || fontSizes.small};
`

export const LinkText = styled(Text)`
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const FooterText = styled.div`
    font-family: 'Playfair Display', serif;
    color: ${props => props.color || colors.dark};
    font-size: ${fontSizes.xsmall};
    margin-top: 15px;
`