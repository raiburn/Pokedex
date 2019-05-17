import React, { Component } from 'react';
import axios from 'axios';



class Buscador extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: undefined
       }

 
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      
    }
  
    handleSubmit(event) {
        event.preventDefault();
        axios.get('https://pokeapi.co/api/v2/pokemon/'+this.state.value+'/').then((response) => {
            console.log(response.data)
            this.setState({data: response.data})
        // handle success
        })
    }

    render() {
      return ( 
        <form onSubmit={this.handleSubmit}>
          <label>
            Name or number:
            <textarea type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search"/>
        </form>
      );
    }
  }

  export default Buscador;