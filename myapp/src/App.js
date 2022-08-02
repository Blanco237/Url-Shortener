import React, { useEffect, useState, useContext, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { getAuth, onAuthStateChanged } from 'firebase/auth'

import UserProvider from './providers/UserProvider'
import AlertProvider from './providers/AlertProvider';
import LoadingProvider from './providers/LoadingProvider';
import LinkProvider from './providers/LinkProvider';


import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import Faq from './views/Faq';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Alert from './partials/Alert/Alert';
import Loading from './partials/Loading/Loading';


const App = () => {

    let user = createContext(null);


    const auth = getAuth();


    return (
        <>
            <UserProvider>
                <LoadingProvider>
                    <AlertProvider>
                        <LinkProvider >
                            <Router>
                                <Alert />
                                <Loading />
                                <Header />
                                <Switch>
                                    <Route exact path="/" component={Home} element={<Home />} />
                                    <Route exact path="/login" component={Login} element={<Login />} />
                                    <Route exact path="/register" component={Register} element={<Register />} />
                                    <Route exact path="/faqs" component={Faq} element={<Faq />} />
                                    <Route exact path="/dashboard" component={Dashboard} element={<Dashboard />} />
                                    <Route path="/:short_url" element={<Faq />} component={Faq}/>
                                </Switch>
                                <Footer />
                            </Router>
                        </LinkProvider>
                    </AlertProvider>
                </LoadingProvider>
            </UserProvider>
        </>
    )
}

export default App;
