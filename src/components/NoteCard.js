import {useEffect, useRef, useState} from "react";
import { StyledNote } from "./styles/Note.styled";


const NoteCard = ({dispatch, note}) => {
    const noteRef = useRef();
    const [spans, setSpan] = useState(0);

    useEffect(() => {    
        setSpans();
    });

    const setSpans = () => {
        const height = noteRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        setSpan(spans);
    }

    return (
        <StyledNote
            color={note.completed ? 'red' : 'black'}
            width={note.width}
            height={note.height}
            noteColor={note.color}
            key={note.id}
            ref={noteRef}
            spans={spans}
        >
        <div>
            <button type="button" onClick={() => dispatch({type: "TOGGLE", payload: note.id})}>Toggle</button>
            <button type="button" onClick={() => dispatch({type: "DELETE", payload: note.id})}>Delete</button>
        </div>
            <p>{note.name}</p>           
        </StyledNote>
    )
}

export default NoteCard;