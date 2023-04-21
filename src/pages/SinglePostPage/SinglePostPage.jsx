import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../api";
import classes from './SinglePostPage.module.css'

const SinglePostPage = () =>{
    const goback = useNavigate();
    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        API.get(id)
        .then(res => setPost(res.data))
    }, [post]);

    return(
        <>
            {post && (
                <div className={classes.post}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <button onClick={() => goback(-1)}> Back</button>
                </div>
            )}
        </>
    );
}

export default SinglePostPage;