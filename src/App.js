import React from 'react';
import Poland from "./svg-map/src/poland-map";
import RadioSVGMap from './svg-map/src/radio-svg-map';
import Header from './components/header';
import "./styles/index.scss";

class App extends React.Component {

  render() {
    return (
      <div className="t-container">
        <Header/>
        <RadioSVGMap 
          map={Poland}
        />
      </div>
    );
  }
  
}

export default App;
