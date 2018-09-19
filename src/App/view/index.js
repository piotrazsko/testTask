import React from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import { Header } from '../components';
import {Grid} from '../containers';

const MainPage = () => (
    <div>
        <Header/>
        <Router>
            <Route exact path='/' component={Grid}/>
        </Router>
    </div>
);

export default MainPage;
