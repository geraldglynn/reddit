// import logo from './logo.svg';
// import './App.css';
import data from '../mock/reactjs.json'

// console.log(data)

function App() {
  return (
    <div className="App1">
      <header className="App-header1">
        <p>
          YO
          { data.map(d =>{
              console.log(d)
          })}
        </p>
      </header>
    </div>
  );
}

export default App;
