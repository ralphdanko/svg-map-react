import React from 'react';
import Poland from "../svg-map/src/poland-map";
import RadioSVGMap from '../svg-map/src/radio-svg-map';
import Header from './header';
import Footer from './footer';
import "../styles/06_utilities/normalize.css";
import "../styles/index.scss";

class App extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			selectedLocation: null
		};

		this.handleOnChange = this.handleOnChange.bind(this);
  }
  
  handleOnChange(selectedNode) {
		this.setState(prevState => {
			return {
				...prevState,
        selectedLocation: selectedNode.attributes.id.value
			};
    });
	}

  render() {
    return (
      <div>
        <Header/>
        <div className="t-container">
        <RadioSVGMap 
          map={Poland}
          onChange={this.handleOnChange}
        />
        Selected location ID: {this.state.selectedLocation}
        </div>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
