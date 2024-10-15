import React from 'react'
import { SolutionStyle, LeftDivStyle, RightDivStyle, InfoSolution, ContainerInfoSolution } from '../styles/SolutionStyle'
import trackvision from '../assets/home/banners/trackvision.png'

// Itens TrackVision
const ItemSolution = () => {
    const trackvisionItems = [
        {
            number: '1',
            title: 'TrackVision',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis cum dolores dolorum, corporis sed quia est alias explicabo sit tempore molestias at quasi porro totam dolorem error fugit incidunt.'
        },
        {
            number: '2',
            title: 'Entenda como funciona',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis cum dolores dolorum, corporis sed quia est alias explicabo sit tempore molestias at quasi porro totam dolorem error fugit incidunt.'
        },
        {
            number: '3',
            title: 'Tenha acesso',
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


// Componente TrackVision
const Trackvision = () => {
    return (
        <SolutionStyle>
            <LeftDivStyle>
                <img src={trackvision} alt="TrackVision" />
            </LeftDivStyle>

            <RightDivStyle>
                <ItemSolution />
            </RightDivStyle>
        </SolutionStyle>
    )
}


export default Trackvision