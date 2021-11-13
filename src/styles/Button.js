import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const Button = styled.button`
    font-size: ${fontSizes.small};
    color: ${colors.light};
    background: ${colors.dark};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;
`

export const EditAddButton = styled(Button)`
    padding: 7px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`