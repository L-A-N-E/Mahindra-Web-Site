// Importando depdencias
import React, { useEffect, useState } from 'react';
import { RaceTrackStyle, RaceTrackContent, RaceTrackCenter, RaceTrackCity, RaceTrackCircuit, RaceTrackAboutInfo, RaceTrackTextInfo, RaceTrackContainerPilots, RaceTrackCardsRight } from '../styles/RacesTrackStyle'
import { Link, useParams } from 'react-router-dom';
// Importando telas
import Loading from "../components/Loading"; 
import Error from "./Error"; 

const RaceTrack = () => {
    // Hook useParams - Acessa os parâmetros de URL, neste caso, o slug
    const { slug } = useParams();

    // Hook useState - Gerencia o estado dos dados da pista, carregamento e erros
    const [trackInfo, setTrackInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    // Hook useEffect - Executar a função de fetch sempre que o parâmetro slug mudar, 
    // ou seja, quando o usuário clicar para ver outra informações de pista, ela atualizará as informações.
    useEffect(() => {
        // Função para buscar informações da pista
        const fetchTrackInfo = async () => {
            try {
                // Faz a requisição ao JSON usando o slug fornecido
                const response = await fetch(`http://localhost:5000/races?slug=${slug}`);
                // Verifica se conseguiu uma resposta do JSON
                if (!response.ok) {
                throw new Error('Erro ao buscar dados');
                }
                // Transforma a resposta em JSON
                const data = await response.json();

                // Verifica se a data tem dados
                if (data.length > 0) {
                    setTrackInfo(data[0]);
                } else{
                    setError('Nenhuma pista encontrada');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTrackInfo();

    }, [slug]);

    if (loading) {
        return <Loading />;
    }
    // Caso tenha um erro ou a informação não seja encontrada a página, aparecerá a página de erro
    if (error || !trackInfo) {
        return <Error/>;
    }

    return (
        <>
        <RaceTrackStyle>
            {/* Conteudo Principal */}
            <RaceTrackContent>

                {/* Organizar Conteudo */}
                <RaceTrackCenter>

                    {/* Titulo */}
                    <RaceTrackCity>
                        <h1>{trackInfo.name}</h1>
                    </RaceTrackCity>

                    {/* Circuito Imagem */}
                    <RaceTrackCircuit>
                        <img src={trackInfo.race_track} alt={`${trackInfo.city} Flag`} />
                    </RaceTrackCircuit>

                    {/* Informações Sobre a Pista */}
                    <RaceTrackAboutInfo>

                        {/* Tamanho do Circuito */}
                        <RaceTrackTextInfo>
                            <h1>Length</h1>
                            <p>{trackInfo.length} M</p>
                        </RaceTrackTextInfo>

                        {/* Velocidade Maxima Alcançada */}
                        <RaceTrackTextInfo>
                            <h1>Max Velocity</h1>
                            <p>{trackInfo.max_velocity} KM/H</p>
                        </RaceTrackTextInfo>

                        {/* Numero de Voltas */}
                        <RaceTrackTextInfo>
                            <h1>Laps</h1>
                            <p>{trackInfo.laps}</p>
                        </RaceTrackTextInfo>
                        
                    </RaceTrackAboutInfo>
                </RaceTrackCenter>
            </RaceTrackContent>

            {/* Coluna Direita */}
            <RaceTrackContainerPilots>

                {/* Card Edoardo Mortara */}
                <Link to='/pilots/edoardo-mortara'>
                    <RaceTrackCardsRight className='card-1'>
                    </RaceTrackCardsRight>
                </Link>

                {/* Card Nyck de Vries */}
                <Link to='/pilots/nyck-de-vries'>
                    <RaceTrackCardsRight className='card-2'>
                    </RaceTrackCardsRight>
                </Link>
            </RaceTrackContainerPilots>
        </RaceTrackStyle>
        </>
    );
};

export default RaceTrack;
