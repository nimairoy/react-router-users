import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const posts = useLoaderData();
    const {title, body} = posts;
    // console.log(posts)

    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div className='post-card'>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;