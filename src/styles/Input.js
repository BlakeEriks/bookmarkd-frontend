import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const Input = styled.input`
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