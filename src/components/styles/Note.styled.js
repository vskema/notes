import styled from "styled-components"

export const StyledNote = styled.div`
    color: ${({color}) => color };
    background-color: ${({noteColor}) => noteColor};
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    word-wrap: break-word;
    // width: ${({width}) => width}px;
    width: 95%;
    height: ${({height}) => height}px;
    grid-row-end: span ${({spans}) => spans};

    p {
                padding: 10px;
            }
    

    div {
            background-color: '#9ec862';
            display: flex;
            justify-content: flex-end;
            padding: 0.5rem;            

            button {
                background-color: transparent;
                border: none;
                color: #000;
                cursor: pointer;
                font-size:  1rem;
                margin-left: 0.5rem;
            }
    }
`

