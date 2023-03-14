import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getPosts} from "../services/PostService";
import {Form, Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";

const ShowHome = () => {
    const navigate = useNavigate();
    const posts = useSelector(state => {
        return state.posts.posts
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    })
    const handleDelete = async (id) => {
        dispatch(deletePost(id)).then(() => (
            dispatch(getPosts()).then(() => {
                navigate('/home')
            })
        ))
    }


    return (
        <>
            <div>
                Show Home
            </div>
            <div><Link to={`/Home/addPost`}>Add Post</Link></div>
            {posts !== undefined && posts.map(it => (
                <><div className="more">
                    <div className="more-post-optns"><i className="ti-more-alt"></i>
                        <ul>
                            <li><Link to={`posts/${it.idPost}`}><i className="fa fa-pencil-square-o">Edit Post</i></Link></li>
                            <li><i className="fa fa-trash-o"
                                   onClick={() => {
                                       swal({
                                           title: "Are you sure?",
                                           text: "Once deleted, you will not be able to recover this imaginary file!",
                                           icon: "warning",
                                           buttons: true,
                                           dangerMode: true,
                                       })
                                           .then((willDelete) => {
                                               if (willDelete) {
                                                   swal("Poof! Your imaginary file has been deleted!", {
                                                       icon: "success",
                                                   }).then(() => {
                                                       handleDelete(it.idPost)
                                                   });
                                               } else {
                                                   swal("Your imaginary file is safe!")
                                               }
                                           });
                                   }}>Delete Post</i></li>
                        </ul>
                    </div>
                </div>
                    <Link to={'/Home/personalPage'}><p>{it.account.username}</p></Link>
                    <p>{it.content}</p>
                    <img src={it.image} alt="#"/>
                    <p>{it.time}</p>
                    <hr/>


                </>

            ))}
        </>

    )
}
export default ShowHome;
