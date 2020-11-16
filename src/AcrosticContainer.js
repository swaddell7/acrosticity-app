import React, {Component} from 'react';
import Letter from './Letter';
import AddLetterButton from './AddLetterButton';
import RemoveLetterButton from './RemoveLetterButton';
import GenerateButton from './GenerateButton';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      letters: 1
    }
  }

  addLetter() {
    this.setState({ letters: this.state.letters + 1 })
  }

  removeLetter() {
    this.setState ({ letters: this.state.letters - 1 })
  }

  render() {
    return (
      <>
        <Letter />
        <AddLetterButton onClick={this.addLetter}/>
        <RemoveLetterButton />
        <GenerateButton />
      </>
    );
  }
}

export default App;
