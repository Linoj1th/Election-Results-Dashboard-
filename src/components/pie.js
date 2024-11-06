import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const chartData = {
  labels: [
    'ANURA KUMARA ',
    'SAJITH PREMADASA',
    'RANIL WICKREMESINGHE',
    'NAMAL RAJAPAKSA',
    'ARIYANETHIRAN ',
    'DILITH JAYAWEERA',
    'K.K. PIYADASA',
    'DISSANAYAKA ',
  ],
  votes: [5634915, 4363035, 2299767, 342781, 226343, 122396, 47543, 30660],
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

// Responsive chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 50,
      right: 50,
      top: 20,
      bottom: 20,
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: {
          size: 12, // Adjust font size for better readability on all screens
        },
      },
    },
    tooltip: {
      bodyFont: {
        size: 14, // Responsive font size in tooltips
      },
    },
  },
};

const ElectionChart = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '40px' }}>
        <center><h2 style={{ fontSize: '1.8rem' }}>Election Votes Bar Chart</h2></center>
        <div style={{ width: '100%', height: '400px' }}>
          <Bar data={barChartData} options={chartOptions} />
        </div>
      </div>
      <div>
        <center><h2 style={{ fontSize: '1.8rem' }}>Election Votes Pie Chart</h2></center>
        <div style={{ width: '100%', height: '400px' }}>
          <Pie data={pieChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ElectionChart;
