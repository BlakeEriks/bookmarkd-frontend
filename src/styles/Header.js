import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    margin-top: 50px;
    color: ${colors.dark};
`

export const HeaderTitle = styled.div`
    font-size: ${fontSizes.xLarge};
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: ${fontSizes.medium};
    width: 35%;
`