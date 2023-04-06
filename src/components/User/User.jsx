import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    // console.log(user)
    const {name, id, email, website, phone} = user;
    return (
        <div className='card'>
            <h3>Name: {name}</h3>
            <p>Visit Our Website: {website}</p>
            <p>Phone: {phone}</p>
            <Link className='details-button' to={`/user/${id}`} >See Details</Link>
        </div>
    );
};

export default User;