import { signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../firebase/firebase';
import { doc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);


// Função de autenticação
export const handleAuthentication = async (email, password, isLogin, user, t) => {
    try {
      console.log('Iniciando autenticação com:', email);
      if (user) {
        await signOut(auth);
        console.log("Usuário saiu com sucesso!");
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
          MySwal.fire({
            title: t('title-sucess'),
            icon:'sucess',
            text: t('text-sucess'),
            color:'#fff',
            background:'#171717',
            confirmButtonColor:'#E51635'
          })

        } else {
          await createUserWithEmailAndPassword(auth, email, password);
          MySwal.fire({
            title: t('title-register-sucess'),
            icon:'sucess',
            text: t('text-register-sucess'),
            color:'#fff',
            background:'#171717',
            confirmButtonColor:'#E51635'
          })
        }
      }
    } catch (error) {
      MySwal.fire({
        title: t('title-error'),
        icon:'error',
        text: error.message,
        color:'#fff',
        background:'#171717',
        confirmButtonColor:'#E51635'
      }) 
    }
  };

// Google Sign-In
export const googleSignIn = (t) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      MySwal.fire({
        title: t('title-sucess'),
        icon:'success',
        text: user.displayName + t('text-sucess'),
        color:'#fff',
        background:'#171717',
        confirmButtonColor:'#E51635'
      })
      saveUserDataToFirestore(user.uid, user.displayName, user.email)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // Handle Errors
      MySwal.fire({
        title: t('title-error'),
        icon:'error',
        text: error.message,
        color:'#fff',
        background:'#171717',
        confirmButtonColor:'#E51635'
      })
    });
  }

// Função para fazer o cadastro
export const handleSignUp = async (email, password, confirmPassword, username, t) => {
  if (password !== confirmPassword) {
    MySwal.fire({
      title: t('title-error'),
      icon: 'error',
      text: t('text-error-password'),
      color: '#fff',
      background: '#171717',
      confirmButtonColor: '#E51635'
    });
    return; // Adiciona um retorno para garantir que o restante da função não será executado
  }
  
  try {
    // Verifica se o nome de usuário já está em uso
    const usernameExists = await checkUsernameExists(username);
    if (usernameExists) {
      MySwal.fire({
        title: t('title-error'),
        icon: 'error',
        text: t('text-error-user'),
        color: '#fff',
        background: '#171717',
        confirmButtonColor: '#E51635'
      });
      return; // Adiciona um retorno para garantir que o restante da função não será executado
    }

    // Cria o usuário com email e senha
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Atualiza o perfil do usuário com o nome de usuário
    await updateProfile(user, { displayName: username });
    
    // Salva os dados do usuário no Firestore
    await saveUserDataToFirestore(user.uid, username, email);
    MySwal.fire({
      title: t('title-register-sucess'),
      icon:'sucess',
      text: t('text-register-sucess'),
      color:'#fff',
      background:'#171717',
      confirmButtonColor:'#E51635'
    })
    
  } catch (error) {
    MySwal.fire({
      title: t('title-error'),
      icon: 'error',
      text: error.message,
      color: '#fff',
      background: '#171717',
      confirmButtonColor: '#E51635'
    });
  }
};


    


// Checa se o username já existe
export const checkUsernameExists = async (username) => {
    try {
      const q = query(collection(db, 'users'), where('username', '==', username));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.log('Não foi possível verificar o nome de usuário.');
    }
};

// Salvar dados no banco de dados
export const saveUserDataToFirestore = async (uid, username, email) => {
    try {
      const userDocRef = doc(db, 'users', uid);
      await setDoc(userDocRef, { username, email });
    } catch (error) {
      console.log('Não foi possível salvar os dados do usuário.');
    }
};