import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <ul className="dashboard__side-navigation">
                    <li className="dashboard__side-navigation-item">
                        <a href="#" className="dashboard__side-navigation-link">Google map</a>
                    </li>
                </ul>

                <div className="google-map-view">
                    map goes here
                </div>
            </div>
        );
    }
}