import React from 'react';
import { Line } from 'react-chartjs-2';

const state = {
    labels: ['08', '09', '10', '11', '12', '13', '14'],
    datasets: [
        {
            label: '',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#3367d7',
            borderColor: '#3367d7',
            borderWidth: 2,
            data: [25000, 24000, 18000, 14000, 22000, 23000, 24000]
        }
    ]
}

export default class UserChart extends React.Component {
    render() {
        return (
            <div>
                <Line
                    data={state}
                    height={170}
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