import styled from "styled-components";
import { colors, fontSizes } from "./Config";

export const SearchContainer = styled.div`
    display: flex;
    background: ${colors.light};
    border-radius: 40px;
    padding: 6px;
    border: 4px solid ${colors.dark};
    align-items: center;
    width: 250px;
    justify-content: space-around;
    cursor: ${colors.dark};
`

export const SearchInput = styled.input`
    font-family: Arial, Helvetica, sans-serif;
    background: none;
    color: ${colors.dark};
    font-size: ${fontSizes.medium};
    border: none;
    width: 70%;
    outline: none;
    caret-color: ${colors.dark};

    &::placeholder {
        color: ${colors.accent};
    }
`