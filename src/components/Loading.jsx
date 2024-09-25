import React from 'react'
import { LoadingStyle} from '../styles/LoadingStyle'


const Loading = () => {
    return (
        <>
        <LoadingStyle>
            <div className='loader'>
                <div className='light'></div>
                <div className='black_overlay'></div>
            </div>
        </LoadingStyle>
        </>
    )
}

export default Loading