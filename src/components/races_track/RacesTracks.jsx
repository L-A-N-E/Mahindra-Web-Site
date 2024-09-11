// Importando depdencias
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Importando telas
import Loading from "../Loading"; 
import Error from "../../routes/Error"; 

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
        <div>
            <h1>{trackInfo.name}</h1>
        </div>
    );
};

export default RaceTrack;
