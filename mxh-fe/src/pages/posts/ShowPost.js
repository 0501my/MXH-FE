import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findByIdPost, getPosts} from "../../services/PostService";
import DeletePost from "./DeletePost";
import {Link} from "react-router-dom";
import EditPost from "./EditPost";
import CreatePost from "./CreatePost";
import {current} from "@reduxjs/toolkit";

const ShowPost = () => {
    const posts = useSelector(state => {
        return state.posts.posts
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    return (
        <>
        {posts !== undefined && posts.map((it, index) => (<>
            <div className="card">
                <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="avatar avatar-story me-2">
                                <img className="avatar-img rounded-circle" src={it.account.avatar}
                                     alt=""/>
                            </div>
                            <div>
                                <div className="nav nav-divider">
                                    <h6 className="nav-item card-title mb-0"><Link
                                        to={`/Home/PersonalPage/MyTimeLine/${it.account.idAccount}`}> {it.account.name} </Link>
                                    </h6>
                                    <span className="nav-item small"> 2hr</span>
                                </div>
                            </div>
                        </div>
                        {it.account.idAccount == localStorage.getItem('isAccount') ? <>
                            <div className="dropdown">
                                <a
                                   className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                   id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-three-dots"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardFeedAction">
                                    <EditPost id={it.idPost} ></EditPost>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <DeletePost id={it.idPost}></DeletePost>
                                </ul>

                            </div>
                        </> : <></>}
                    </div>
                </div>
                <div className="card-body">
                    <Link to={`/${it.idPost}`}> <p>{it.content}</p> </Link>
                    {it.image != 1 ? <>
                       <Link to={`/${it.idPost}`}> <img src={it.image}  alt="#"/> </Link>
            </> : <></>}

                    <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                            <a className="nav-link active" href="#!"> <i
                                className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments
                                (12)</a>
                        </li>
                        <li className="nav-item dropdown ms-sm-auto">
                            <a className="nav-link mb-0" href="#" id="cardShareAction"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardShareAction">
                                <li><a className="dropdown-item" href="#"> <i
                                    className="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a>
                                </li>
                                <li><a className="dropdown-item" href="#"> <i
                                    className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
                                <li><a className="dropdown-item" href="#"> <i
                                    className="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
                                <li><a className="dropdown-item" href="#"> <i
                                    className="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#"> <i
                                    className="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex mb-3">
                        <div className="avatar avatar-xs me-2">
                            <a href="#!"> <img className="avatar-img rounded-circle"
                                               src="assets/images/avatar/12.jpg" alt=""/> </a>
                        </div>
                        <form className="w-100">
                                        <textarea data-autoresize className="form-control pe-4 bg-light" rows="1"
                                                  placeholder="Add a comment..."></textarea>
                        </form>
                    </div>
                    <ul className="comment-wrap list-unstyled">
                        <li className="comment-item">
                            <div className="d-flex position-relative">
                                <div className="avatar avatar-xs">
                                    <a href="#!"><img className="avatar-img rounded-circle"
                                                      src="assets/images/avatar/05.jpg" alt=""/></a>
                                </div>
                                <div className="ms-2">
                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-1"><a href="#!"> Frances Guerrero </a></h6>
                                            <small className="ms-2">5hr</small>
                                        </div>
                                        <p className="small mb-0">Removed demands expense account in outward
                                            tedious do. Particular way thoroughly unaffected projection.</p>
                                    </div>
                                    <ul className="nav nav-divider py-2 small">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#!"> Like (3)</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#!"> Reply</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#!"> View 5 replies</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="comment-item-nested list-unstyled">
                                <li className="comment-item">
                                    <div className="d-flex">
                                        <div className="avatar avatar-xs">
                                            <a href="#!"><img className="avatar-img rounded-circle"
                                                              src="assets/images/avatar/06.jpg" alt=""/></a>
                                        </div>
                                        <div className="ms-2">
                                            <div className="bg-light p-3 rounded">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-1"><a href="#!"> Lori Stevens </a>
                                                    </h6>
                                                    <small className="ms-2">2hr</small>
                                                </div>
                                                <p className="small mb-0">See resolved goodness felicity shy
                                                    civility domestic had but Drawings offended yet answered
                                                    Jennings perceive.</p>
                                            </div>
                                            <ul className="nav nav-divider py-2 small">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#!"> Like (5)</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#!"> Reply</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="comment-item">
                                    <div className="d-flex">
                                        <div className="avatar avatar-story avatar-xs">
                                            <a href="#!"><img className="avatar-img rounded-circle"
                                                              src="assets/images/avatar/07.jpg" alt=""/></a>
                                        </div>
                                        <div className="ms-2">
                                            <div className="bg-light p-3 rounded">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-1"><a href="#!"> Billy Vasquez </a>
                                                    </h6>
                                                    <small className="ms-2">15min</small>
                                                </div>
                                                <p className="small mb-0">Wishing calling is warrant settled
                                                    was lucky.</p>
                                            </div>
                                            <ul className="nav nav-divider py-2 small">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#!"> Like</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#!"> Reply</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a href="#!" role="button"
                               className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
                               data-bs-toggle="button" aria-pressed="true">
                                <div className="spinner-dots me-2">
                                    <span className="spinner-dot"></span>
                                    <span className="spinner-dot"></span>
                                    <span className="spinner-dot"></span>
                                </div>
                                Load more replies
                            </a>
                        </li>
                        <li className="comment-item">
                            <div className="d-flex">
                                <div className="avatar avatar-xs">
                                    <a href="#!"><img className="avatar-img rounded-circle"
                                                      src="assets/images/avatar/05.jpg" alt=""/></a>
                                </div>
                                <div className="ms-2">
                                    <div className="bg-light p-3 rounded">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-1"><a href="#!"> Frances Guerrero </a></h6>
                                            <small className="ms-2">4min</small>
                                        </div>
                                        <p className="small mb-0">Removed demands expense account in outward
                                            tedious do. Particular way thoroughly unaffected projection.</p>
                                    </div>
                                    <ul className="nav nav-divider pt-2 small">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#!"> Like (1)</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#!"> Reply</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#!"> View 6 replies</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card-footer border-0 pt-0">
                    <a href="#!" role="button"
                       className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                       data-bs-toggle="button" aria-pressed="true">
                        <div className="spinner-dots me-2">
                            <span className="spinner-dot"></span>
                            <span className="spinner-dot"></span>
                            <span className="spinner-dot"></span>
                        </div>
                        Load more comments
                    </a>
                </div>
            </div>
        </>))}
    </>)
}
export default ShowPost;
