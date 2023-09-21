
import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
    const S1 = {
        "name": "Abhay",
        "age": 20
 }
    const [state, setstate] = useState(S1);

    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "Akash",
                "age": 19
        })
        }, 2000);
}
    
    return (

        <NoteContext.Provider value={{state,update}}>
            {props.children}

        </NoteContext.Provider>
    )

}

export default NoteState;