import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const Button = styled.button`
    font-family: 'Playfair Display', serif;
    color: ${colors.light};
    background: ${colors.light};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: ${props => props.padding || '5px'};
    width: ${props => props.width || 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: ${colors.light};
        color: ${colors.dark};
    }

    &:hover * {
        color: ${colors.dark};
    }
`

export const EditAddButton = styled(Button)`
    padding: 7px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`

export const WhiteButton = styled.button`
    font-family: 'Playfair Display', serif;
    font-size: ${fontSizes.xsmall};
    color: ${colors.dark};
    background: white;
    border: 1.9px solid ${colors.dark};
    border-radius: 5px;
    cursor: pointer;
    padding: 0px;
    width: 130px;
    height: 25px;
`