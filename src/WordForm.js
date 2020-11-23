// import { render } from '@testing-library/react';
import React, {Component} from 'react';

class WordForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     word: null,
  //     letters: []
  //   }
  // }

  // //set state of letter input form field on change
  // handleChange = event => {
  //   this.setState({ 
  //     word: event.target.value,
  //     letters: event.target.value.split('')
  //    })
  // }

  // //handle submitting form
  handleSubmit = event => {
    event.preventDefault();
    let formData = { letters: this.state.letters };
    console.log(formData)
  }

  render() {
    return (
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <input 
            type="text"
            onChange={ event => this.props.handleChange(event) }
            value={this.props.wordData.word}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}


export default WordForm;