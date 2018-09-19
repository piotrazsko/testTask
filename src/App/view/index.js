import React from 'react';
// import { Router, Route, Switch } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from '../components';
import {Grid} from '../containers';

const MainPage = ({}) => (
    <div>
        <Header/>
        <Router>
            <Route exact path='/' component={Grid}/>
        </Router>
    </div>
);

export default MainPage;
