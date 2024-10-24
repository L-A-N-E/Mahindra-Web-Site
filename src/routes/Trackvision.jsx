import React from 'react'
import { SolutionStyle, LeftDivStyle, RightDivStyle, InfoSolution, ContainerInfoSolution } from '../styles/SolutionStyle'
import trackvision from '../assets/home/banners/trackvision.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ButtonRedStyle } from '../styles/ButtonRedStyle'

// Itens TrackVision
const ItemSolution = () => {

    // Tradução
    const { t, i18n } = useTranslation();   
    // Função para mudar idioma
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const trackvisionItems = [
        {
            number: '1',
            title: t('trackvision'),
            paragraph: t('1-trackvision'),
        },
        {
            number: '2',
            title: t('2-titletrack'),
            paragraph: t('2-trackvision'),
        },
        {
            number: '3',
            title: t('3-titletrack'),
            paragraph: t('3-trackvision'),
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

                <Link className='mt-6' to='https://20.206.249.122:8050/'>
                    <ButtonRedStyle>Acesse</ButtonRedStyle>
                </Link>
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