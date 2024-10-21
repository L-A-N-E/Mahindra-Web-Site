// Importando dependencias
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, deleteField } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// Importando config firebase
import { db, storage } from '../firebase/firebase';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
                    }}) 
                
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
                    }}) ;
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
        <div className="bg-black overflow-hidden h-dvh flex-col flex justify-center">
            <div>
                <div className='flex gap-2'>
                    <input 
                        type="file" 
                        onChange={(e) => setAvatar(e.target.files[0])} 
                    />
                    <button onClick={handleUpload} className='bg-white text-red-600'>Upload</button>
                    <button onClick={handleRemove} className='bg-white text-red-600'>Remove</button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-white">User Profile</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-100">This is some information about the user.</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-100">Username</dt>
                            <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">{userData.username}</dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-100">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">{userData.email}</dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-100">Formula E Favorite Team</dt>
                            <dd className="mt-1 text-sm text-gray-400 sm:mt-0 sm:col-span-2">{userData.favoriteTeam}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Profile;
