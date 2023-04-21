import { useEffect, useState } from "react";
import { API } from "../../api";
import Post from "../../components/Post/Post";
import classes from './AllPostsPage.module.css'
import { Link } from "react-router-dom";

const AllPostsPage = () =>{

    const [posts, setPosts] = useState(null);

    useEffect(() =>{
        API.get()
        .then(data => setPosts(data.data))
    }, [])
    

    return(
        <>
            <p className={classes.posts}>All Posts Page</p>
            <Link to={'/add'}>Create new Post</Link>
            {posts && (<ul>
                {posts.map((post) => <li key={post.id}><Post title={post.title} body={post.body} id={post.id}/></li>)}                
            </ul>
            )}
        </>
    );
};

export default AllPostsPage;