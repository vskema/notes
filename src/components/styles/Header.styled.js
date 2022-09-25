import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${({theme}) => theme.colors.body};
    padding: 40px 0;

    h1 {
        color: ${({bg}) => bg};
    }    
`