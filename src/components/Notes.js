import { StyledNotes } from "./styles/Notes.styled";
import NoteCard from "./NoteCard";

const Notes = ({notes, dispatch}) => {    
    return (
        <StyledNotes>            
            {notes.map((note) => {
                return (                                 
                        <NoteCard
                            key={note.id}
                            note={note}
                            dispatch={dispatch}
                        />                                     
                )
            })}
        </StyledNotes>
    )
}

export default Notes;