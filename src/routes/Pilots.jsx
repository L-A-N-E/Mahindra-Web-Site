import React, { useEffect, useState } from 'react'
import { PilotsStyle, PilotsContent, PilotImage, PilotInfo } from '../styles/PilotsStyle'
import Loading from '../components/Loading'
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../routes/Error'

const Pilots = () => {
    // Hook useParams - Acessa os parâmetros de URL, neste caso, o slug
    const { slug } = useParams();

    const { t, i18n } = useTranslation();

    // Hook useNavigate - Para navegação entre rotas
    const navigate = useNavigate();

    // Hook useState - Gerencia o estado dos dados do piloto, carregamento e erros
    const [pilotInfo, setPilotInfo] = useState(null);
    const [pilots, setPilots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    // Hook useEffect - Executar a função de fetch sempre que o parâmetro slug mudar, 
    // ou seja, quando o usuário clicar para ver outra informações de pista, ela atualizará as informações.
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching all pilots
                const pilotsResponse = await fetch('http://localhost:5000/pilots');
                if (!pilotsResponse.ok) {
                    throw new Error('Erro ao buscar dados dos pilotos');
                }
                const pilotsData = await pilotsResponse.json();
                setPilots(pilotsData);
                
                // Fetching specific pilot info
                const pilotResponse = await fetch(`http://localhost:5000/pilots?slug=${slug}`);
                if (!pilotResponse.ok) {
                    throw new Error('Erro ao buscar dados do piloto');
                }
                const pilotData = await pilotResponse.json();

                if (pilotData.length > 0) {
                    setPilotInfo(pilotData[0]);
                } else {
                    setError('Nenhum piloto encontrado');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    // Função para navegar para o próximo piloto
    const handleNextPilot = () => {
        const currentIndex = pilots.findIndex(pilot => pilot.slug === slug); // Encontra o índice do piloto atual
        const nextIndex = (currentIndex + 1) % pilots.length; // Calcula o índice do próximo piloto
        const nextPilot = pilots[nextIndex]; // Obtém o próximo piloto
        navigate(`/pilots/${nextPilot.slug}`); // Navega para a rota do próximo piloto
    };

    if (loading) {
        return <Loading />;
    }
    // Caso tenha um erro ou a informação não seja encontrada a página, aparecerá a página de erro
    if (error || !pilotInfo) {
        return <Error/>;
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);

    };

    return (
        <>
        <PilotsStyle>
            <PilotsContent>
                <PilotImage>
                    <img src={pilotInfo.image} alt={pilotInfo.name} />
                </PilotImage>

                <PilotInfo>
                    <h1>{pilotInfo.name}</h1>
                    <p>{`${t('win')} : ${pilotInfo.wins}`}</p>
                    <p>{`${t('races')} : ${pilotInfo.races}`}</p>
                    <p>{t(pilotInfo.biography)}</p>
                </PilotInfo>

                <button onClick={handleNextPilot}>Next</button> 
            </PilotsContent>
        </PilotsStyle>
        </>
    )
}

export default Pilots