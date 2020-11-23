import React, {Component} from 'react';
import WordForm from './WordForm';
import DisplayPoem from './DisplayPoem';

class AcrosticContainer extends Component {

  state = {
    word: '',
    letters: []
  }

  handleChange = event => {
    this.setState({
      word: event.target.value,
      letters: event.target.value.split('')
    })
  }

  render() {
    return (
      <>
        <WordForm 
          wordData={this.state}
          handleChange={this.handleChange}
        />
        <DisplayPoem
          wordData={this.state}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

export default AcrosticContainer;
