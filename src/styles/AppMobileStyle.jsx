import styled from 'styled-components';

export const BackgroundAppMobile = styled.div`
background-color:#fa0b21;
`


export const TopAppMobile = styled.div`
    .top-section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100vh;
        padding:1rem;
    }

    .titulo-wrapper {
        width: 100%;
        display: flex;
        align-items:center;
        justify-content: center;
        padding:2rem;
    }

    .titulo {
        color: #fff;
        font-size: 90px;
        font-weight: bold;
        z-index:1;
        text-shadow: 1px 1px white, -5px -5px #444;
    }

    .image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
    }

    .image-wrapper img {
        width: 80%; 
        height: auto;
    }

    .animate-img{
        animation: animate-image 1.5s ease-in-out;
    }

    @keyframes animate-image {
    0% {
        transform: translateY(400px); /* Surge debaixo */
        opacity: 0; /* Invisível no início */
    }
    100% {
        transform: translateY(0); /* Volta à posição original */
        opacity: 1; /* Totalmente visível */
    }
}
`

export const ContainerArrow = styled.div`
width:100%;
height:auto;
display:flex;
align-items:center;
justify-content:center;

`


export const ArrowAnimated = styled.div`
.center{ 
    height:160px;
    border-left: 6px dashed #af0817;
    position: relative;
    margin-top:80px;
    margin-bottom:80px;
}

.arrow{
    position:absolute;
    top:0;
    left:-6px;
    height:40px;
    width:6px;
    background:#fff;
    animation: animate 3.5s infinite;
}

.arrow:before{
    content: "";
    position: absolute;
    bottom:0;
    left:-10px;
    width:20px;
    height:20px;
    border-bottom:6px solid #fff;
    border-right:6px solid #fff;
    transform:rotate(45deg);
}

@keyframes animate {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(120px);
    }
}
`

export const MidAppMobile = styled.div`
width:100%;
.middle-section{
    z-index:2;
    height:auto;
    display:flex;
    align-items:center;
    justify-content:center;
}
.middle-section img{
    width:60%;
    padding:2rem;
}
`

export const BotAppMobile = styled.div`
width:100%;
.final-section{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    color: #fff;
    padding:3rem;
}

.final-section h1{
    color: #fff;
    font-size: 70px;
    font-weight: bold;
    letter-spacing:2px;
    text-shadow: 1px 1px white, -3px -3px #444;
}

.final-section h2{
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    letter-spacing:2px;
    text-shadow: 1px 1px white, -3px -3px #444;
}

.final-section button{
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 1000ms ease-in-out;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid #000;
    background-color:#000;
    width:200px;
    color:#fff;
}

.final-section button:hover{
    cursor:pointer;
    transform: scale(1.1);
    outline: 2px solid #fff;
    box-shadow: 4px 5px 17px -4px #fff;
    color: #000;
}

.final-section button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #fff;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms ease-in-out;
}

.final-section button:hover::before {
    width: 250%;  
}

.final-section-buttons{
    display:flex;
    flex-direction:row;
    gap:2rem;
    padding:25px;
}
`