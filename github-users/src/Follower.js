import React from 'react';
import axios from 'axios';

class Follower extends React.Component {
    constructor(){
        super();
        this.state ={
            follower: {}
        };
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/sokaeb/followers')
        .then(res => {
        //   console.log(res.data); // array of objects
        res.data.map((item)=> {
            this.setState({
                follower: item
            });
            return this.state;
        });
        })
        .catch(err => {
          console.log(err)
        });
      };

    render(){
        return(
        <div>
               <div className="follower-container">
                   <img src={this.state.follower.avatar_url} alt="" />
                   <a href={this.state.follower.html_url}>View Profile</a>
               </div>
          </div>
        );
    };
}

export default Follower;