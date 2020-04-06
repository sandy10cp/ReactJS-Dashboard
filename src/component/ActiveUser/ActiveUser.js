import React, { Component } from 'react';
import './ActiveUser.css'
import Spinner from './Loading'

class ActiveUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datauser: [],
            spinner: true
        };
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                this.setState({ datauser: data.results, spinner: false })
            })
            .catch(error => console.error(error))
    }

    render() {
        return (
            <>
                <span>Who is your most active user?</span>
                <div className="user-active">
                    <div className="table-active-responsive">
                        <table className="table table-user-active">
                            <thead>
                                <tr>
                                    <th>Users</th>
                                    <th style={{ textAlign: 'right' }}>Completed</th>
                                    <th style={{ textAlign: 'right' }}>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.spinner ?
                                        <Spinner />
                                        :
                                        this.state.datauser.map(function (item, i) {
                                            return (
                                                <tr key={i}>
                                                    <td><span>{item.name}</span></td>
                                                    <td style={{ textAlign: 'right' }}>15,243</td>
                                                    <td style={{ textAlign: 'right' }}>{item.mass}</td>
                                                </tr>
                                            )
                                        })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="active-divider-visit my-3" />
                    <p style={{ display: 'inline-block', fontSize: 11, color: 'gray' }}>Last 7 days <i className="fa fa-caret-down" aria-hidden="true"></i></p>
                    <p className="report-visit pull-right">USER REPORT &emsp;<i className="fa fa-angle-right" aria-hidden="true"></i></p>
                </div>
            </>
        );
    }
}

export default ActiveUser;