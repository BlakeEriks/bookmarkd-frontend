import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export default styled.button`
    font-size: ${fontSizes.small};
    color: ${colors.light};
    background: ${colors.dark};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;
`