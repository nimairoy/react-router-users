import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './User.css'

const Users = () => {
  const users = useLoaderData();
//   console.log(users)
    return (
        <div className='container'>
            <h1>The Users Number is: {users.length}</h1>
            <div className='users-contaier'>
                {
                    users.map(user => <User
                        user = {user}
                        key={user.id}                    
                    />)
                }
            </div>
        </div>
    );
};

export default Users;