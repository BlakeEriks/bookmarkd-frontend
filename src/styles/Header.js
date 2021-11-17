import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.dark};
    width: 100%;
    margin-bottom: 40px;
`

export const HeaderTitle = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: ${fontSizes.xLarge};
    font-weight: bold;
`

export const HeaderContent = styled.div`
    font-family: 'Playfair Display', serif;
    display: flex;
    justify-content: space-around;
    font-size: ${fontSizes.medium};
`
