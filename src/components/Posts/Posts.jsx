import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className='container'>
            <h1> There is the Posts Numbers is {posts.length}</h1>
            <div className='posts-container'>
                {
                    posts.map(post => <Post
                            post = {post}
                            key={post.id}
                        />)
                }
            </div>
        </div>
    );
};

export default Posts;