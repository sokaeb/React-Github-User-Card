import React from 'react';

const User = (props) => {
    return(
        <div className="user">
            <img className="userImg" src={props.avatar_url} alt="" />
           <p>{props.name}</p> 
           <div className="userDetails">
           <a className="userProfile" href={props.url} target="_blank" rel="noopener noreferrer">View Profile</a>
            <p>Followers: {props.followers}</p>
           <p>Following: {props.following}</p>
           </div>
        </div> 
    );
}

export default User;