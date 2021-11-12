import styled from "styled-components";

export const HorizontalFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const VerticalFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || 'flex-start'};
    width: ${props => props.width || 'auto'};
`