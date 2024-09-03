import { signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../firebase/firebase';
import { doc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';

// Função de autenticação
export const handleAuthentication = async (email, password, isLogin, user) => {
    try {
      console.log('Iniciando autenticação com:', email);
      if (user) {
        await signOut(auth);
        console.log("Usuário saiu com sucesso!");
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
          console.log('Usuário logado com sucesso');
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('Usuário registrado com sucesso');
        }
      }
    } catch (error) {
      throw new Error(error.message); 
    }
  };

// Google Sign-In
export const googleSignIn = (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
  
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(result);
      console.log(credential);
      console.log("Usuário logado com sucesso!")
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // Handle Errors
    });
  }
  