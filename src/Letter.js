// import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    }
  }

  //set state of letter input form field on change
  handleChange(event) {
    this.setState({ id: event.target.value })
  }

  render() {
    return (
      <form>
        <input type="text" onChange={ event => this.handleChange(event)}></input>
      </form>
    )
  }
}


export default Letter;