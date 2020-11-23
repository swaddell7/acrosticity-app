import React, {Component} from 'react';

class AddLetterButton extends Component {

  // addLetter() {
  //   this.setState({ letters: this.state.letters + 1 })
  // }

  // removeLetter() {
  //   this.setState ({ letters: this.state.letters - 1 })
  // }

  render() {
    return (
      <div>
        <button onClick={ this.props.onClick }>+</button>
      </div>
    );
  }
}

export default AddLetterButton;