import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './CreatePostPage.module.css'
import { create } from "../../api";

const CreatePostPage = () =>{

    const navigate = useNavigate();

    const [post, setPost] = useState();

    const createPost = (e) =>{
        e.preventDefault();
        create(post);
        navigate('/');
    };

    return(
        <>
        <h1>Create new Post</h1>
        <div className={classes.creation}>
            <form action="" onSubmit={createPost}>
                <label htmlFor="">Title:
                    <input type="text" onChange={
                        (e) => setPost({...post, title: e.target.value})
                    } />
                </label>
                <label htmlFor="">Body:
                    <input type="text" onChange={
                        (e) => setPost({...post, body: e.target.value})
                    } />
                </label>
                <button type="submit">Create Post</button>
            </form>
        </div>
        </>
    )
}

export default CreatePostPage;