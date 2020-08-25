import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';
import './Dashboard.css';
import AddedFriend from '../AddedFriend/AddedFriend';


const Dashboard = () => {
    const [friends, setFriends] = useState(fakeData);
    const [count, setCount] = useState([]);


    const handleAddFriend = (friend) => {
        const newCount = [...count, friend];
        setCount(newCount);
    }

    return (
        <div className="main-content">
            <div className="profile">
                <Profile></Profile>
            </div>
            <div className="addFriend">
                {
                    friends.map(friend => <Friends friend={friend} key={friend.id} handleAddFriend={handleAddFriend}></Friends>)
                }
            </div>
            <div className="cart">
                <AddedFriend count={count}></AddedFriend>
            </div>
        </div>
    );
};

export default Dashboard;