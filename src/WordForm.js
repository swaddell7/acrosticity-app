import React, {Component} from 'react';

class WordForm extends Component {

  // //handle submitting form
  // handleSubmit = event => {
  //   event.preventDefault();
  //   let formData = { letters: this.state.letters };
  //   console.log(formData)
  // }

  render() {
    return (
      <div>
        <form>
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