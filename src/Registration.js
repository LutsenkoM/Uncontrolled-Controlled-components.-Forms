import React, { Component } from 'react';

class Registration extends Component {
  constructor (props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('username-',this.state.username);
    console.log('password-', this.state.password);
    localStorage.setItem('username', JSON.stringify(this.state.username) );
  };

  handleChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })

  };

  render () {
    return (
      <div className="home">
        Registration
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Registration;