import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState([
    {
      title: "",
      content: ""
    }
  ]);
  function handleChange(event) {
    const { name, value } = event.target;
    setNotes(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function UpdateNote(event) {
    props.onAddnote(notes);
    setNotes({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={UpdateNote}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={notes.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={notes.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
