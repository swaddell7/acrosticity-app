import React, {Component} from 'react';
import Word from './Word';

class DisplayPoem extends Component {

  state = {
      letters: [],
      words: []
  }

  getWords = () => {
      console.log(this.props.wordData.letters)
      return this.state.letters.map(letter => {
        return <Word letter={letter} />
      })
  }

  render() {
    return (
        <div>
          <h1>YOURPOEMHERE</h1>
          {this.getWords()}
        </div>
    )
  }
}


export default DisplayPoem;