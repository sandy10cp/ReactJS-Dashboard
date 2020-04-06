import React from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
    labels: ['08', '09', '10', '11', '12', '13', '14'],
    datasets: [
        {
            label: '',
            backgroundColor: '#3367d7',
            borderColor: '#3367d7',
            borderWidth: 2,
            data: [25000, 24000, 18000, 14000, 22000, 23000, 24000]
        }
    ]
}

export default class SocialChart extends React.Component {
    render() {
        return (
            <div>
                <Bar
                    width={100}
                    height={40}
                    data={state}
                    options={{
                        scales: {
                            yAxes: [{
                                position: 'right',
                                ticks: {
                                    callback: function (label, index, labels) {
                                        return label / 1000 + 'k';
                                    },
                                    padding: 0,
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}