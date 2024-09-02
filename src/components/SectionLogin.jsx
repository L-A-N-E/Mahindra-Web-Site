import React, {useRef} from 'react'
import { LoginStyle } from '../styles/LoginStyle';

const SectionLogin = () => {
    return (
        <>
        <LoginStyle>
                    <section>
                            <form>
                                <p>
                                    Usuário:
                                    <input type="text" placeholder="Digite seu usuário"/>
                                </p>
                                <p>
                                    Senha:
                                    <input type="password" placeholder="Digite sua senha"/>
                                </p>
                                <button type="submit">Entrar</button>
                            </form>
                    </section>
        </LoginStyle>
        </>
    )
}

export default SectionLogin