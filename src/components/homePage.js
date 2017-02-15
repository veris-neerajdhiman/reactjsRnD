"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
   render: function () {
       return (
           <div className="jumbotron">
                <h1>My App</h1>
                <p>my react first component</p>
               <Link to="forms">React forms</Link>
           </div>
       );
   }
});

module.exports = Home;