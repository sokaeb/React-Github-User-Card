import React from 'react';
import './App.css';
import axios from 'axios'; 
import User from './User';
import Follower from './Follower';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user : {}
    };
  }

  // fetching user data from Github API
  componentDidMount(){
    axios.get('https://api.github.com/users/sokaebe')
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

  // fetching user's followers data
  // componentDidUpdate(prevProps, prevState){
  //   if (prevProps.followers !== this.state.followers){
  //   axios.get('https://api.github.com/users/sokaeb/followers')
  //   .then(res => {
  //     // console.log(res.data); // this is an ARRAY of objects
  //     this.setState({
  //       followers: res.data
  //     }); 
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   });
  // };
  // };

//   componentDidUpdate(prevProps, prevState) {
//   // always use an if statement to avoid infinite loops everytime this method is being //used -- its always checking to see if state changed, if so, do something
//   (prevProps.user !== this.state.users)
// }

  // use an interpolated string to make a custom url
// axios.get(`https://api.github.com/api/${this.state.followers}`)

  render() {
  return (
    <div className="App">
      <header className="App-header">
                <User
                key={this.state.user.id}
                name={this.state.user.name}
                url={this.state.user.url}
                avatar_url={this.state.user.avatar_url}
                followers={this.state.user.followers}
                following={this.state.user.following}
                />
                 <Follower />
      </header>
    </div>
  );
  }
}

export default App;


// After initializing state order as following:
// Component lifecycle methods
// Event handlers
// Render
  // if using arrow functions and just using state, constructor can be taken out
  // state = {
  //   users: [],
  //   followers: []
  // };