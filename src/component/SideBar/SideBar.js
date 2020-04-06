import React from 'react';
import './SideBar.css'

const SideBar = () => {
    return (
        <div id="sidebar-wrapper">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>HOME</a>
                </li>

                <div className="sidebar-divider my-3" />

                <div className="sidebar-heading">
                    LEARNING
                </div>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-diamond"></i> Courses <span className="badge badge-danger pull-right">21</span></a>
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-usb"></i> Learning plans</a>
                </li>

                <div className="sidebar-divider my-3" />

                <div className="sidebar-heading">
                    MANAGE
                </div>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-user"></i> User</a>
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-cog"></i> Skils</a>
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-area-chart"></i> Reports</a>
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-line-chart "></i> Analytics</a>
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-bullhorn "></i> Announcements</a>
                </li>

                <div className="sidebar-divider my-3" />

                <div className="sidebar-heading">
                    CONFIGURE
                </div>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-star-half-o "></i> Points</a>
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-cog"></i> Reward</a>
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-envelope-o"></i> Email templates</a>
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-info-circle"></i> Company info</a>
                    <a className="nav-link" href="index.html">
                        <i className="fa fa-fw fa-user"></i> Billing</a>
                </li>
            </ul>
        </div>

    )
}

export default SideBar;