import React from 'react';
import SimpleMenuLink from './SimpleMenuLink';

class App extends React.Component {

  render() {
    return (
      <header className="o-header">
        <div className="t-container">
        <div className="t-col-12">
          <div className="t-col-12-6"></div>
          <div className="t-col-12-6">
            <ul className="m-horizontalNav m-simpleNav">
              <SimpleMenuLink
                link="#"
                name="Pasje"
              />
              <SimpleMenuLink
                link="#"
                name="Biznes"
              />
              <SimpleMenuLink
                link="#"
                name="Pomoc"
              />
              <SimpleMenuLink
                link="#"
                name="Kontakt"
              />
            </ul>
          </div>
        </div>
          Head
        </div>
      </header>
    );
  }
  
}

export default App;