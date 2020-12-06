import React from 'react';
import Poland from "../svg-map/src/poland-map";
import RadioSVGMap from '../svg-map/src/radio-svg-map';
import Header from './header';
import Footer from './footer';
import "../styles/06_utilities/normalize.css";
import "../styles/index.scss";

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
        <Footer/>
      </div>
    );
  }
  
}

export default App;
