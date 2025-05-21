import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 123456789,
        //     imageUrls: [],
        // },
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map((note) => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });
            state.messageSaved = `${action.payload.title}, updated successfully`;
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        }
    }
});

// Action creators are generated for each case reducer function
export const {addNewEmptyNote, setActiveNote, setNotes, savingNewNote, updateNote, deleteNoteById} = journalSlice.actions;