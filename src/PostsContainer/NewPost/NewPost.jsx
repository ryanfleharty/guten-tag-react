import React, {useState} from 'react';

const NewPost = ({createPost, setPosts}) => {
    const [text, setText] = useState("");

    return <form onSubmit={(e)=>{
        e.preventDefault();
        createPost({text}, setPosts);
    }}>
        Text: <input type="text" onChange={e => setText(e.target.value)}/>
        <input type="submit" value="POST MY THOUGHTS"/>
    </form>
}

export default NewPost;