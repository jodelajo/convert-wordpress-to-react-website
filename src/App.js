import './App.css';
import Neon from './components/neon/Neon';
import EnterButton from './components/enterButton/EnterButton';

function App() {

  return (
    <main className="App">
      <div className="Neon">
      <Neon />
      </div>
    
      
      <div className="EnterButton">
      <EnterButton/>
      </div>
    </main>
  );
}

export default App;
