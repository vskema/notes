import { useReducer, useState } from "react";

import { initialNotes } from "../helpers/initialState";
import Notes from "./Notes";

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return  [...state, {name: action.payload, id: Date.now(), completed: false, width: randomSizing(), height: randomSizing(), color: randomColor()}]
        case "TOGGLE":            
            return state.map((st) =>{
                if(st.id === action.payload){
                    return {...st, completed: !st.completed}
                }
                return st;
            });
        case "DELETE":
            return state.filter((st) => {
                return st.id !== action.payload
            })
            
            
        default:
            return state
    }
}

const randomSizing = () => {
    return Math.floor((Math.random() * (200 +1)) + 200)
}
const randomColor = () => {
    const colors = ['#ffc', '#ccf', '#cfc'];
    const colorNumber = Math.floor((Math.random() * 3))
    return colors[colorNumber]
}



const AddNote = ({input}) => {

    const [note, setNote] = useState('');
    const [state, dispatch] = useReducer(reducer, initialNotes)


    const onFormSubmit = (e) => {        
        e.preventDefault();
        dispatch({type: "ADD", payload: note})
        setNote('')
    }

    const renderedForm = () => {
        return (
            <form onSubmit={e => onFormSubmit(e)}>
            <input required type='text' value={note} onChange={e => setNote(e.target.value)}  />
        </form> 
        )
    }
return (
    <div>
        {input && renderedForm()}  
        <Notes notes={state} dispatch={dispatch} />
    </div>
)
}

export default AddNote;