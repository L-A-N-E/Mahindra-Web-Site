import React from 'react'
import { ErrorStyle, ErrorContent } from '../styles/ErrorStyle'
import { Link } from 'react-router-dom'
import { ButtonRedStyle } from '../styles/ButtonRedStyle'


const Error = () => {
  return (
    <>
        <ErrorStyle>
            <ErrorContent>
                <h1>404 - Page Not Found</h1>
                <Link to='/'>
                  <ButtonRedStyle>Back</ButtonRedStyle>
                </Link>
            </ErrorContent>
        </ErrorStyle>
    </>
  )
}

export default Error