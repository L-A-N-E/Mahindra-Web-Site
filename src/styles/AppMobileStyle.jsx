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
}
`