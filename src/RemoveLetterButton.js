import React, {Component} from 'react';

class RemoveLetterButton extends Component {

  render() {
    return (
      <div>
        <button onClick={ this.props.onClick }>-</button>
      </div>
    )
  }

}

export default RemoveLetterButton;