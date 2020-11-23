import React, {Component} from 'react';
import Letter from './Letter';
import AddLetterButton from './AddLetterButton';
import RemoveLetterButton from './RemoveLetterButton';
import GenerateButton from './GenerateButton';

class AcrosticContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      letters: 1
    }
  }

  addLetter = () => {
    this.setState({ letters: this.state.letters + 1 })
  }

  removeLetter = () => {
    this.setState ({ letters: this.state.letters - 1 })
  }

  
  // renderLetters() {
  //   for (let letters = 0; letters < this.state.letters; letters++) {
  //     return <Letter />
  //   }
  // }

  render() {
    return (
      <>
        <Letter />
        <AddLetterButton onClick={ this.addLetter }/>
        <RemoveLetterButton onClick={ this.removeLetter }/>
        <GenerateButton />
      </>
    );
  }
}

export default AcrosticContainer;
