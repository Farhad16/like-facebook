import React from 'react';
import './Friends.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Friends = (props) => {
    const handleAddFriend = props.handleAddFriend;
    const { name, img, hometown, annual_income } = props.friend

    return (
        <div className="friend">
            <div className="profilePic">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h3>{name}</h3>
                <p>Early Income $<span>{annual_income}</span> million</p>
                <p>From  <span>{hometown}</span></p>
                <button onClick={() => handleAddFriend(props.friend)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
            </div>
        </div>
    );
};

export default Friends;