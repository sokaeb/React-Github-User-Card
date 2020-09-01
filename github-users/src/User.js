import React from 'react';

const User = (props) => {
    return(
        <div className="user">
            <img src={props.avatar_url} alt="" />
           <p>{props.name}</p> 
           <a href={props.url}>View Profile</a>
            <p>Followers: {props.followers}</p>
           <p>Following: {props.following}</p>
        </div> 
    );
}

export default User;