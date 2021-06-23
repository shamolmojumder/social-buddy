import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
const {id}= useParams();
const[post,setPost]= useState({});
const [comments,setComments]=useState([])
console.log(comments);
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(data=>setPost(data))
    // comments load from json placeholder
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res=>res.json())
    .then(data=>setComments(data))
},[id])
    return (
        <div>
            <h1>thyis is Detail of {id}</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>All comment {comments.length} </p>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;