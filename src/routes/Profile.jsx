// Importando dependencias
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, deleteField } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// Importando config firebase
import { db, storage } from '../firebase/firebase';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { ProfileStyle, ProfileContainer, ProfileSelectImage } from '../styles/ProfileStyle'

const MySwal = withReactContent(Swal);

const Profile = () => {
    const [avatar, setAvatar] = useState(null);
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(null);
    const auth = getAuth();

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
                    icon:'success',
                    color:'#fff',
                    background:'#171717',
                    confirmButtonColor:'#E51635'
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
                    icon:'success',
                    color:'#fff',
                    background:'#171717',
                    confirmButtonColor:'#E51635'
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
                icon:'error',
                color:'#fff',
                background:'#171717',
                confirmButtonColor:'#E51635'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/profile'
                }}) ;
        }
    };

    return (
        <ProfileStyle>
            <ProfileContainer>
                <ProfileSelectImage>
                    <input
                        type="file"
                        onChange={(e) => setAvatar(e.target.files[0])}
                    />
                    <button onClick={handleUpload}>Upload</button>
                    <button onClick={handleRemove}>Remove</button>
                </ProfileSelectImage>

                {error && <p>{error}</p>}
                <div>
                    <h3>User Profile</h3>
                    <p>This is some information about the user.</p>
                </div>

                <div>
                    <dl>
                        <div>
                            <dt>Username</dt>
                            <dd>{userData.username}</dd>
                        </div>
                        <div>
                            <dt>Email address</dt>
                            <dd>{userData.email}</dd>
                        </div>
                        <div>
                            <dt>Formula E Favorite Team</dt>
                            <dd>{userData.favoriteTeam}</dd>
                        </div>
                    </dl>
                </div>
            </ProfileContainer>
        </ProfileStyle>
    );
};

export default Profile
