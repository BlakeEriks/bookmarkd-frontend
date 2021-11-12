import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const Input = styled.input`
    border: 2px solid ${colors.dark};
    color: ${colors.dark};
    border-radius: 10px;
    margin: 2px 5px;
    font-size: ${fontSizes.xSmall};
    outline: none;
    padding: 0 10px;
`