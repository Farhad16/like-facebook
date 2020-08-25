import React from 'react';
import './AddedFriend.css'

const AddedFriend = (props) => {
    const count = props.count;

    const totalIncome = count.reduce((sum, friend) => sum + friend.annual_income, 0)
    return (
        <div className="friendReq">
            <div className="add">
                <h3>Friend Added {count.length}</h3>
                <h3>Income: ${totalIncome} million</h3>
            </div>
            <div>
                {
                    count.map(img => <div className="friendList">
                        <div className="display">
                            <img src={img.img} alt="" />
                            <p>Request Sent</p>
                        </div>
                        <button className="delete">Cancel request</button>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AddedFriend;