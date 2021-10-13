import React from 'react';
import {Link} from "react-router-dom";

const Post = (props) => {
    const {useId, title, body,id} = props.post;
    return (
        <div style={{
            border:"1px solid pink"
    }}>
            <h3>UserId: {useId}</h3>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}><button>View Post</button></Link>

        </div>
    );
};

export default Post;