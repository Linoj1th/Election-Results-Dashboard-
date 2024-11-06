import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// import './ElectionChart.css';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const chartData = {
    labels: [
        'ANURA KUMARA DISSANAYAKE',
        'SAJITH PREMADASA',
        'RANIL WICKREMESINGHE',
        'NAMAL RAJAPAKSA',
        'ARIYANETHIRAN PAKKIYASELVAM',
        'DILITH JAYAWEERA',
        'K.K. PIYADASA',
        'DISSANAYAKA MUDIYANSELAGE BANDARANAYAKE'
    ],
    votes: [5634915, 4363035, 2299767, 342781, 226343, 122396, 47543, 30660]
};

const barChartData = {
    labels: chartData.labels,
    datasets: [
        {
            label: 'Votes',
            data: chartData.votes,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const pieChartData = {
    labels: chartData.labels,
    datasets: [
        {
            data: chartData.votes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(100, 200, 255, 0.6)',
                'rgba(200, 100, 255, 0.6)',
            ],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
        },
    ],
};

// Define padding options
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 120,   // Adjust left padding
            right: 120,  // Adjust right padding
            top: 0,      // Adjust top padding
            bottom: 60,   // Adjust bottom padding
        },
    },
};

const ElectionChart = () => {
    return (
        <div style={{ width: '100%', height: '400px', marginBottom: '40px' }}> {/* Added marginBottom here */}
            <center><h2>Election Votes Bar Chart</h2></center>
            <Bar data={barChartData} options={chartOptions} />
            <center><h2>Election Votes Pie Chart</h2></center>
            <Pie data={pieChartData} options={chartOptions} />
        </div>
    );
};

export default ElectionChart;
