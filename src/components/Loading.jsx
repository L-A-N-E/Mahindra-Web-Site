import React from 'react'
import { LoadingStyle} from '../styles/LoadingStyle'
import logoMahindra from '../assets/header/logo/mahindra-logo-new.svg';

const Loading = () => {
    return (
        <>
        <LoadingStyle>
            <div className='loader'></div>
        </LoadingStyle>
        </>
    )
}

export default Loading