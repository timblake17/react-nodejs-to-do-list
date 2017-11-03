import React, { Component } from "react";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: ""
    };
  }

  handleUserInput(e) {
    ////when user input changes, set newNoteContent to value of what is in input box
    this.setState({
      newNoteContent: e.target.value ////value of user input
    });
  }

  writeNote() {
    //call a method that sets the noteContent for a note to the value of the input

    this.props.addNote(this.state.newNoteContent);
    this.setState({
      // /set newNoteContent back to empty string to empty input//box after wirtenote() takes place which happens onClick of our button

      newNoteContent: ""
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          placeholder="Write a New Note"
          value={this.state.newNoteContent}
          onChange={e => this.handleUserInput(e)}
        />

        <button className="noteButton" onClick={e => this.writeNote(e)}>
          Add Note
        </button>
      </div>
    );
  }
}

export default NoteForm;
