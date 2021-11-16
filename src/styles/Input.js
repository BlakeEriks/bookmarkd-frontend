import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const Input = styled.input`
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

    &:first-child {
        border-top-left-radius: 10px;
    }

    &:last-child {
        border-bottom-left-radius: 10px;
    }
`