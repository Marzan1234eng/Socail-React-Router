import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import Comments from "../Comments/Comments";

const PostDetail = () => {
    let { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(data => setPost(data))
        console.log(post);
    },[])
    return (
        <div>
            {
                post.map(pd=> <Comments comment={pd}>

                </Comments>)
            }
        </div>
    );
};

export default PostDetail;