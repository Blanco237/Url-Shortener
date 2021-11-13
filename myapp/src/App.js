import React, { useEffect, useState } from 'react';
import  {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';

const App = () => {

    return (
        <>
            <Header />
            <Home />
        </>
    )
}

export default App;
