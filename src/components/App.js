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
    this.handleLocationBlur = this.handleLocationBlur.bind(this);
  }

  handleLocationBlur() {
		this.setState({ selectedLocation: null });
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
          <div className="t-col-12 o-mapSection">
            <div className="t-col-12-7">
              <RadioSVGMap 
                map={Poland}
                onChange={this.handleOnChange}
                onLocationBlur={this.handleLocationBlur}
              />
            </div>
            <div className="t-col-12-5">
              Selected location ID: {this.state.selectedLocation}
              {(() => {
                switch (this.state.selectedLocation) {
                  case 'dolnoslaskie':
                    return 'karuzela dolnoslaska';
                  case 'slaskie':
                    return 'karuzela slaska';
                  case 'opolskie':
                    return 'karuzela opolska';
                  default:
                    return null;
                }
              })()}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
