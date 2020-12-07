import React from 'react';

class SimpleMenuLink extends React.Component {

  render() {
    return (
      <li className={this.props.isVertical ? 'm-columnsNav__item' : 'm-simpleNav__item'}>
        <a href={this.props.link} className="a-link">{this.props.name}</a>
      </li>

    );
  }
  
}

export default SimpleMenuLink;