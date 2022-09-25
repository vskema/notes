import styled from "styled-components";

export const StyledNotes = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap:  1px 10px;
    grid-auto-rows: 10px;
    background-color: ${({theme}) => theme.body} ;
`