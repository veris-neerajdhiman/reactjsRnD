"use strict";

var React = require('react');
var Router = require('react-router');

var ContactForm = require('./contactForm');

var sampleForm = React.createClass({
    mixins: [
      Router.Navigation
    ],

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

    saveContact: function (event) { //called when click form submit button
        event.preventDefault();
        console.log(this.state.contact) // show submitted data in console

        // TODO : can cal any API and save data

        // redirect user on succesful save
        this.transitionTo('about')

    },

    render: function(){
        return (
            <div>
                <ContactForm
                    contact={this.state.contact}
                    onChange={this.setContactState}
                    onSave={this.saveContact}
                />
            </div>
        );
    }
});

module.exports = sampleForm;