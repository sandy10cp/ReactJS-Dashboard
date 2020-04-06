import React from 'react';
import './SocialLearning.css';
import SocialChart from './SocialChart';

class SocialLearning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <span>How's your social learning activity?</span>
                <div className="social-learning">
                    <div className="active-tab" />
                    <span className="social-tab">Discussion</span>
                    <span className="social-tab">Blog Post</span>
                    <span className="social-tab">Questions and Answers</span>
                    <SocialChart />
                    <div className="active-social my-3" />
                    <p style={{ display: 'inline-block', fontSize: 11, color: 'gray' }}>Last 7 days <i className="fa fa-caret-down" aria-hidden="true"></i></p>
                </div>
            </>
        );
    }
}

export default SocialLearning;