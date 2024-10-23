import styled from 'styled-components';
import Colors from '../constant/Colors'
import backgroundprofile from '../assets/profile/bg-profile.png'

export const ProfileStyle = styled.section`
    min-height: 100dvh;
    display: flex;
    background-color: ${Colors.dark_gray};
    background-position: center;
    background-size: cover;
    align-items:center;
    justify-content: center;
`

export const ProfileContainer = styled.div`
    width: 90%;
    min-height: 500px;
    background-color: ${Colors.gray};
    color:${Colors.white};
    padding: 4rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const ProfileSelectImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const UserContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

`;

export const UserProfile = styled.div`

`;

export const UserInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const UserText = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`;