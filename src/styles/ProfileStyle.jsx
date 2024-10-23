import styled from 'styled-components';
import Colors from '../constant/Colors'
import Font from '../constant/Font'

export const ProfileStyle = styled.section`
    min-height: 100dvh;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "ProfileTheme ProfileContainer";

    @media (max-width:  768px) {
        display: flex;
        flex-direction: column;
    }
`

export const ProfileTheme = styled.div`
    grid-area: ProfileTheme;
    background-color: ${(props) => props.bgColor};
    transition: background-color 0.3s ease-in-out;
    height: 100%;
    display: grid;
    align-items: center;

    @media (max-width:  768px) {
        height: 400px;
    }
`

export const ProfileContainer = styled.div`
    grid-area: ProfileContainer;
    background-color: ${(props) => props.bgColor};
    transition: background-color 0.3s ease-in-out;
    width: 100%;
    height: 100%;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
`  

export const ProfileContent = styled.div`
    background-color: ${Colors.white};
    padding: 1rem 2rem;
    border-radius: 10px;
`

export const ProfileSelectImage = styled.div`

`;
export const InsertImage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    label {
        span {
            cursor: pointer;
        }
        input {
            display: none;
        }
    }
`

export const UploadRemoveImage = styled.div `

`

export const UserContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
`;

export const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    h3 {
        text-transform: uppercase;
        font-weight: ${Font.txt_600w};
    }

`;

export const UserInfo = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const UserText = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    width: 100%;
    justify-content: space-between;

    dt {
        text-transform: uppercase;
        font-size: ${Font.txt_14};
        font-weight: ${Font.txt_500w};
    }   
`;

//  Seleção do Tema
export const Label = styled.label`
    font-size: 16px;
    color: black;
`

export const StyledSelect = styled.select`
    padding: 10px 20px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    outline: none;

    &:hover {
        border-color: #888;
    }

    @media (max-width: 768px) {
        padding: 5px 10px;
        font-size: 14px;
    }
`