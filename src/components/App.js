import React from 'react';
import Poland from "../svg-map/src/poland-map";
import RadioSVGMap from '../svg-map/src/radio-svg-map';
import Header from './header';
import Footer from './footer';
import LocationShops from './shared/LocationShops';
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
          <div className="t-col-12 o-mapSection">
            <div className="t-col-12-8">
              <RadioSVGMap 
                map={Poland}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="t-col-12-4">
               {(() => {
                switch (this.state.selectedLocation) {
                  case 'podkarpackie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'malopolskie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'slaskie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'opolskie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'dolnoslaskie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'swietokrzyckie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'lubelskie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'lodzkie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'mazowieckie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'wielkopolskie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'lubuskie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'kuj-pom':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'podlaskie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'zach-pom':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'war-maz':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
                  case 'pomorskie':
                    return <LocationShops currentLocation={this.state.selectedLocation}/>
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
