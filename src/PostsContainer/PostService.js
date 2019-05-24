let posts = [];
const getPosts = async (setPosts) => {
    const response = await fetch("http://localhost:8080/posts", {
        credentials: "include"
    })
    const parsedResponse = await response.json();
    posts = parsedResponse;
    setPosts(parsedResponse)
}
const createPost = async (formData, setPosts) => {
    const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const parsedResponse = await response.json();
    setPosts([...posts, parsedResponse])
    posts.push(parsedResponse)
}
module.exports = {getPosts, createPost};