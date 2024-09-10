import styled from 'styled-components';
import Colors from '../constant/Colors';

export const LoadingStyle = styled.main`
    height: 100dvh;
    width: 100%;
    background-color:${Colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999999;

    .loader {
        width: 8vmax;
        height: 8vmax;
        border-right: 4px solid ${Colors.red_hover};
        border-radius: 100%;
        animation: spinRight 800ms linear infinite;
        
        &:before, &:after {
            content: '';
            width: 6vmax;
            height: 6vmax;
            display: block;
            position: absolute;
            top: calc(50% - 3vmax);
            left: calc(50% - 3vmax);
            border-left: 3px solid ${Colors.red_hover};
            border-radius: 100%;
            animation: spinLeft 800ms linear infinite;
        }
    
        &:after {
            width: 4vmax;
            height: 4vmax;
            top: calc(50% - 2vmax);
            left: calc(50% - 2vmax);
            border: 0;
            border-right: 2px solid ${Colors.red_hover};
            animation: none;
        }
    }

    @keyframes spinLeft {
        from {transform:rotate(0deg);}
        to {transform:rotate(720deg);}
    }

    @keyframes spinRight {
        from {transform:rotate(360deg);}
        to {transform:rotate(0deg);}
    }
`