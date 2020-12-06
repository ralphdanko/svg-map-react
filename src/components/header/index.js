import React from 'react';

class App extends React.Component {

  render() {
    return (
      <header className="o-header">
        <div className="t-container">
        <div className="t-col-12">
          <div className="t-col-12-6">A place for something :)</div>
          <div className="t-col-12-6">
            <ul className="m-horizontalNav m-simpleNav">
              <li className="m-simpleNav__item">
                <a href="#" className="a-link">Pasje</a></li>
              <li className="m-simpleNav__item">
                <a href="#" className="a-link">Biznes</a></li>
              <li className="m-simpleNav__item">
                <a href="#" className="a-link">Pomoc</a></li>
              <li className="m-simpleNav__item">
                <a href="#" className="a-link">Kontakt</a></li>
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