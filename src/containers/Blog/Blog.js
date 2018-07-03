import React, { Component } from 'react';
//import axios from 'axios';
//Si uso la instancia pierdo los interceptors que estan configurados globalmente en index.js
//y por lo tanto no loguea los request y response
import axiosInstance from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        post: [], 
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        //axios.get('/posts')
        axiosInstance.get('/posts')
            .then(response => {
                const post = response.data.slice(0,4);
                const updatedPosts = post.map(post => {
                    return  {
                        ...post,
                        author: 'Martin'
                    }
                });
                this.setState({post: updatedPosts});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    postSelectedhandler = (id) => {
        this.setState({selectedPostId:id});
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Algo salio mal!</p>
        if (!this.state.error) {
            post = this.state.post.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.postSelectedhandler(post.id)}/>
            });
        }
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;