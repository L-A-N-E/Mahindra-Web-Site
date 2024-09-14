import React from 'react';
import { Container } from '../../styles/NavStyle'; // Importando os componentes estilizados
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Nav = () => {

    return (
        <Container>
            <NavDesktop/>
            <NavMobile/>
        </Container>
    );
};

export default Nav;
