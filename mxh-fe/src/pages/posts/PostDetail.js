import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {findByIdPost} from "../../services/PostService";
import {useDispatch, useSelector} from "react-redux";
import EditPost from "./EditPost";
import Header from "../../component/Header";
import DeletePost from "./DeletePost";

const PostDetail = () => {
    let {idPost} = useParams();
    const dispatch = useDispatch()
    const currentPost = useSelector(state => {
        return state.currentPost.currentPost
    })
    useEffect(() => {
        dispatch(findByIdPost(idPost))
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
                                                        <a className="nav-link bg-light py-1 px-4 mb-0" href="#!"
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
                                        <li className="nav-item dropdown ms-sm-auto">
                                            <a className="nav-link mb-0" href="#" id="cardShareAction"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>(3)
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="cardShareAction">
                                                <li><a className="dropdown-item" href="#"> <i
                                                    className="bi bi-envelope fa-fw pe-2"></i>Send via Direct
                                                    Message</a></li>
                                                <li><a className="dropdown-item" href="#"> <i
                                                    className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a>
                                                </li>
                                                <li><a className="dropdown-item" href="#"> <i
                                                    className="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i
                                                    className="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li><a className="dropdown-item" href="#"> <i
                                                    className="bi bi-pencil-square fa-fw pe-2"></i>Share to News
                                                    Feed</a></li>
                                            </ul>
                                        </li>
                                    </ul>
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
                                                            <h6 className="mb-1"><a href="#!"> Frances Guerrero </a>
                                                            </h6>
                                                            <small className="ms-2">5hr</small>
                                                        </div>
                                                        <p className="small mb-0">Removed demands expense account in
                                                            outward tedious do. Particular way thoroughly unaffected
                                                            projection.</p>
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
                                                                              src="assets/images/avatar/06.jpg"
                                                                              alt=""/></a>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"><a href="#!"> Lori
                                                                        Stevens </a></h6>
                                                                    <small className="ms-2">2hr</small>
                                                                </div>
                                                                <p className="small mb-0">See resolved goodness
                                                                    felicity shy civility domestic had but Drawings
                                                                    offended yet answered Jennings perceive.</p>
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
                                                                              src="assets/images/avatar/07.jpg"
                                                                              alt=""/></a>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"><a href="#!"> Billy
                                                                        Vasquez </a></h6>
                                                                    <small className="ms-2">15min</small>
                                                                </div>
                                                                <p className="small mb-0">Wishing calling is warrant
                                                                    settled was lucky.</p>
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
                                                            <h6 className="mb-1"><a href="#!"> Frances Guerrero </a>
                                                            </h6>
                                                            <small className="ms-2">4min</small>
                                                        </div>
                                                        <p className="small mb-0">Removed demands expense account in
                                                            outward tedious do. Particular way thoroughly unaffected
                                                            projection.</p>
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
                                    <div className="card-footer border-0 pb-0">
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
                            </div>
                        </div>
                    </div>
                </div>
                \

            </main>
        </>

    )
}
export default PostDetail;
