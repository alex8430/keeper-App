import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);
  function addNote(newNote) {
    setNote(prev => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    setNote(prev => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAddnote={addNote} />
      {notes.map((ele, index) => (
        <Note
          key={index}
          onDelete={deleteNote}
          id={index}
          title={ele.title}
          content={ele.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
