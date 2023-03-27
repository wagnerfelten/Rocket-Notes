import styled from "styled-components";

export const ContainerHome = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px;

    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

