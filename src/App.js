import React from 'react';

import './resources/fonts/fonts.css';

import logo from './logo.svg';
import './App.css';

import AStaticPage from './page/AStaticPage';

function App() {
    return (
        <div className="App">
            <header />
            <body className="App-content">
                <AStaticPage />
            </body>
        </div>
    );
}

export default App;
