import React from 'react';
import './App.css';
import axios from 'axios'; 
import User from './User';
import Follower from './Follower';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user : [],
      login: ''
    };
  }

  // fetching user data from Github API
  componentDidMount(){
    axios.get('https://api.github.com/users/sokaeb')
    .then(res => {
      // console.log(res.data); 
      this.setState({
        user: res.data
      }); 
    })
    .catch(err => {
      console.log(err)
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      if(this.state.login === ' '){
        axios
          .get(`https://api.github.com/users/${this.state.user.login}`)
          .then(res => {
            this.setState({
              user: res.data,
              login: 'this.state.login'
            });
          })
          .catch(err => {
            console.log(err)
          });
      };
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.login}`)
      .then(res => {
        this.setState({
          user: res.data,
        });
      })
      .catch(err => {
        console.log(err)
      });
};

  handleChange = evt => {
    this.setState({
      login: evt.target.value
    });
    // console.log(evt.target.value)
};

  render() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <form className="formInput" onSubmit={this.handleSubmit}> */}
          <input 
            className="searchBar"
            type="text"
            placeholder="Search By Username"
            onChange={this.handleChange} 
            value={this.state.login}
          />
        <button className="submitBtn" onClick={this.handleSubmit}>Search User</button>
      {/* </form> */}
               <div className="userDiv">
               <User
                key={this.state.user.id}
                name={this.state.user.name}
                url={this.state.user.html_url}
                avatar_url={this.state.user.avatar_url}
                followers={this.state.user.followers}
                following={this.state.user.following}
                />
                </div>
                <div>
                  <Follower />
                </div>
      </header>
    </div>
  );
  }
}

export default App;
