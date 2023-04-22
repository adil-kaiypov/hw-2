import classes from './Post.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({title, body, id}) =>{

    const navigation = useNavigate();

        return(
            <div className={classes.post}>
                <Link to={`/${id}`}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </Link>
                <div className={classes.buttons}>
                    <button onClick={() => navigation(`/edit/${id}`)}>Edit</button>
                    <button onClick={() => navigation(`/delete/${id}`)}>Delete</button>
                </div>
            </div>
        );            
    };


export default Post;