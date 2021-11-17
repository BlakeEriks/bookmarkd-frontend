import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const Input = styled.input`
    font-family: 'Playfair Display', serif;
    border: 2px solid ${colors.dark};
    color: ${colors.dark};
    margin: 1px 2px;
    font-size: ${fontSizes.xSmall};
    outline: none;
    padding: 0 10px;
    width: 180px;

    &:first-child {
        border-top-left-radius: 10px;
    }
    &:last-child {
        border-bottom-left-radius: 10px;
    }
`

export const LoginInput = styled.input`
    font-family: 'Playfair Display', serif;
    border: 1.3px solid ${colors.dark};
    border-radius: 5px;
    color: ${colors.dark};
    margin: 1px 2px;
    font-size: ${fontSizes.xSmall};
    outline: none;
    padding: 20 10px;
    width: 130px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;

    &:last-child {
        border-bottom-left-radius: 10px;
    }
`