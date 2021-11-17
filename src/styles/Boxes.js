import styled from "styled-components";
import { colors } from "./Config";

export const HorizontalFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: ${props => props.alignItems || 'center'};
    width: ${props => props.width || 'auto'};

    &:hover > div > button > svg {
        color: ${colors.dark}
    }
`

export const VerticalFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || 'flex-start'};
    width: ${props => props.width || 'auto'};
`

export const BookmarkList = styled.ul`
    width: 50%;
`