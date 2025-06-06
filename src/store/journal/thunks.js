
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from '../../helpers';
import fileUpload from '../../helpers/fileUpload';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());
        const { uid } = getState().auth;
        console.log(getState());
        
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
        await setDoc( newDoc, newNote );
        newNote.id = newDoc.id;
        
        // console.log({newNote, setResp});
        
               
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));        
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        // el id no se debe enviar a firebase
        const noteToFireStore = { ...note };
        delete noteToFireStore.id;
        
        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch(updateNote(note));
    }
}

export const starUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());
        console.log(files);
        // await fileUpload(files[0]);
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }
        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrls));
    }
}

export const starDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc(docRef);        
        dispatch(deleteNoteById(note.id));
    }
}