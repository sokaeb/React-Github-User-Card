import React from 'react';
import axios from 'axios';

class Follower extends React.Component {
    constructor(){
        super();
        this.state ={
            follower: []
        };
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/sokaeb/followers')
        .then(res => {
        // console.log(res.data); // array of objects
            this.setState({
                follower: res.data
            });
        // console.log(this.state.follower)
        })
        .catch(err => {
          console.log(err)
        });
      };


    render(){
        return(
        <div className="followerDiv">
            {this.state.follower.map((item) => (
            <div className="followerContainer" key={item.id}>
            <img src={item.avatar_url} alt="" />
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
            ))}
              
          </div>
        );
    };
}

export default Follower;