import styled from 'styled-components'; // Styled Components
import Colors from '../constant/Colors'; // Var Colors
import Font from '../constant/Font'; // Var Fonts

// Footer Style
export const FooterStyle = styled.footer `
    display: flex;
    height: 400px;
    width: 100%;
    color: ${Colors.white};
    font-size: ${Font.txt_12};
    text-transform: uppercase;
    background-color: ${Colors.black};
`

// All Content
export const FooterContent = styled.div `
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width:1100px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto auto; 
        padding: 2rem 0;
        gap: 1rem;
    }
`

// Column Info
export const FooterColumnInfo = styled.div `
    display: flex;
    align-items: start;
    height: 30%;
    
    @media (max-width: 600px) {
        grid-column: 1 / -1; 
        grid-row: 1 / 2; 
        text-align: center;
        padding: 1rem;
    }
    `

// Logo | All Rights Reserved | Lane
export const FooterInfo = styled.div `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    h5 {
        font-size: ${Font.txt_10};
        font-weight:${Font.txt_300w};
    }
    
    @media (max-width: 600px) {
        width: 100%;
        align-items: center;
        img {
            width: 200px;
        }
    }
    `

// Columns Items
export const FooterColumn = styled.div  `
    display: flex;
    align-items: start;
    height: 30%;
    
    @media (max-width: 600px) {
        height: 100%;
        justify-content: space-around;
    }
    
    `

// Container Items
export const FooterContainerItems = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `

// Items
export const FooterItems = styled.div `
    display: flex;
    gap: 0.3rem;
    cursor:pointer;
    
    h4 {
        text-decoration: none;
        list-style: none;
        text-transform: uppercase;
        font-size: ${Font.txt_12};
        color: ${Colors.off_white};
        position: relative;
        display: inline-block;
        font-weight: 300;   
    }
    
    /* Effect Line */
    h4::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 1px;
        background-color: ${Colors.red_1};
        transition: width 0.3s ease-in-out;
    }
    
    /* Effect Hover Line */
    h4:hover::after {
        width: 100%;
    }
    
    /* Effect Rotation Arrow */
    .arrow-rotation {
        transition: transform 0.3s ease-in-out;
    }
    
    /* Effect Hover */
    &:hover .arrow-rotation {
        transform: rotate(90deg);
    }
`