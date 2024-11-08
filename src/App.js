import './resources/fonts/fonts.css';

import logo from './logo.svg';
import './App.css';

import BPopUp from './page/BPopUp';
import CHome from './page/CHome';
import DQuotes1 from './page/DQuotes1';
import EQuotes2 from './page/EQuotes2';
import FGroomBride from './page/FGroomBride';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
            <body className="App-content">
                <BPopUp />
                <CHome />
                <DQuotes1 />
                <EQuotes2 />
                <FGroomBride />
            </body>
        </div>
    );
}

export default App;
