import React, { useEffect, useState } from 'react'
import { PilotsStyle, PilotsContent, PilotImage, PilotInfo } from '../styles/PilotsStyle'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom';
import Error from '../routes/Error'

const Pilots = () => {
    // Hook useParams - Acessa os parâmetros de URL, neste caso, o slug
    const { slug } = useParams();

    // Hook useState - Gerencia o estado dos dados da pista, carregamento e erros
    const [pilotInfo, setPilotInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    // Hook useEffect - Executar a função de fetch sempre que o parâmetro slug mudar, 
    // ou seja, quando o usuário clicar para ver outra informações de pista, ela atualizará as informações.
    useEffect(() => {
        // Função para buscar informações da pista
        const fetchPilotInfo = async () => {
            try {
                // Faz a requisição ao JSON usando o slug fornecido
                const response = await fetch(`http://localhost:5000/pilots?slug=${slug}`);
                // Verifica se conseguiu uma resposta do JSON
                if (!response.ok) {
                throw new Error('Erro ao buscar dados');
                }
                // Transforma a resposta em JSON
                const data = await response.json();

                // Verifica se a data tem dados
                if (data.length > 0) {
                    setPilotInfo(data[0]);
                } else{
                    setError('Nenhuma pista encontrada');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPilotInfo();

    }, [slug]);

    if (loading) {
        return <Loading />;
    }
    // Caso tenha um erro ou a informação não seja encontrada a página, aparecerá a página de erro
    if (error || !pilotInfo) {
        return <Error/>;
    }

    return (
        <>
        <PilotsStyle>
            <PilotsContent>
                <PilotImage>
                    <img src={pilotInfo.image} alt={pilotInfo.name} />
                </PilotImage>

                <PilotInfo>
                    <h1>{pilotInfo.name}</h1>
                    <p>Wins: {pilotInfo.wins}</p>
                    <p>Races: {pilotInfo.races}</p>
                </PilotInfo>
            </PilotsContent>
        </PilotsStyle>
        </>
    )
}

export default Pilots