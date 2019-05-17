import React, { Component } from 'react';
import axios from 'axios';


class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
     }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleButtonPlus = this.handleButtonPlus.bind(this);
     this.handleButtonLess = this.handleButtonLess.bind(this);
  }
  handleButtonLess(event) {
    event.preventDefault();
    axios.get('https://pokeapi.co/api/v2/pokemon/'+(this.state.data.id-1)+'/').then((response) => {
        this.setState({data: response.data})

    })
    .catch((error) => {
      // handle error
      alert("Not found");
    });
  }

  handleButtonPlus(event) {
    event.preventDefault();
    axios.get('https://pokeapi.co/api/v2/pokemon/'+(this.state.data.id+1)+'/').then((response) => {
        this.setState({data: response.data})
    })
    .catch((error) => {
      // handle error
      alert("Not found");
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get('https://pokeapi.co/api/v2/pokemon/'+this.state.value+'/').then((response) => {
        console.log(response.data)
        this.setState({data: response.data})
    // handle success
    })
    .catch((error) => {
      // handle error
      alert("Not found");
    });
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
    
  }
  
  // https://pokeapi.co/api/v2/pokemon/squirtle/

  
  componentWillMount() {
    var nombre = '1'
    axios.get('https://pokeapi.co/api/v2/pokemon/'+nombre).then((response) => {
      // handle success
      
      this.setState({data: response.data})
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  }
 
  render() {
    
    if(!this.state.data) {
      return <p>Loading</p> 
    }
    
    return (
      <div className="pokename">  
        <form onSubmit={this.handleSubmit}>
            <label>
              Name or number:
              <textarea id="input1" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Search"/>
          </form>
          <button value={this.state.value} onClick={this.handleButtonPlus}>+</button>
          <button value={this.state.value} onClick={this.handleButtonLess}>-</button> 
        <p>
          {this.state.data.name} #{this.state.data.id}
          
          {this.state.data.type}

        </p>
        <img src={this.state.data.sprites.front_default} name="first" alt="Smiley face" height="84" width="84"></img>
      </div>
    );
  }
}


export default Pokedex;