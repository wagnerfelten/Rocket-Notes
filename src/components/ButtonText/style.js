import styled from "styled-components";

export const ContainerText = styled.button`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.ORANGE};
   
    font-size: 18px;
    border: none;
`;