import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim()) {
      setNotes([{ id: Date.now(), text: input }, ...notes]);
      setInput("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 डिजिटल नोट्स</h1>
      <div className="input-section">
        <textarea
          rows="3"
          placeholder="अपना नोट लिखें..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addNote}>+ Add Note</button>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <div className="note-card" key={note.id}>
            <p>{note.text}</p>
            <button onClick={() => deleteNote(note.id)}>🗑 Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
