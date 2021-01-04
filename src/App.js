import './App.css';
import Header from './Header';
import Home from './Home';
function App() {
  return (
    // BEM CONVENTION FOR STYLING
    <div className="App">
      <Header/>
      <Home/>
      {/* Home*/}
    </div>
  );
}

export default App;
