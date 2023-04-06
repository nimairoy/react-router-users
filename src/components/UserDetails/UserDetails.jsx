import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = () => {
    const userDetails = useLoaderData();
    console.log(userDetails)
    const {name, email, phone, website} = userDetails;
    return (
        <div className='details-user'>
            <h2>Every users details is here: </h2>
            <div className="details-card">
                <h4>Name: {name}</h4>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
            </div>
        </div>
    );
};

export default UserDetails;