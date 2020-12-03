import React from 'react';
import Poland from "./svg-map/src/poland-map";
import RadioSVGMap from './svg-map/src/radio-svg-map';
import "./svg-map/lib/index.css";

class App extends React.Component {

  render() {
    return (
      <div>
        <RadioSVGMap 
          map={Poland}
        />
      </div>
    );
  }
  
}

export default App;
