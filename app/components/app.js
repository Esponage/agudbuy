import React from 'react';
import { IndexLink } from 'react-router';

var App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

});

export default App;
