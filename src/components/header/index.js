import React from 'react';
import SimpleMenuLink from '../shared/SimpleMenuLink';

class Header extends React.Component {

  render() {
    return (
      <header className="o-header">
        <div className="t-container">
        <div className="t-col-12 m-topNav">
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
          <div className="t-col-12">
            <div className="t-col-12-3">
              <h1>Logo</h1>
            </div>
            <div className="t-col-12-9"></div>
          </div>
        </div>
      </header>
    );
  }
  
}

export default Header;