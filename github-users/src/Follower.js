import React from 'react';


const Follower = (props) => {
        return(
        <div className="followerDiv">
            {props.followerData.map((item) => (
            <div className="followerContainer" key={item.id}>
            <img src={item.avatar_url} alt="" />
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
            ))} 
          </div>
        );
}

export default Follower;