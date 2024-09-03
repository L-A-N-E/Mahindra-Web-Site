import { signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
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