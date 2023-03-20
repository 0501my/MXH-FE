import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {findByIdPost} from "../../services/PostService";
import {useDispatch, useSelector} from "react-redux";
import EditPost from "./EditPost";
import Header from "../../component/Header";
import DeletePost from "./DeletePost";
import {findByIdPostComment} from "../../services/CommentService";
import DeleteComment from "../comments/DeleteComment";

const PostDetail = () => {
    let {idPost} = useParams();
    const dispatch = useDispatch()
    const account = useSelector(state => {
        return state.account.currentAccount
    })
    const posts = useSelector(state => {
        console.log(state.posts.posts)
        return state.posts.posts
    });
    console.log(posts)
    console.log(account)
    const currentPost = useSelector(state => {
        return state.currentPost.currentPost
    })
    const comments = useSelector(state => {
        console.log(state.comments.comments,222)
        return state.comments.comments
    })
    console.log(currentPost)
    useEffect(() => {
        dispatch(findByIdPost(idPost))
    }, [])
    useEffect(() => {
        dispatch(findByIdPostComment(idPost))
    }, [])
    return (
        <>
            <Header/>
            <main>
                <EditPost id={idPost}/>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">

                                <div className="card card-body">
                                    <div className="d-flex align-items-center justify-content-between my-3">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-story me-2">
                                                <a href="#!"> <img className="avatar-img rounded-circle"
                                                                   src={currentPost.account.avatar} alt=""/> </a>
                                            </div>
                                            <div>
                                                <div className="nav nav-divider">
                                                    <h6 className="nav-item card-title mb-0"><a
                                                        href="#!">{currentPost.account.name} </a></h6>
                                                    <span className="nav-item small"> 2hr</span>
                                                </div>
                                            </div>
                                        </div>
                                        {currentPost.account.idAccount == localStorage.getItem("isAccount") ? <>
                                        <div className="dropdown">
                                            <a href="#"
                                               className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                               id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="cardFeedAction">
                                                <li className="nav-item">
                                                    <a className="nav-link bg-light py-1 px-2 mb-0" href="#!"
                                                       data-bs-toggle="modal"
                                                       data-bs-target="#feedActionVideo"> <i
                                                        className="bi bi-pencil-fill"></i> Edit </a>
                                                </li>
                                                <li>
                                                    <DeletePost id={idPost}/>
                                                </li>
                                            </ul>
                                        </div>
                                    </> : <> </>}


                                    </div>
                                    <h1 className="h4">{currentPost.content}</h1>
                                    <div>
                                        <img className="card-img rounded" src={currentPost.image}
                                             alt=""/>
                                    </div>
                                    <ul className="nav nav-stack flex-wrap small mb-3">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!"> <i
                                            className="bi bi-hand-thumbs-up-fill pe-1"></i>(56)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!"> <i
                                            className="bi bi-chat-fill pe-1"></i>(12)</a>
                                    </li>
                                </ul>
                                    { comments !== undefined && comments.map((it, index) => (
                                        <>
                                            <ul className="comment-wrap list-unstyled">
                                                <li className="comment-item">

                                                    <div className="d-flex position-relative">
                                                        <div className="avatar avatar-xs">
                                                            <a href="#!"><img className="avatar-img rounded-circle"
                                                                              src={it.account.avatar} alt=""/></a>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"><a href="#!"> {it.account.name} </a>
                                                                    </h6>
                                                                </div>
                                                                <p className="small mb-0">{it.content}  </p>
                                                            </div>
                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <a className="nav-link" > {it.time}<div className="dropdown">
                                                                        <a href="#"
                                                                           className="bi bi-gear fs-6"
                                                                           id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        </a>
                                                                        <ul className="dropdown-menu dropdown-menu-end"
                                                                            aria-labelledby="cardFeedAction">
                                                                            <li className="nav-item">
                                                                                <a className="nav-link bg-light py-1 px-2 mb-0" href=""
                                                                                   data-bs-toggle="modal"
                                                                                   data-bs-target="#feedActionVideo"> <i
                                                                                    className="bi bi-pencil-fill"></i> Edit </a>
                                                                            </li>
                                                                            <li>
                                                                                <DeleteComment id={it.idComment}/>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </>

                                    ))}

                                    <ul className="nav nav-stack flex-wrap small mb-3">
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
export default PostDetail;
