import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';

const App = () => {

    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default App;
