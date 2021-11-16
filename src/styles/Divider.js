import styled from "styled-components";
import { colors } from "./Config";

export const VerticalDivider = styled.div`
    border: 2px solid ${colors.dark};
    height: ${props => props.height || '90%'};
    margin: auto 0;
`

export const HorizontalDivider = styled.hr`
    color: rgba(0, 0, 0, 0.65);
    margin-left: -100px;
    font-weght: bold;
`;