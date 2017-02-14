"use strict";

var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>my first react Router</p>
                <ul>
                    <li>React</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;