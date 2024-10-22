import styled from 'styled-components';
import Colors from '../constant/Colors'
import backgroundprofile from '../assets/profile/bg-profile.png'

export const ProfileStyle = styled.section`
    min-height: 100dvh;
    display: flex;
    background-image: url(${backgroundprofile});
    background-position: center;
    background-size: cover;
    align-items:center;
    justify-content: center;
`

export const ProfileContainer = styled.div`
    width: 90%;
    background-color: ${Colors.black};
    color:${Colors.white};
    padding: 4rem;
    border: solid 1px ${Colors.red_hover};
    border-radius: 10px;
`

export const ProfileSelectImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    input[type="file"] {
        margin-top: 1rem;
        padding: 0.5rem;
        background-color: ${Colors.red_hover};
        border: none;
        color: ${Colors.white};
        border-radius: 5px;
        cursor: pointer;
    }
`;

export const ProfileAvatar = styled.div`
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${Colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const UploadButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: ${Colors.red_1};
    color: ${Colors.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0.5rem;

    &:hover {
        background-color: ${Colors.red_hover};
    }
`;

export const RemoveButton = styled(UploadButton)`
    background-color: ${Colors.red_hover};

    &:hover {
        background-color: ${Colors.red_1};
    }
`;

export const ProfileDetails = styled.div`
    text-align: left;
`;

export const ErrorMessage = styled.p`
    color: ${Colors.red_hover};
`;

