"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');

var ContactForm = require('./contactForm');

var sampleForm = React.createClass({
    mixins: [
      Router.Navigation
    ],

    getInitialState: function () {
        return {
            contact : {id: "", name: "", desc: ""},
            errors : {}
        };
    },

    setContactState: function (event) { // called for every key press
      var field = event.target.name;
      var value = event.target.value;
      this.state.contact[field] = value;
      return this.setState({contact: this.state.contact});
    },

    contactFormIsValid: function () {
      var formIsValid = true;
      this.state.errors = {};

      if (this.state.contact.name.length < 3){
          this.state.errors.name = 'name must be at least 3 characters';
          formIsValid = false;
      }

      this.setState({errors: this.state.errors});
      return formIsValid;
    },

    saveContact: function (event) { //called when click form submit button
        event.preventDefault();

        if (!this.contactFormIsValid()){
            return;
        }

        console.log(this.state.contact) // show submitted data in console
        toastr.success('Data succesfully submitted');

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
                    errors={this.state.errors}
                />
            </div>
        );
    }
});

module.exports = sampleForm;