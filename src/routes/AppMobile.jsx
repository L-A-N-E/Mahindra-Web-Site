import TRacer from '../assets/app_mobile/celularReto.png'
import React from 'react'
import { SolutionStyle, LeftDivStyle, RightDivStyle, InfoSolution, ContainerInfoSolution } from '../styles/SolutionStyle'

const ItemSolution = () => {
    const trackvisionItems = [
        {
            number: '1',
            title: 'TRacer',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis cum dolores dolorum, corporis sed quia est alias explicabo sit tempore molestias at quasi porro totam dolorem error fugit incidunt.'
        },
        {
            number: '2',
            title: 'Escolha sua Equipe',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis cum dolores dolorum, corporis sed quia est alias explicabo sit tempore molestias at quasi porro totam dolorem error fugit incidunt.'
        },
        {
            number: '3',
            title: 'Jogue com Amigos',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis cum dolores dolorum, corporis sed quia est alias explicabo sit tempore molestias at quasi porro totam dolorem error fugit incidunt.'
        }
    ];

    return (
        <InfoSolution>
            {trackvisionItems.map((item, index) => (
                <ContainerInfoSolution key={index} className='grid'>
                    <p className='Number'>{item.number}</p>
                    <h1 className='TextH1'>{item.title}</h1>
                    <p className='ParagraphP'>{item.paragraph}</p>
                </ContainerInfoSolution>
            ))}
        </InfoSolution>
    );
}


const App = () => {
    return (
        <SolutionStyle className='gap-10'>
            <LeftDivStyle>
                <img className='pt-7' src={TRacer} alt="TrackVision" />
            </LeftDivStyle>

            <RightDivStyle>
                <ItemSolution />
            </RightDivStyle>
        </SolutionStyle>
    )
}


export default App

// export default App;
