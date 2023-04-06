import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    // console.log(post)
    const {userId, title, id} = post ;

    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/post/${id}`);
    }
   
    return (
        <div className='card'>
            <h3>{userId}</h3>
            <h2>{title}</h2>
            <Link to={`/post/${id}`} className='details-button'>Details</Link>
           <Link to = {`/post/${id}`}> <button>See details</button></Link>
           <button onClick={handleDetails}>Details</button>
        </div>
    );
};

export default Post;