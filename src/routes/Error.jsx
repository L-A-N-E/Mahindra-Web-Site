// Importando os componentes
import { ButtonRedStyle } from '../styles/ButtonRedStyle'
import { ErrorStyle, ErrorContent } from '../styles/ErrorStyle'

// Instalando as dependências
import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <>
        <ErrorStyle>
          {/* Conteúdo do Error */}
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