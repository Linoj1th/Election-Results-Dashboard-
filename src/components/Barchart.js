import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const dataset = [
  { location: 'Uduppiddy ', rate: 58.58 },
  { location: 'Chavakachcheri ', rate: 59.91 },
  { location: 'Point-Pedro', rate: 61.83 },
  { location: 'Kopai (Jaffna)', rate: 64.22 },
  { location: 'Kankesanthurai', rate: 64.66 },
  { location: 'Wellawaya ', rate: 85.30 },
  { location: 'Moneragala', rate: 84.30 },
  { location: 'Bibila', rate: 84.22 },
  { location: 'Mahiyangana', rate: 83.94 },
  { location: 'Ampara ', rate: 83.57 },
];

const valueFormatter = (value) => `${value.toFixed(2)}%`;

const chartSetting = {
  xAxis: [
    {
      label: 'Voting Rate(%)',
      valueFormatter,
    },
  ],
  width: 600,
  height: 400,
  margin: { top: 10, bottom: 30, left: 100, right: 10 }, // Added left margin
};

export default function Charts() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'location' }]}
      series={[{ dataKey: 'rate', label: 'Voting Rate', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
