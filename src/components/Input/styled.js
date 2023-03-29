import styled from "styled-components";

export const ContainerInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BAKCGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY};

    margin-bottom: 8px;
    border-radius: 10px;

    > input{
        width: 100%;
        height: 56px;

        padding: 12px;

        color: ${({theme}) => theme.COLORS};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

        > svg {
            margin-left: 16px;
        }
    }
`;