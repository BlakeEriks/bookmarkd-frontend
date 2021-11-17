import styled from "styled-components";
import { colors, fontSizes } from "./Config";

const BaseButton = styled.button`
    cursor: pointer;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border-radius: 10px;
`

export const Button = styled(BaseButton)`
    color: ${colors.light};
    background: ${colors.light};
    border-radius: 5px;
    padding: ${props => props.padding || '5px'};
    width: ${props => props.width || 'auto'};
    transition: all 0.1s;
    &:hover {
        background: ${colors.dark};

        & > svg {
            color: ${colors.light} !important;
        }
    }
`

export const EditAddButton = styled(BaseButton)`
    padding: 2px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: ${colors.light};
    box-sizing: border-box;
    border: 2px solid ${colors.dark};
    transition: all 0.1s;
    
    & > svg {
        color: ${colors.dark};
    }

    &:hover {
        background: ${colors.dark};

        & > svg {
            color: ${colors.light} !important;
        }
    }
`

export const SignOutButton = styled(BaseButton)`
    font-size: ${fontSizes.xSmall};
    background: ${colors.dark};
    color: ${colors.light};
    margin: 0 10px;
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
    text-decoration: none;
`