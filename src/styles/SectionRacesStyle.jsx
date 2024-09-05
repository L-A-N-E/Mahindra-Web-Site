import styled from 'styled-components';
import Colors from '../constant/Colors'

export const SectionRacesStyle = styled.section `
    
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100dvh;
        background: #400000;
        background: -webkit-linear-gradient(316deg, #400000 0%, #cc0000 100%);
        background: linear-gradient(316deg, #400000 0%, #cc0000 100%);

        #title-race {
            margin-top: 50px;
            color: #fff;
            
        }

        #container-races {
            
            #card-race {
                background: rgb(255, 255, 255);
                color: #000000;
            }
        }
    }

`