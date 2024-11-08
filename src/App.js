import logo from './logo.svg';
import './App.css';
import BPopUp from './page/BPopUp'
import CHome from './page/CHome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body className="App-content">
        test
        <BPopUp/>
        <CHome/>
      </body>
    </div>
  );
}

export default App;
