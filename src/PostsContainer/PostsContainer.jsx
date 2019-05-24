import React, {Component} from 'react';

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
    render(){
        return(
            <div>
                {JSON.stringify(this.state.posts)}
            </div>
        )
    }
}

export default PostsContainer;