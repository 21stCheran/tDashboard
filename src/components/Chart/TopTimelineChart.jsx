// src/components/Chart/TopTimelineChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const TopTimelineChart = () => {
    const data = {
        labels: ['Jobs', 'Dhaba', 'Mech', 'Convoy', 'Profile', 'Others'],
        datasets: [
            {
                label: 'Activity (Minutes)',
                data: [20, 10, 15, 5, 30, 10],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
    };

    return <Bar data={data} options={options} />;
};

export default TopTimelineChart;
