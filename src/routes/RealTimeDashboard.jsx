import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Colors from '../constant/Colors';

// Registrar os componentes do Chart.js
Chart.register(...registerables);

const RealTimeChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],  // Timestamps ou índices de tempo
        datasets: [
            {
                label: 'Dados em tempo real',
                data: [],
                borderColor: `${Colors.red_1}`,
                borderWidth: 3,
                fill: false,
            },
        ],
    });

    // Simulando dados de tempo real
    useEffect(() => {
        const interval = setInterval(() => {
            const newTimestamp = new Date().toLocaleTimeString();
            const newDataPoint = Math.floor(Math.random() * 100);

            const lastN = -10 // Define o numero de valores que serão exibidos no gráfico

            setChartData((prevData) => ({
                labels: [...prevData.labels, newTimestamp].slice(lastN), // Mantendo os últimos 10 pontos no gráfico
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: [...prevData.datasets[0].data, newDataPoint].slice(lastN),
                    },
                ],
            }));
        }, 3000); 

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <div className='h-dvh bg-black flex flex-col items-center justify-center'>
            <Line data={chartData} />
        </div>
    );
};

export default RealTimeChart;
