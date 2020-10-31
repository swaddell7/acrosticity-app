// import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Letter extends Component {
  constructor(props) {
    super();
    this.state = {
      id: null
    }
  }

  render() {
    return (
      <form>
        <input type="text"></input>
      </form>
    )
  }
}


export default Letter;