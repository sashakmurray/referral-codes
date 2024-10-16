'use client';
import React from 'react';

export default class SubmissionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    async handleSubmit(event) {
      // alert('A name was submitted: ' + this.state.value);
      event.preventDefault();

      const data = {link: this.state.value};
      console.log(data);
      
      fetch(
        "http://localhost:3000/api", 
        {method: "POST", body: JSON.stringify(data)}
      ).then(function (response) {
        if (response.ok) {
          // Success
          return response.json();
        } else {
          // Error
          throw new Error(response.statusText);
        }
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }