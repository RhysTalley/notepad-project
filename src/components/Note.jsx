import React from "react";

function Note(props) {
  function handleClick() {
    props.deleteNote(props.id); //  function to call the callback function delete a node when button is pressed based on button id
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
