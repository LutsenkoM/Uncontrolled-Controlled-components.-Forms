import React, { Component } from 'react';

class Home extends Component {
  constructor (props){
    super(props);

    this.state = {
      username: '',
      country: '',
      select: 'yoyo4',
      textarea: 'textarea text',
      checkbox: false
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.textInput.value)
  };

  handleChange = (e) => {
    let name = e.target.name;
    console.log(name);
    this.setState({
      [name]: e.target.value,
      select: e.target.value,
      textarea: e.target.value,
      checkbox: !this.state.checkbox
    })
  };

  render () {
    console.log(this.state);
    return (
      <div className="home">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text"  placeholder="textInput" ref={(input) => this.textInput = input  }/>
            </div>
            <div>
              <input type="text" name="username" placeholder="State-username" value={this.state.username} onChange={this.handleChange}/>
            </div>
            <div>
              <input type="text" name="country" placeholder="State-country" value={this.state.country} onChange={this.handleChange}/>
            </div>
            <div>
              <select value={this.state.select} onChange={this.handleChange}>
                <option value="yoyo1">yoyo1</option>
                <option value="yoyo2">yoyo2</option>
                <option value="yoyo3">yoyo3</option>
                <option value="yoyo4">yoyo4</option>
              </select>
            </div>
            <div>
              <textarea value={this.state.textarea} onChange={this.handleChange}></textarea>
            </div>
            <div>
              <input type="checkbox" checked={this.state.checkbox} onChange={this.handleChange}/>
            </div>
            <button disabled={!this.state.checkbox}>Submit</button>
          </form>
      </div>
    );
  }
}

export default Home;