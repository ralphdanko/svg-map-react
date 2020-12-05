import React from 'react';
import Poland from "../svg-map/src/poland-map";
import RadioSVGMap from '../svg-map/src/radio-svg-map';
import Header from './header';
import "../styles/index.scss";
import "../styles/06_utilities/normalize.css";

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="t-container">
        <RadioSVGMap 
          map={Poland}
        />
        </div>
        
      </div>
    );
  }
  
}

export default App;
