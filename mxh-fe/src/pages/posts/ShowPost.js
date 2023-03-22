import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getPosts} from "../../services/PostService";
import DeletePost from "./DeletePost";
import {Link} from "react-router-dom";
import EditPost from "./EditPost";

const ShowPost = () => {
    const posts = useSelector(state => {
        return state.posts.posts
    });
    const currentPost = useSelector(state => {
        return state.currentPost.currentPost
    })
    const account = useSelector(state => {
        return state.account.currentAccount
    })
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
                                        <h6 className="nav-item card-title mb-0">
                                            {it.account.idAccount !== account.idAccount ?
                                                <Link
                                                    to={`/Home/timeLine/${it.account.idAccount}`}> {it.account.name} </Link> :
                                                <Link to={`/Home/myTimeLine`}> {it.account.name} </Link>
                                            }
                                        </h6>
                                        <span className="nav-item small"> {it.time}</span>
                                    </div>
                                    {it.status === "Public" &&
                                        <div className="nav nav-divider">
                                            <span className="nav-item small"> <i className="bi bi-globe"></i></span>
                                        </div>}
                                    {it.status === "Friends" &&
                                        <div className="nav nav-divider">
                                                        <span className="nav-item small"> <i
                                                            className="bi bi-people"></i></span>
                                        </div>}
                                    {it.status === "Onlyme" &&
                                        <div className="nav nav-divider">
                                                        <span className="nav-item small"> <i className="bi bi-lock"></i></span>
                                        </div>}
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
                                        <EditPost id={it.idPost}></EditPost>
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
                        <Link to={`/${it.idPost}`}><p>{it.content}</p></Link>
                        {it.image != 1 ? <>
                            <Link to={`/${it.idPost}`}> <img src={it.image} style={{width : "550px", height : "500px"}} alt="#"/> </Link>
                        </> : <></>}

                        <ul className="nav nav-stack py-3 small">
                            <li className="nav-item">
                                <a className="nav-link active" href="#!"> <i
                                    className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a>
                            </li>
                            <li className="nav-item">
                                <Link to={`/${it.idPost}`}><a className="nav-link" href="#!"> <i
                                    className="bi bi-chat-fill pe-1"></i>Comments</a></Link>
                            </li>
                        </ul>
                        <div className="d-flex mb-3">
                            <div className="avatar avatar-xs me-2">
                                <a href="#!"> <img className="avatar-img rounded-circle"
                                                   src={account.avatar} alt=""/> </a>
                            </div>
                            <form className="w-100">
                                        <textarea data-autoresize className="form-control pe-4 bg-light" rows="1"
                                                  placeholder="Add a comment..."></textarea>
                            </form>
                        </div>
                        <ul className="comment-wrap list-unstyled">
                            <li className="comment-item">
                                <div className="d-flex position-relative">

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>))}
        </>)
}
export default ShowPost;
