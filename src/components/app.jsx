import React, { useState } from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";
import Note from "./note";
import notes from "../notes";
import InputArea from "./inputArea";

function App() {
  let [savedNotes, setSavedNotes] = useState([]);

  function saveNote(sentNote) {
    setSavedNotes((prevValue) => {
      return [...prevValue, sentNote];
    });
  }

  function deleteNote(id){
    setSavedNotes(prevValue =>{
        return prevValue.filter((item, index) => {
            return index !== id;
        })
    })
  }

  return (
    <div>
      <Header />
      <InputArea saveNote={saveNote} />
      {savedNotes.map((note, index)=> (
        <Note 
        title={note.title} 
        content={note.content}
        key={index}
        id={index}
        deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
