import React from 'react';
import './Profile.css';
import profilePic from './picture/farhad.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMapMarker, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
    return (
        <div className="myProfile">
            <div className="picture">
                <div className="coverPic">
                </div>
                <img src={profilePic} alt="" />
            </div>
            <h2>Farhad Hossain <small className="nickName">(Apathetic)</small></h2>
            <h4>A trivial creation of Allah 💖🙂</h4>
            <br />
            <p><FontAwesomeIcon icon={faGraduationCap} /> Former Student at<strong> Daffodil International University</strong></p>
            <p> <FontAwesomeIcon icon={faHome} />Lives in <strong> Dhaka, Bangladesh</strong></p>
            <p><FontAwesomeIcon icon={faMapMarker} />From <strong>Jessore, Khulna, Bangladesh</strong> </p>
        </div>
    );
};

export default Profile;