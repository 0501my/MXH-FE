import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {findByIdPost} from "../../services/PostService";
import {useDispatch, useSelector} from "react-redux";
import EditPost from "./EditPost";
import Header from "../../component/Header";
import DeletePost from "./DeletePost";
import {addComment, editComment, findByIdComment, findByIdPostComment} from "../../services/CommentService";
import DeleteComment from "../comments/DeleteComment";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const PostDetail = () => {
    let {idPost} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentPost = useSelector(state => {
        return state.currentPost.currentPost
    })
    const account = useSelector(state => {
        return state.account.currentAccount
    })
    const comments = useSelector(state => {
        return state.comments.comments
    })
    const handleAddComment = (values) => {
        let data = {...values, post: currentPost.idPost}
        dispatch(addComment(data)).then(() => {
            dispatch(findByIdComment(data)).then(()=>{
                navigate('')
            })
        })
    }

    const currentComment = useSelector(state => {
        return state.currentComment.currentComment
    })
    console.log(currentComment,2)
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Xử lý submit form ở đây
        }
    }
    const findByC = async (values) => {
        await dispatch(findByIdComment(values)).then(() => {
        });
    }
    const handleEditComment = async (values) => {
        let data = {...values}
        await dispatch(editComment(data)).then(() => {
            navigate('')
        })
    }
    const validationSchema = Yup.object().shape({
        content: Yup.string()
            .required("Vui lòng nhập comment")

    });

    const [urls, setUrls] = useState([]);
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
                                                        <a className="nav-link  py-1 px-4 mb-0"
                                                           data-bs-toggle="modal"
                                                           data-bs-target="#feedActionVideo"> <i
                                                            className="bi bi-pencil-fill pe-1"></i> Edit </a>
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
                                                    className="bi bi-chat-fill pe-1"></i>{comments.length} Comment</a>
                                            </li>

                                    </ul>

                                    <div className="d-flex mb-3">
                                        <div className="avatar avatar-xs me-2">
                                            <a href="#!"> <img className="avatar-img rounded-circle"
                                                               src={account.avatar} alt=""/> </a>
                                        </div>
                                        <Formik initialValues={{content: ""}}
                                                onSubmit={(values) => {
                                                    values.account = account.idAccount
                                                    handleAddComment(values)
                                                    document.getElementById('add-form1').reset();
                                                    setUrls([])

                                                }
                                                } validationSchema={validationSchema}>
                                            <Form className="w-100" id='add-form1'>
                                                <Field data-autoresize className="form-control pe-4 bg-light" rows="1"
                                                       type={'text'} name={'content'}
                                                       placeholder="Add a comment..." onKeyDown={handleKeyDown}></Field>
                                                <ErrorMessage name={'content'}/>
                                            </Form>
                                        </Formik>
                                    </div>

                                    {comments !== undefined && comments.map((it, index) => (
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
                                                                    <h6 className="mb-1"><a
                                                                        href="#!"> {it.account.name} </a>
                                                                    </h6>
                                                                </div>
                                                                <p className="small mb-0">{it.content}  </p>
                                                            </div>
                                                            <a className="nav-link"> {it.time}</a>
                                                        </div>
                                                        <ul className="nav nav-divider py-2 small">
                                                            <li className="nav-item">
                                                                {it.account.idAccount == localStorage.getItem("isAccount") ? <>
                                                                <div className="dropdown">
                                                                    <a href="#"
                                                                       className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                                                       id="cardFeedAction" data-bs-toggle="dropdown"
                                                                       aria-expanded="false">
                                                                        <i className="bi bi-three-dots"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="cardFeedAction">
                                                                        <li className="nav-item">
                                                                            <a onClick={() => {
                                                                                findByC(it.idComment)
                                                                            }}
                                                                               className="nav-link  py-1 px-4 mb-0"
                                                                               data-bs-toggle="modal"
                                                                               data-bs-target="#modalCreateEvents"><i
                                                                                className="bi bi-pencil-fill text-primary ">
                                                                            </i> Edit
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <DeleteComment id={it.idComment}/>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                </> : <> </>}
                                                            </li>
                                                        </ul>
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
                <div className="modal fade" id="modalCreateEvents" tabIndex="-1" aria-labelledby="modalLabelCreateAlbum"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalLabelCreateAlbum">Edit Comment</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <Formik initialValues={currentComment}
                                    onSubmit={(values) => {
                                        handleEditComment(values).then()
                                    }}
                                    enableReinitialize={true}
                                    validationSchema={validationSchema}>
                                <div className="modal-body">
                                    <Form className="row g-4">
                                        <div className="col-12">
                                            <label className="form-label">Content</label>
                                            <Field type="text" className="form-control" name={'content'}/>
                                            <ErrorMessage name={'content'}/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger-soft me-2"
                                                    data-bs-dismiss="modal"> Cancel
                                            </button>
                                            <button type="submit" className="btn btn-success-soft"
                                                    data-bs-dismiss="modal">Edit
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </Formik>

                        </div>
                    </div>
                </div>


            </main>

        </>

    )
}
export default PostDetail;
