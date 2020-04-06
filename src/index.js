import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import './component/Header/Header'
import * as serviceWorker from './serviceWorker';
import { Row, Col, } from 'react-bootstrap';
import Header from './component/Header/Header';
import SideBar from './component/SideBar/SideBar';
import CodemiHome from './component/CodemiHome/CodemiHome';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Row>
			<Col sm={2} className="side-bar">
				<SideBar />
			</Col>
			<Col sm={10} className="content">
				<CodemiHome />
			</Col>
		</Row>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
