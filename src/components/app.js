// "use strict";

var React = require('react');
var Header = require('./common/header');
var Routehandler = require('react-router').RouteHandler;

$ = jQuery = require('jquery');

var App = React.createClass({
   render: function(){
       return (
           <div>
               <Header />
               <Routehandler/>
           </div>
       )
   }
});

module.exports = App;