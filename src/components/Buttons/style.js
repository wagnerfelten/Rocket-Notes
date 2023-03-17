import styled from "styled-components";

export const ContainerButton = styled.button `
    width: 100%;
    height: 56px;

    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }

    
`;