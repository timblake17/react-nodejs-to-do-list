import React, { Component } from "react";
import "./Note.css";
import PropTypes from "prop-types";

const Note = ({ removeNote, noteContent, noteId }) => {
  return (
    <div className="note fade-in">
      <span className="closebtn" onClick={e => removeNote(noteId)}>
        &times;
      </span>
      <p className="noteContent">{noteContent} </p>
    </div>
  );
};

Note.propTypes = {
  noteContent: PropTypes.string
};

export default Note;

// <div onChange={(e) => this.handleUserInput(e)} />
