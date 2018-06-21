import React, { Component } from 'react';

class Login extends Component {
  constructor (props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }

  }

  componentWillMount() {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('username-',this.state.username);
    // console.log('password-', this.state.password);
    let username = JSON.parse(localStorage.getItem("username" ));
    console.log(username, this.state.username)
    if (username === this.state.username ) {
      alert('User logined successfuly')
    } else {
      alert('Wrong username or password')
    }
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
        Login
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

export default Login;