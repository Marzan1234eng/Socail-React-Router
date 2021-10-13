import React from 'react';

const Comments = (props) => {
    const {id, name, email, body} = props.comment;
    return (
        <div>
            <h2>User Id: {id}</h2>
            <h3>{name} {email}</h3>
            <p>Comments: {body}</p>
        </div>
    );
};

export default Comments;