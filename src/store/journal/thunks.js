
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        // uid
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
        const setResp = await setDoc( newDoc, newNote );
        newNote.id = newDoc.id;
        console.log(newDoc, setResp);
        
       // dispatch
        // dispatch(addNewEmptyNote(newNote));
        //dispatch(setActiveNote(newNote));
    }
}