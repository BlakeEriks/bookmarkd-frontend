import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const SearchContainer = styled.div`
    display: flex;
    background: ${colors.dark};
    border-radius: 40px;
    padding: 6px;
    align-items: center;
    width: 250px;
    justify-content: space-around;
`

export const SearchInput = styled.input`
    background: none;
    color: ${colors.light};
    font-size: ${fontSizes.medium};
    border: none;
    width: 70%;
    outline: none;

    &::placeholder {
        color: ${colors.accent};
    }
`