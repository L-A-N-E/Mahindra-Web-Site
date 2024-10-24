// Importando dependencias
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, deleteField } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useTranslation } from 'react-i18next';
// Importando config firebase
import { db, storage } from '../firebase/firebase';
import logoFormulaE from '../assets/profile/FE_logo.png'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { ProfileStyle, ProfileTheme, ProfileContainer, ProfileContent, ProfileSelectImage, UploadRemoveImage, InsertImage, UserContainer, UserProfile, UserInfo, UserText, Label, StyledSelect } from '../styles/ProfileStyle'

const MySwal = withReactContent(Swal);

const Profile = () => {

    const { t, i18n } = useTranslation();
    const [avatar, setAvatar] = useState(null);
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(null);
    const auth = getAuth();

    const [bgColor, setBgColor] = useState('#000'); // Cor inicial do fundo
    // Mapeando as cores
    const options = [
        { value: '#ED3124', label: 'Andretti Formula E' },
        { value: '#CBA65F', label: 'DS Penske' },
        { value: '#00BE26', label: 'Envision Racing' },
        { value: '#000000', label: 'Jaguar TCS Racing' },
        { value: '#3c3c3c', label: 'Kiro Race Co' },
        { value: '#194997', label: 'Lola Yamaha ABT Formula E Team' },
        { value: '#E51635', label: 'Mahindra Racing' },
        { value: '#001489', label: 'Maserati MSG Racing' },
        { value: '#FF8000', label: 'NEOM McLaren Formula E Team' },
        { value: '#C3002F', label: 'Nissan Formula E Team' },
        { value: '#D5001C', label: 'TAG Heuer Porsche Formula E Team' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleChange = (e) => {
        setBgColor(e.target.value); // Define a cor de fundo com base na opção selecionada
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const uid = currentUser.uid;
                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);
                setUserData(docSnap.data());
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const handleUpload = async () => {
        if (!avatar) return;

        try {
            const currentUser = auth.currentUser;
            if (currentUser) {
                const uid = currentUser.uid;
                const avatarRef = ref(storage, `avatar_users/${uid}`);

                await uploadBytes(avatarRef, avatar);
                const url = await getDownloadURL(avatarRef);
                const docRef = doc(db, "users", uid);
                await setDoc(docRef, { avatarImg: url }, { merge: true });

                setAvatar(null);
                MySwal.fire({
                    title: t('upload-avatar'),
                    icon: 'success',
                    color: '#fff',
                    background: '#171717',
                    confirmButtonColor: '#E51635'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/profile'
                    }
                })

            }
        } catch (error) {
            console.error("Error uploading avatar: ", error);
            setError("Failed to upload avatar.");
        }
    };

    const handleRemove = async () => {
        try {
            const currentUser = auth.currentUser;
            if (currentUser) {
                const uid = currentUser.uid;
                const avatarRef = ref(storage, `avatar_users/${uid}`);

                await deleteObject(avatarRef);
                const docRef = doc(db, "users", uid);
                await updateDoc(docRef, {
                    avatarImg: deleteField()
                });

                setAvatar(null);
                MySwal.fire({
                    title: t('remove-avatar'),
                    icon: 'success',
                    color: '#fff',
                    background: '#171717',
                    confirmButtonColor: '#E51635'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/profile'
                    }
                });
            }
        } catch (error) {
            console.error("Error removing avatar: ", error);
            setError("Failed to remove avatar.");
            MySwal.fire({
                title: t('error-avatar'),
                icon: 'error',
                color: '#fff',
                background: '#171717',
                confirmButtonColor: '#E51635'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/profile'
                }
            });
        }
    };

    return (
        <ProfileStyle>
            {/* Tema */}
            <ProfileTheme bgColor={bgColor}>
                <img src={logoFormulaE} alt="" />
            </ProfileTheme>

            {/* Conteudo */}
            <ProfileContainer bgColor={bgColor}>
                <ProfileContent>
                    {/* Alterar imagem de perfil */}
                    <ProfileSelectImage>
                        <InsertImage>
                            <label>
                                <span>Select File</span>
                                <input
                                    type="file"
                                    onChange={(e) => setAvatar(e.target.files[0])}
                                />
                            </label>
                        </InsertImage>
                        <UploadRemoveImage>
                            <button onClick={handleUpload}>Upload</button>
                            <button onClick={handleRemove}>Remove</button>
                        </UploadRemoveImage>
                    </ProfileSelectImage>
                    {error && <p>{error}</p>}
                    {/* Informações sobre o usuário */}
                    <UserContainer>
                        <UserProfile>
                            <h3>User Profile</h3>
                            <p>This is some information about the user.</p>
                        </UserProfile>
                        <UserInfo>
                            <UserText>
                                <dt>Username: </dt>
                                <dd>{userData.username}</dd>
                            </UserText>
                            <UserText>
                                <dt>Email address: </dt>
                                <dd>{userData.email}</dd>
                            </UserText>
                            <UserText>
                                <dt>Formula E Favorite Team: </dt>
                                <dd>{userData.favoriteTeam}</dd>
                            </UserText>
                            <UserText>
                                <Label>Formula E Favorite Team: </Label>
                                <StyledSelect onChange={handleChange}>
                                    <option value="#000">Choose a color...</option>
                                    {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                    ))}
                                </StyledSelect>
                            </UserText>
                        </UserInfo>
                    </UserContainer>
                </ProfileContent>
            </ProfileContainer>
        </ProfileStyle>
    );
};

export default Profile
