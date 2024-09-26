import styled from 'styled-components';
import Colors from '../constant/Colors'
import Font from '../constant/Font';

export const ErrorStyle = styled.main `
    height: 100dvh;
    width: 100%;
    background-color: ${Colors.black};
`

export const ErrorContent = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;

    h1 {
        color: ${Colors.white};
        font-weight: ${Font.txt_200w};
        text-transform: uppercase;
        text-align: center;
    }
`