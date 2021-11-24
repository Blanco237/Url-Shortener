import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import Faq from './views/Faq';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

const App = () => {

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/faqs" component={Faq} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App;
