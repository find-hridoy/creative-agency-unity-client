import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./Firebase.config";


// Initialize Firebase
export const initializeFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

// Goggle Sign In
export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const { displayName, email, photoURL } = result.user;
            const signInUser = {
                name: displayName,
                email: email,
                photo: photoURL
            }
            return signInUser;
        })
        .catch(error => {
            const { errorCode, errorMessage, email } = error;
            const signInUserError = {
                code: errorCode,
                message: errorMessage,
                email: email
            }
            return signInUserError;
        });
}

// //  Id Token
// export const authToken = () => {
//     return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
//         .then(idToken => {
//             const token = idToken;
//             return token;
//         })
//         .catch(error => {
//             // Handle error
//         });
// }