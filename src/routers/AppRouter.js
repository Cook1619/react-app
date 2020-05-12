import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Javascript from '../components/Javascript';
import Css from '../components/Css';
import Home from '../components/Home';
import Header from '../components/Header'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
        </div>
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/javascript" component={Javascript}/>
            <Route path="/css" component={Css}/>
        </Switch>
    </BrowserRouter>
)

export default AppRouter;