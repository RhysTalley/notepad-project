import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import initNotes from "../notes";
let id = 5; // keeps track of id's

function App() {
  const [notes, setNotes] = useState(initNotes); // dynamic usestate to keep track of current notes

  function handleCreateNode(tit, msg) {
    // function to be passed to createNote() to add notes based on user inputs
    setNotes([
      ...notes, // concatenate new entry to previous notes array
      {
        key: id++,
        title: tit,
        content: msg,
      },
    ]);
  }

  function handleDeleteNode(id) {
    // function to be passed to Note.jsx to delete notes based on id
    setNotes(notes.filter((note) => note.key !== id));
    console.log(notes.length);
  }

  function addNote(notes) {
    // function to map all note entries in array to actual notes
    return (
      <Note
        key={notes.key}
        id={notes.key}
        title={notes.title}
        content={notes.content}
        deleteNote={handleDeleteNode}
      />
    );
  }

  return (
    <div className="pageDisplay">
      <Header />
      <CreateNote updateNotes={handleCreateNode} />
      <div className="noteList">
        <dl>{notes.map(addNote)}</dl>
      </div>
      <Footer />
    </div>
  );
}

export default App;
