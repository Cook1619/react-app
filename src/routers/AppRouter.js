import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from '../components/About';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import Tips from '../components/Tips';
import Home from '../components/Home';
import Header from '../components/Header'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
        </div>
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/Blog" component={Blog}/>
            <Route path="/Tips" component={Tips}/>
        </Switch>
    </BrowserRouter>
)

export default AppRouter;