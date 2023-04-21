import { useState } from 'react';
import classes from './Post.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { editDone } from '../../api';

const Post = ({title, body, id}) =>{

    const navigation = useNavigate();

    const [isEdit, setIsEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newBody, setNewBody] = useState(body);

    const done = () =>{
        editDone(newTitle, newBody, id)
        setIsEdit(false);
    }

    if(!isEdit){
        return(
            <div className={classes.post}>
                <Link to={`/${id}`}>
                    <h3>{newTitle}</h3>
                    <p>{newBody}</p>
                </Link>
                <div className={classes.buttons}>
                    <button onClick={() => setIsEdit(true)}>Edit</button>
                    <button onClick={() => navigation(`/delete/${id}`)}>Delete</button>
                </div>
            </div>
        );
    }else{
        return(
            <div className={classes.post}>
                <form action="" onSubmit={done}>
                    <label htmlFor="">Title:
                        <input type="text" onChange={
                            (e) => setNewTitle(e.target.value)
                        }/>
                    </label>
                    <br />
                    <label htmlFor="">Body:
                        <input type="text" onChange={
                            (e) => setNewBody(e.target.value)
                        }/>
                    </label>
                    <br />
                    <button type='submit'>Done</button>
                </form>
            </div>
        )
    }
};

export default Post;