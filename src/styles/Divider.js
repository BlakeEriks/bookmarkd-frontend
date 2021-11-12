import styled from "styled-components";
import { colors } from "./Config";

export const VerticalDivider = styled.div`
    border: 2px solid ${colors.dark};
    height: ${props => props.height || '90%'};
    margin: auto 0;
`