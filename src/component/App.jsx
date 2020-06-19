import React from "react";
import Name from "./Header";
import Copyright from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App(){
    return (<div><Name /> {notes.map(x => (<Note key ={x.key} title = {x.title} content = {x.content} />))} <Copyright /></div>);
}


export default App;