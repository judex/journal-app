import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName, email, photoURL, uid } = result.user;
        return{
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        // const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage
        }
    }
};

// export const signInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider(); // Use 'GoogleAuthProvider' directly
//   provider.setCustomParameters({ prompt: "select_account" });
//   try {
//         const result = await signInWithPopup(FirebaseAuth, provider); // Use 'provider' directly here
//         const user = result.user;
//         console.log({ user });  
//   } catch (error) {
//     alert(error.message);
//   }
// };
