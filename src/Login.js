import React, { Component } from 'react'
import fire from './config/fire';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    
    this.state = {
      email:'',
      password:""
    }
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{

    }).catch((error) => {
      console.log(error);
    });
  }

  handleChangeed(e) {
    this.setState({[e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="Login">
      <form>
       <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input value={this.state.email} type="email" name="email" onChange={this.hsandleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input value={this.state.password} type="password" name="password" onChange={this.handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
       </div>
       <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
       </div>
       <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
       <button type="signup" onClick={this.signup} style={{marginLeft:'25px'}} className="btn btn-success">Signup</button>
      </form>
    </div>
  );
}
}
