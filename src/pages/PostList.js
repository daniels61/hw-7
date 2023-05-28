import React from 'react';
import axios from 'axios';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      posts: [],
      resp: null
    };
  }

  getAllPosts = () => {
    const url = '/posts';
    axios.get(url)
      .then((res) => {
        this.setState({
          posts: res.data,
          resp: null
        });
      })

  }

  addPost = () => {
    const { title, body } = this.state;
    const url = '/posts';
    const data = {
      title: title,
      body: body
    };
    axios.post(url, data)
      .then((res) => {
        this.setState({
         data: [],
          resp: 'Success: Post added successfully.'
        });
        this.getAllPosts();
      })
      .catch((err) => {
        this.setState({
          resp: 'Error: Failed to add post.'
        });
      });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { title, body, posts, resp } = this.state;
    return (
      <div>
        <button onClick={this.getAllPosts}>Get All Posts</button>
        <br/><br/><br/>

        <input type="text" name="title" value={title} onChange={this.handleInputChange} placeholder="Post Title" />
        <br/>
        <input type="text" name="body" value={body} onChange={this.handleInputChange} placeholder="Post Body" />
        <br/>
        <button onClick={this.addPost}>Add Post</button>

        <div>{resp ? resp : null}</div>

        <div>
          {posts.map((post) => (
            <div key={post.id}>
              ID: {post.id}, Title: {post.title}, Body: {post.body}
            </div>
          ))}
        </div>
      </div>
    );
  }
}