import React, { useState } from "react";

function InputArea(props) {
  let [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    let { value, name } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.saveNote(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Write a note..."
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default InputArea;
