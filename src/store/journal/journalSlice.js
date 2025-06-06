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
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
            // TODO mensaje de error
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            //el map se usa para recorrer el array y actualizar el elemento que coincide con el id
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
        },

        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },

        clearNotesLogout: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter((note) => note.id !== action.payload ); // Clear notes
            state.isSaving = false;
            state.messageSaved = '';
        },
    }
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  savingNewNote,
  updateNote,
  deleteNoteById,
  setSaving,
  setPhotosToActiveNote,
  clearNotesLogout
} = journalSlice.actions;