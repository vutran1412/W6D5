import React from 'react';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 }
    this.handleClick.bind(this);
    
  }

  handleClick(index) {
    this.setState({ index: index });
  }

  render () {
    let selectedTab = this.props.tabs[this.state.index]
    return (
      <>
      <ul>
        {this.props.tabs.map( (p, i ) => {
          return (
            <li key={i} id={i}>
              <h1 onClick={() => this.handleClick(i)}>{ p.title }</h1>
            </li>)
        })}
        
      </ul>
      <article>{ selectedTab.content }</article>
      </>
    );
  }

}