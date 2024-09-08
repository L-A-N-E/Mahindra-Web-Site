import styled from 'styled-components';
import Pilot_1 from '../assets/home/pilots/pilot-1.png';
import Pilot_2 from '../assets/home/pilots/pilot-2.png';

import Colors from '../constant/Colors';
import Font from '../constant/Font';

export const SectionPilotsStyle = styled.section`

    section {
        height: 100dvh;
        width: 100%;
        display: grid;
        grid-template-areas: 
        'pilot-1 pilot-2';

        /* Background */
        .background-pilots {
            background-position: center;
            background-size: cover;
            display: flex;
            align-items: end;
            justify-content: center;
        }

        /* Edoardo Mortara */
        .pilot-1 {
            grid-area: 'pilot-1';
            background-image: url(${Pilot_1});
        }

        /* Nicky De Vries */
        .pilot-2 {
            grid-area: 'pilot-2';
            background-image: url(${Pilot_2});
        }

        /* Button Pillots */
        .btn-pilots {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 3rem;
            width: 60%;
            height: 70px;
            padding: 1rem 3rem;
            background-position: right bottom;
            background-size: 200% 100%;
            border: none;
            border-radius: 0 50px 0 50px;
            cursor: pointer;
            transition: background-position 0.5s ease-in-out;

            /* Text Name Pilots */
            .txt-btn-pilots {
                cursor: pointer;
                font-size: ${Font.txt_1rem};
                font-weight: 900;
                text-transform: uppercase;
                background: transparent;
                border: none;
            }
        }

        /* Effect Hover */
        .btn-pilots:hover {
            background-position: left bottom;
        }

        /* Color Button 1 */
        .color-1 {
            color: ${Colors.red_1};
            background-color: ${Colors.white};
            background-image: linear-gradient(to left, ${Colors.white} 50%, ${Colors.white_hover} 50%);
        }

        /* Color Button 2 */
        .color-2 {
            color: ${Colors.white};
            background-color: ${Colors.red_1};
            background-image: linear-gradient(to left, ${Colors.red_1} 50%, ${Colors.red_hover} 50%);
        }
    }

/* Response Tablet */
@media (max-width: 900px){
    section {
        height: 60dvh;

        .btn-pilots {
            height: 50px;
            width: 65%;

            .txt-btn-pilots {
                font-size: ${Font.txt_08rem};
            }
        }
    }
};

/* Response Mobile */
@media (max-width: 600px){

    section {
        display: flex;
        flex-direction: column-reverse;
        height: 100dvh;

        .background-pilots {
            height: 100%;
        }
    }
}
`
