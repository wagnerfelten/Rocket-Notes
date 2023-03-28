import styled from "styled-components";

export const ContainerText = styled.button`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme, isActive}) => isActive ? theme.COLORS.GRAY_100 :theme.COLORS.ORANGE};
   
    font-size: 18px;
    border: none;
`;