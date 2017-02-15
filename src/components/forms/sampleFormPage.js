"use strict";

var React = require('react');
var ContactForm = require('./contactForm');

var sampleForm = React.createClass({
    getInitialState: function () {
        return {
            contact : {id: "", name: "", desc: ""}
        };
    },

    setContactState: function (event) { // called for every key press
      var field = event.target.name;
      var value = event.target.value;
      this.state.contact[field] = value;
      return this.setState({contact: this.state.contact});
    },

    render: function(){
        return (
            <div>
                <ContactForm
                    contact={this.state.contact}
                    onChange={this.setContactState}
                />
            </div>
        );
    }
});

module.exports = sampleForm;