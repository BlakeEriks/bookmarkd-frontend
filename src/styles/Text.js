import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const SubTitle = styled.div`
    color: ${colors.dark};
    font-size: ${fontSizes.large};
    font-weight: bold;
    text-align: center
`

export const Text = styled.li`
    color: ${props => props.color || colors.dark};
    font-size: ${props => props.fontSize || fontSizes.small};
`