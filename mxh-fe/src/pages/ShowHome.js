import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../services/PostService";
import {Link} from "react-router-dom";
import Header from "../component/Header";


const ShowHome = () => {

    const posts = useSelector(state => {
        return state.posts.posts
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    })


    return (
        <>

            <div>
                Show Home
            </div>
            <div><Link to={`/Home/addPost`}>Add Post</Link></div>
            {posts !== undefined && posts.map(it => (
                <>
                    <Link to={'/Home/personalPage'}><p>{it.account.username}</p></Link>
                    <p>{it.content}</p>
                    <img src={it.image} alt="#"/>
                    <p>{it.time}</p>
                    <hr/>
                </>
            ))}

            <>
            </>
        </>

    )
}
export default ShowHome;
