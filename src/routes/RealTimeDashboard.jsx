// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
// import Colors from '../constant/Colors';

// // Registrar os componentes do Chart.js
// Chart.register(...registerables);

// const RealTimeChart = () => {
//     const [chartData, setChartData] = useState({
//         labels: [],  // Timestamps ou índices de tempo
//         datasets: [
//             {
//                 label: 'Dados em tempo real',
//                 data: [],
//                 borderColor: `${Colors.red_1}`,
//                 borderWidth: 3,
//                 fill: false,
//             },
//         ],
//     });

//     useEffect(() => {
//         const interval = setInterval(() => {
//             // Obter o horário atual com minutos, segundos e milissegundos
//             const now = new Date();
//             const minutes = now.getMinutes().toString().padStart(2, '0');
//             const seconds = now.getSeconds().toString().padStart(2, '0');
//             const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

//             // Formatar o tempo como MM:SS:MS
//             const newTimestamp = `${minutes}:${seconds}:${milliseconds}`;

//             const newDataPoint = Math.floor(Math.random() * 100);

//             const lastN = -10; // Define o número de valores que serão exibidos no gráfico

//             setChartData((prevData) => ({
//                 labels: [...prevData.labels, newTimestamp].slice(lastN), // Mantendo os últimos 10 pontos no gráfico
//                 datasets: [
//                     {
//                         ...prevData.datasets[0],
//                         data: [...prevData.datasets[0].data, newDataPoint].slice(lastN),
//                     },
//                 ],
//             }));
//         }, 3000); // Atualização a cada 3 segundos

//         return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
//     }, []);

//     return (
//         <div className='h-dvh bg-black flex flex-col items-center justify-center'>
//             <Line data={chartData} />
//         </div>
//     );
// };

// export default RealTimeChart;

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Colors from '../constant/Colors'

Chart.register(...registerables);

const RealTimeLapChart = () => {
    const maxVoltas = 10; // Número máximo de voltas
    const [currentLap, setCurrentLap] = useState(0); // Estado para controlar a volta atual
    const [chartData, setChartData] = useState({
        labels: [], // Nomes ou números das voltas
        datasets: [
            {
                label: 'Exibir Dados',
                data: [],
                borderColor: `${Colors.red_1}`,
                borderWidth: 2,
                fill: false,
            },
        ],
    });
    const [averageTime, setAverageTime] = useState(null); // Estado para armazenar a média
    const [totalTime, setTotalTime] = useState(null); // Estado para armazenar o tempo total

    // Função para formatar o tempo em minutos, segundos e milissegundos
    const formatTime = (timeInMs) => {
        const minutes = Math.floor(timeInMs / 60000); // Minutos
        const seconds = Math.floor((timeInMs % 60000) / 1000); // Segundos
        const milliseconds = Math.floor((timeInMs % 1000) / 10); // Apenas os 3 primeiros valores de milissegundos
        return `${minutes}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    };


    useEffect(() => {
        if (currentLap < maxVoltas) {
            const interval = setInterval(() => {
                // Gerar tempo de volta aleatório entre 70.000 ms (1 min 10 seg) e 90.000 ms (1 min 30 seg)
                const newLapTime = Math.floor(Math.random() * (80000 - 70000 + 1)) + 70000;

                setChartData((prevData) => {
                    const updatedData = [...prevData.datasets[0].data, newLapTime]; // Adiciona novo tempo de volta

                    return {
                        labels: [...prevData.labels, `Volta ${currentLap + 1}`], // Adiciona a volta no eixo X
                        datasets: [
                            {
                                ...prevData.datasets[0],
                                data: updatedData, // Atualiza os dados com a nova volta
                            },
                        ],
                    };
                });

                setCurrentLap((prevLap) => prevLap + 1); // Incrementa o número da volta
            }, 3000); // Atualiza a cada 3 segundos

            return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta ou atinge o limite
        } else if (currentLap === maxVoltas) {
            // Quando o número de voltas atinge o máximo, calcula a média e o tempo total
            const tempoTotal = chartData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
            const mediaCircuito = tempoTotal / maxVoltas;

            setAverageTime(mediaCircuito.toFixed(2)); // Define a média com 2 casas decimais
            setTotalTime(tempoTotal); // Define o tempo total
        }
    }, [currentLap, maxVoltas, chartData.datasets[0].data]); // Dependências para recalcular com base nas voltas


    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                color: 'white',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Voltas',
                    color: 'white',
                },

                ticks: {
                    color: 'white',
                },
            },
            y: {
                title: {
                    color: 'white',
                    display: true,
                    text: 'Tempo (ms)',
                },

                ticks: {
                    color: 'white',
                },

                min: 65000,
                max: 85000,
            },
        },
    };


    return (
        <div className='bg-black flex flex-col items-center justify-center min-h-100dvh pt-6 gap-6'>

            {/* Titulo */}
            <h2 className={`text-red-600 text-center uppercase font-bold text-3xl`}>TrackVision</h2>

            {/* Gráfico */}
            <Line className='p-7' data={chartData} options={options} />

            {/* Média das Voltas */}
            {currentLap === maxVoltas && (
                <div>
                    <h3 className='text-white text-center'>Média dos Tempos de Volta: {formatTime(averageTime)} </h3>
                </div>
            )}
        </div>
    );
};

export default RealTimeLapChart;


