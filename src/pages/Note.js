import React, {useState, useEffect } from 'react'
import '../css/Note.css';
import Sidebar from './notecomponents/Sidebar';
import Main from './notecomponents/Main';
import uuid from 'react-uuid';

function Note() {

    const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])
    
    const onAddNote = () => {
        console.log('hihi')
        const newNote = { 
            id: uuid(),
            title: "Untitled Note",
            body : "",
            lastModified : Date.now(), 
        };

        setNotes([newNote, ...notes]);
    }

    const onDeleteNote = (idToDelete) => {
        setNotes(notes.filter((note) => note.id !== idToDelete));
    }

    // help function
    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if(note.id === activeNote) {
                return updatedNote;
            }

            return note;
        });


        setNotes(updatedNotesArray);
    }

    return (
        <div className="AppNote">
            <Sidebar 
                notes={notes} 
                onAddNote={onAddNote} 
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />
            <Main 
                activeNote={getActiveNote()}
                onUpdateNote={onUpdateNote} 
            />
        </div>
    )
}

export default Note
