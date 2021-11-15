import { VerticalFlexBox } from "../styles/Boxes"
import { SubTitle } from "../styles/Text"
import Bookmark from "./Bookmark"
//importing the useState
import React, {useState, useRef} from "react";


export default function App() {
    // declare state to hold bookmarks
    const [publicBookmarks, setPublicBookmarks] = useState([{ website:"default"}])
    // declare state for the form data
    const [form, setForm] = useState({website:""})
    // declare state to track form validity
    const [valid, setValid] = useState(false)
    // a ref to refer to form
    const formRef = useRef(null)
    
    // add bookmarks to bookmark when form is submitted
    function addBookmarks(event){
        console.log(formRef);
        // dont add bookmark item if form is not valid
        if (formRef.current.checkValidity()) {
            // prevent refresh
            event.preventDefault();
            // copy the state
            const newState = [...publicBookmarks];
            newState.push({website: formRef.current[0].value})
            // update the state
            setPublicBookmarks(newState);
        
    }
}
    function handleChange(event) {
        //set validity
        setValid(formRef.current.checkValidity())
        // make a copy of the current state
        const newState = { ...form };
        // update the new object
        newState[event.target.name] = event.target.value;
        // update the state
        setForm(newState);
    }

return (
    <VerticalFlexBox width='40%' alignItems='center'>
            <h2>Explore</h2>
            <hr />

            <ul>
                <Bookmark website={'Google'} />
                <Bookmark website={'Facebook'} />
                <Bookmark website={'Amazon'} />
                <Bookmark website={'MDN'} />
            </ul>
            
            <hr />
            <form onSubmit={addPublicBookmarks} ref={formRef}>
                <label>
                    <span>Bookmarks</span>
                    <input
                    name="Bookmark"
                    value={form.publicBookmarks}
                    onChange={handleChange}
                    />
                </label>
            <button disabled={!valid}>ADD</button>
            </form>
    </VerticalFlexBox>
    )
}

export default PublicBookmarks