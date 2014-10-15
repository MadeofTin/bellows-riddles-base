/** @jsx React.DOM */

var React = require('react');

var NavBar = require('./NavBar');

require('./Layout.css');

var Layout = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <div>
        <NavBar active={this.props.active} />
        <div className="container">
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Layout;