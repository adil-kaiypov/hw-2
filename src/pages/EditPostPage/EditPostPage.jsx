import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from './EditPostPage.module.css';
import { API, editDone } from "../../api";

const EditPostPage = () =>{
    const navigation = useNavigate();
    
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [oldTitle, setOldTitle] = useState('');
    const [oldBody, setOldBody] = useState('');

    useEffect(() => {
        API.get(id)
        .then(data => {
            setPost(data.data);
            setOldBody(data.data.body);
            setOldTitle(data.data.title);
        });
    }, [id]);

    const done = (e) =>{
        e.preventDefault();
        editDone(post.title, post.body, id);
        navigation('/');
    } ;

    return(
        <div>
            {post && (
            <>
                <div>
                    <h1>Change</h1>
                    <div className={classes.post}>
                        <h2>{oldTitle}</h2>
                        <p>{oldBody}</p>
                    </div>
                </div>
                    <h1>To</h1>
                <div className={classes.post}>
                    <form action="" onSubmit={done}>
                        <label htmlFor="" >Title:
                            <input type="text" onChange={
                                (e) => setPost({...post, title:e.target.value})
                            }/>
                        </label>
                        <br />
                        <label htmlFor="">Body:
                            <input type="text" onChange={
                                (e) => setPost({...post, body:e.target.value})
                            }/>
                        </label>
                        <br />
                        <button onClick={() => navigation(-1)}>Back</button>
                        <button type='submit'>Done</button>
                    </form>
                </div>
            </>
            )}
        </div>
    ) ; 
};

export default EditPostPage;