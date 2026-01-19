import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../features/posts/postSlice';

const Post = () => {
    const { post: posts, loading, error }  = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost());
    }, [dispatch]);

    let content;
    if(loading) {
        content = <h1>Loading Posts</h1>
    }
    if(!loading && error) {
        content = <h1>{error}</h1>
    }
    if(!loading && !error && posts.length === 0) {
        content = <h1>No posts founds!</h1>
    }
    if(!loading && !error && posts.length > 0) {
        content = <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Post;