import React from 'react';

const User = (props) => {
    return(
        <div className="user">
            <img className="userImg" src={props.userData.avatar_url} alt="" />
           <p>{props.userData.name}</p> 
           <div className="userDetails">
           <a className="userProfile" href={props.userData.url} target="_blank" rel="noopener noreferrer">View Profile</a>
            <p>Followers: {props.userData.followers}</p>
           <p>Following: {props.userData.following}</p>
           </div>
        </div> 
    );
}

export default User;