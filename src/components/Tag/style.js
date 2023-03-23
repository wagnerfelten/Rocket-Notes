import styled from "styled-components";

export const ContainerTags = styled.span`
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    font-size: 18px;
    padding: 10px 14px;
    border-radius: 8px;
    margin-top: 24px;
    margin-left: 18px;
`;
