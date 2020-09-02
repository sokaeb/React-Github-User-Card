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
      followers: [],
      login: " "
    };
  }

  // fetching user data from Github API
  componentDidMount(){
    axios
    .get('https://api.github.com/users/sokaeb')
    .then(res => {
      // console.log(res.data); 
      this.setState({
        user: res.data
      }); 
    })
    .catch(err => {
      console.log(err)
    });
    axios
    .get('https://api.github.com/users/sokaeb/followers')
    .then(res => {
      // console.log(res.data)
      this.setState({
        followers: res.data
      })
    })
    .catch(err => {
      console.log(err)
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.user.login !== this.state.user.login) {
  //     console.log(`Update ${this.state.user.login}`);
  //       axios
  //         .get(`https://api.github.com/users/${this.state.user.login}`)
  //         console.log(`update 2 ${this.state.user}`)
  //         // .then(res => {
  //         //   this.setState({
  //         //     user: res.data,
  //         //     login: 'this.state.login'
  //         //   });
  //         // })
  //         // .catch(err => {
  //         //   console.log(err)
  //         // });
  //   };
  // }
 
  fetchData = evt => {
    console.log(`Update ${this.state.login}`)
    evt.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.login}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data,
        });
      })
      .catch(err => {
        console.log(err)
      });
    axios
      .get(`https://api.github.com/users/${this.state.login}/followers`)
      .then(res => {
        // console.log(res.data)
        this.setState({
          followers: res.data
        })
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
        <button className="submitBtn" onClick={this.fetchData}>Search User</button>
      {/* </form> */}
               <div className="userDiv">
               <User
                key={this.state.user.id}
                userData={this.state.user}
                />
                </div>
                <div>
                  <Follower
                    key={this.state.followers.id}
                    followerData={this.state.followers}
                  />
                </div>
      </header>
    </div>
  );
  }
}

export default App;
