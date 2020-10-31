import './App.css';
import Letter from './Letter';
import AddLetterButton from './AddLetterButton';
import RemoveLetterButton from './RemoveLetterButton';
import GenerateButton from './GenerateButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">ACROSTICITY</header>
      <Letter />
      <AddLetterButton />
      <RemoveLetterButton />
      <GenerateButton />
    </div>
  );
}

export default App;
