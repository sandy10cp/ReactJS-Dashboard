import React from 'react';
import './Chart.css'

const Chart = () => {
    const dataset = [50, 60, 55, 70, 85, 68, 80, 40, 50, 55, 41, 64, 58, 71,
        38, 41, 64, 80, 71, 38, 60, 63, 20, 85, 68, 80, 40, 50, 55, 30, 50, 30, 63];
    return (
        <>
            {
                dataset.map(function (item, i) {
                    return (
                        <div key={i} style={{ display: 'inline-block' }}>
                            <div className="chart-bar-top2" />
                            <div className="chart-bar-top" />
                            <div className="chart-bar" style={{ height: item }} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Chart;