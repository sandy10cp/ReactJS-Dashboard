import React from 'react';
import './HomeChart.css';
import SocialChart from '../SocialLearning/SocialChart';

class HomeChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <span>Codemi Home</span>
                <div className="social-learning">
                    <div className="active-tab" />
                    <div style={{ display: 'inline-block' }}>
                        <p className="social-tab active">Users</p>
                        <span className="home-count active">50K</span>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <p className="social-tab">Course Completed</p>
                        <span className="home-count">5,700</span>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <p className="social-tab">Learning Plan Completed</p>
                        <span className="home-count">1,120</span>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <p className="social-tab">Learning Hour</p>
                        <span className="home-count">22m 40s</span>
                    </div>

                    <SocialChart />
                    <div className="active-social my-3" />
                    <p style={{ display: 'inline-block', fontSize: 11, color: 'gray' }}>Last 7 days <i className="fa fa-caret-down" aria-hidden="true"></i></p>
                </div>
            </>
        );
    }
}

export default HomeChart;