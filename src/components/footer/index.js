import React from 'react';
import SimpleMenuLink from '../shared/SimpleMenuLink';

class Footer extends React.Component {

  render() {
    return (
      <footer className="o-footer">
        <div className="t-container">
          <div className="t-col-12">
            <div className="t-col-12-3">
              <h3>Poznaj nas</h3>
              <ul className="m-verticalNav m-columnsNav">
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Pasje"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Biznes"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Pomoc"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Kontakt"
                />
              </ul>
            </div>
            <div className="t-col-12-3">
              <h3>Nasze produkty</h3>
              <ul className="m-verticalNav m-columnsNav">
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Ksiązki"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Plyty Winylowe"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Gry Planszowe"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Zabawki"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Artykuły papiernicze"
                />
              </ul>
            </div>
            <div className="t-col-12-3">
              <h3>Twoje konto</h3>
              <ul className="m-verticalNav m-columnsNav">
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Zamówienia"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Lista ulubionych"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Ustawienia"
                />
              </ul>
            </div>
            <div className="t-col-12-3">
              <h3>Wazne informacje</h3>
              <ul className="m-verticalNav m-columnsNav">
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Polityka cookies"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Regulamin sklepu"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Cennik dostaw"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Regulamin dostaw"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Punkty odbioru"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="Formy płatności"
                />
                <SimpleMenuLink
                  isVertical="true"
                  link="#"
                  name="lista sklepów"
                />
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
}

export default Footer;