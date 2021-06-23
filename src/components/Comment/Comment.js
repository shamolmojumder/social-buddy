import React from 'react';

const Comment = (props) => {
    const {name,email,body}=props.comment;
    return (
        <div>
            <strong> {name} </strong>
            <p>emai:{email}: {body} </p>

        </div>
    );
};

export default Comment;