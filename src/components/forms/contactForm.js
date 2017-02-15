"use strict";

var React = require('react');

var contactForm = React.createClass({
    render: function(){
        return (
           <form>
               <h1>Contact US</h1>
               <label htmlFor="name">Name : </label>
               <input type="text"
                      name="name"
                      className="form-control"
                      placeholder="name"
                      ref="name"
                      onChange={this.props.onChange}
                      value={this.props.name}/>
               <br/>

               <label htmlFor="desc">Description: </label>
               <input type="text"
                      name="desc"
                      className="form-control"
                      placeholder="Description"
                      ref="desc"
                      onChange={this.props.onChange}
                      value={this.props.desc}/>
               <br/>

               <input type="submit" className="btn btn-default" value="contact"/>
           </form>
        );
    }
});

module.exports = contactForm;