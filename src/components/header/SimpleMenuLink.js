import React from 'react';

class App extends React.Component {

  render() {
    return (
      <li className="m-simpleNav__item">
        <a href={this.props.link} className="a-link">{this.props.name}</a>
      </li>

    );
  }
  
}

export default App;