import './App.css';
import Letter from './Letter';
import AddLetterButton from './AddLetterButton';
import RemoveLetterButton from './RemoveLetterButton';
import GenerateButton from './GenerateButton';
import AcrosticContainer from './AcrosticContainer';


//pass down props on add letter button for function to add new letter
//add state to app class; set letter to 1; write functions to update state for both add and remove letter
//pass down functions as props on add and remove letter components? or maybe this can all be done in app.js
//use state to loop through and update how many letter components are displayed on the app
//for each
function App() {
  return (
    <div className="App">
      <header className="App-header">ACROSTICITY</header>
      <AcrosticContainer />
    </div>
  );
}

export default App;
