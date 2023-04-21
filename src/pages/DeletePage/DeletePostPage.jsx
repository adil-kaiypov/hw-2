import { useNavigate, useParams } from "react-router-dom";
import { API, del } from "../../api";
import { useEffect, useState } from "react";
import classes from './DeletePostPage.module.css'

const DeletePostPage = () =>{
    const navigation = useNavigate();

    const {id} = useParams();
    const [post, setPost] = useState({});

    const gobackdel = () =>{
        del(id);
        navigation(-1);
    }

    useEffect(() => {
        API.get(id)
        .then(data => setPost(data.data));
    }, [post]);

    return(
        <>
        {post && (
            <div>
                <h1>Are you sure you want to delete the following post?</h1>

                <div className={classes.post}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>

                <div className={classes.choice}>
                    <button onClick={() => navigation(-1)}>No</button>
                    <button onClick={gobackdel}>Yes</button>
                </div>
            </div>
        )}
        </>
    );
};

export default DeletePostPage;