import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt31tjVrlRqo_A5hGNI6SWxWDhLhKclY4",
  authDomain: "r24-3-3be79.firebaseapp.com",
  projectId: "r24-3-3be79",
  storageBucket: "r24-3-3be79.appspot.com",
  messagingSenderId: "209557629633",
  appId: "1:209557629633:web:bd95ca81edd19d4b4e4240"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
    </div>
  );
}

export default App;
