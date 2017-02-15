"use strict";

var React = require('react');
var Input = require('../common/textInput');

var contactForm = React.createClass({
    render: function(){
        return (
           <form>
               <h1>Contact US</h1>
               <Input
                   name="name"
                   label="Name"
                   value={this.props.contact.name}
                   onChange={this.props.onChange}
               />

               {/*<Input*/}
                   {/*name="desc"*/}
                   {/*label="Description"*/}
                   {/*value={this.props.contact.desc}*/}
                   {/*onChange={this.props.onChange}*/}
               {/*/>*/}

               <input type="submit" className="btn btn-default" value="Contact"/>
           </form>
        );
    }
});

module.exports = contactForm;