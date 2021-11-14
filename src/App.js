import './App.css';
import Neon from './components/neon/Neon';
import LandingButton from './components/landingButton/LandingButton'

function App() {

  return (
    <main className="App">
      <div className="wrapper">
      <div className="Neon">
      <Neon />
      </div>
    
      
      <div className="EnterButton">
      <LandingButton/>
      </div>
      </div>
    </main>
  );
}

export default App;
