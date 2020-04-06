import React from 'react'
import { Row, Col, Nav } from 'react-bootstrap';
import './CodemiHome.css'
import Chart from './Chart'
import TableActive from './TableActive';
import UserVisit from '../UserVisit/UserVisit';
import ActiveUser from '../ActiveUser/ActiveUser';
import SocialLearning from '../SocialLearning/SocialLearning';
import HomeChart from './HomeChart';

const CodemiHome = () => {
    return (
        <div className="codemi-home">
            <Row>
                <Col sm={8} className="home-chart">
                    <HomeChart />
                </Col>
                <Col sm={4} className="active-user mt-5">
                    <div className="active-card">
                        <p className="active-title">Active Users right now</p>
                        <span className="active-count">479</span>
                        <p className="active-page-view">Pages views per minute</p>
                        <div className="active-divider my-3" />
                        <div className="active-chart">
                            <Chart />
                        </div>
                        <div className="active-top-page">
                            <TableActive />
                        </div>
                        <div className="active-divider1 my-3" />
                        <p className="active-realt-time pull-right">REAL-TIME REPORT &emsp;<i className="fa fa-angle-right" aria-hidden="true"></i></p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col sm={6}>
                    <UserVisit />
                </Col>
                <Col sm={6}>
                    <ActiveUser />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col sm={12}>
                    <SocialLearning />
                </Col>
            </Row>
        </div>
    )
}

export default CodemiHome;