import React, {Component} from 'react';
import NewPost from './NewPost/NewPost';

class PostsContainer extends Component{
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        this.getPosts();
    }
    getPosts = async () => {
        const response = await fetch("http://localhost:8080/posts", {
            credentials: "include"
        })
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        this.setState({
            posts: parsedResponse
        })
    }
    createPost = async (formData) => {
        const response = await fetch("http://localhost:8080/posts", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        this.setState({
            posts: [...this.state.posts, parsedResponse]
        })
    }
    render(){
        const posts = this.state.posts.map((post)=>{
            return <p key={post.id}>{post.user.username} says {post.text}</p>
        })
        return(
            <div>
                <NewPost createPost={this.createPost}></NewPost>
                {posts}
            </div>
        )
    }
}

export default PostsContainer;