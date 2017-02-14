"use strict";

var React = require('react');

var Home = React.createClass({
   render: function () {
       return (
           <div className="jumbotron">
                <h1>My App</h1>
                <p>rmy react first component</p>
           </div>
       );
   }
});

module.exports = Home;