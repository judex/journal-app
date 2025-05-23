
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from '../../helpers';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());
        const { uid } = getState().auth;
        console.log(getState());
        
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
        const setResp =  await setDoc( newDoc, newNote );
        newNote.id = newDoc.id;
        
        console.log({newNote, setResp});
        
               
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