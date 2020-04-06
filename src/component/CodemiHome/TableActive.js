import React from 'react';
import './TableActive.css'

const TableActive = () => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Top active page</th>
                    <th style={{ textAlign: 'right' }}>Active users</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>/#/</td>
                    <td style={{ textAlign: 'right' }}>65</td>
                </tr>
                <tr>
                    <td>/#/learner/my_course</td>
                    <td style={{ textAlign: 'right' }}>45</td>
                </tr>
                <tr>
                    <td>/#/learner/cou..91f03ee95a4e3</td>
                    <td style={{ textAlign: 'right' }}>23</td>
                </tr>
                <tr>
                    <td>/#/learner/lec..91f03ee95a4e3</td>
                    <td style={{ textAlign: 'right' }}>23</td>
                </tr>
                <tr>
                    <td>/#/learner/qui..91f03ee95a4e3</td>
                    <td style={{ textAlign: 'right' }}>21</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableActive;