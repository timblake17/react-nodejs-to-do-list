import React, { Component } from "react";
import "./App.css";
import Note from "./Note/Note";
import NoteForm from "./NoteForm/NoteForm";

class App extends Component {
  //////////set react state
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          noteContent: "Note 1 here!"
        },
        {
          id: 2,
          noteContent: "Note 2 here!"
        }
      ]
    };
    this.removeNote = this.removeNote.bind(this);
  }
  addNote(note) {
    ///push the note into notes array
    const previousNotes = this.state.notes;
    previousNotes.push({
      id: previousNotes.length + 1,
      noteContent: note
    });
    this.setState({
      notes: previousNotes
    });
  }

  removeNote(id) {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading"> React toDo List </div>{" "}
        </div>{" "}
        <div className="notesBody">
          {" "}
          {this.state.notes.map(note => {
            return (
              <Note
                removeNote={this.removeNote}
                noteContent={note.noteContent}
                noteId={note.id}
                key={note.id}
              />
            );
          })}
        </div>{" "}
        <div className="notesFooter">
          <NoteForm addNote={e => this.addNote(e)} />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
