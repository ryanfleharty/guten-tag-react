import React, {useState, useEffect} from 'react';
import NewPost from './NewPost/NewPost';
import {getPosts, createPost} from './PostService';

function PostsContainer(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{getPosts(setPosts)}, [])
    const postsList = posts.map((post)=>{
        return <p key={post.id}>{post.user.username} says {post.text}</p>
    })
    return(
        <>
            <NewPost createPost={createPost} setPosts={setPosts}></NewPost>
            {postsList}
        </>
    )
}

export default PostsContainer;