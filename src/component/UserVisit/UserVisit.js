import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import './UserVisit.css'

class UserVisit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <span>What courses do you users visit?</span>
                <div className="user-visit">
                    <div className="table-visit-responsive">
                        <table className="table table-visit">
                            <thead>
                                <tr>
                                    <th>Courses</th>
                                    <th style={{ textAlign: 'right' }}>Completed</th>
                                    <th style={{ textAlign: 'right' }}>Completion %</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span>Digital Marketing for Sales Person</span></td>
                                    <td style={{ textAlign: 'right' }}>15,243</td>
                                    <td style={{ textAlign: 'right' }}>86,5%</td>
                                </tr>
                                <tr>
                                    <td><span>Getting Started with Microsoft Office 2016</span></td>
                                    <td style={{ textAlign: 'right' }}>14,143</td>
                                    <td style={{ textAlign: 'right' }}>80,5%</td>
                                </tr>
                                <tr>
                                    <td><span>Marketing Fundamental</span></td>
                                    <td style={{ textAlign: 'right' }}>13,243</td>
                                    <td style={{ textAlign: 'right' }}>76,5%</td>
                                </tr>
                                <tr>
                                    <td><span>Know Your Customer</span></td>
                                    <td style={{ textAlign: 'right' }}>10,243</td>
                                    <td style={{ textAlign: 'right' }}>36,5%</td>
                                </tr>
                                <tr>
                                    <td><span>Excel Data Analysis For Dummies</span></td>
                                    <td style={{ textAlign: 'right' }}>9,243</td>
                                    <td style={{ textAlign: 'right' }}>6,5%</td>
                                </tr>
                                <tr>
                                    <td><span>Excel 2016 - The Completed Excel Ma..</span></td>
                                    <td style={{ textAlign: 'right' }}>1,243</td>
                                    <td style={{ textAlign: 'right' }}>5%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="active-divider-visit my-3" />
                    <p style={{ display: 'inline-block', fontSize: 11, color: 'gray' }}>Last 7 days <i className="fa fa-caret-down" aria-hidden="true"></i></p>
                    <p className="report-visit pull-right">COURSE REPORT &emsp;<i className="fa fa-angle-right" aria-hidden="true"></i></p>
                </div>
            </>
        );
    }
}

export default UserVisit;