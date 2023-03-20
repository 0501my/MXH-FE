import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPosts, deletePost, editPost, findByIdAccount, findByIdPost} from "../services/PostService";
import {Field, Form, Formik} from "formik";
import swal from "sweetalert";
import {storage} from "../services/fireBase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

const MyTimeLine = () => {

    const navigate = useNavigate();

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

    const [images, setImages] = useState([]);

    const [urls, setUrls] = useState([]);

    const [progress, setProgress] = useState(0);


    const handleDelete = async (id) => {
        dispatch(deletePost(id))
    }

    const handleEditPost = (values) => {
        let data = {...values}
        dispatch(editPost(data)).then(() => {
            setCheckEditPost(false)
        })
    }

    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };

    const handleUpload = () => {
        const promises = [];
        if (images.length > 0) {
            images.map((image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                promises.push(uploadTask);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                            setUrls(prevState => [...prevState, downloadURLs])
                            console.log("File available at", downloadURLs);
                        });
                    }
                );
            });
        }
        Promise.all(promises)
            .then(() => alert("All images uploaded"))
            .catch((err) => console.log(err));

    }


    const [checkEditPost, setCheckEditPost] = useState(false);
    console.log(checkEditPost)
    const checkId = async (id) => {
        dispatch(findByIdPost(id)).then(() => {
        })

    }

    useEffect(() => {
        dispatch(findByIdAccount(account.idAccount))
    }, [])

    return (
        <>
            <main>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8 vstack gap-4">
                            <div className="card">
                                <div className="h-200px rounded-top"
                                     style={{
                                         backgroundImage: "url('https://marketplace.canva.com/EAEwOMN95cA/1/0/1600w/canva-h%E1%BB%93ng-ch%E1%BA%A5m-tr%C3%B2n-l%C3%A0m-%C4%91%E1%BA%B9p-ch%C4%83m-s%C3%B3c-da-%E1%BA%A3nh-b%C3%ACa-facebook-8I987-LcfSI.jpg')",
                                         backgroundPosition: " center",
                                         backgroundSize: "cover",
                                         backgroundRepeat: " no-repeat"
                                     }}></div>
                                <div className="card-body py-0">
                                    <div className="d-sm-flex align-items-start text-center text-sm-start">
                                        <div>
                                            <div className="avatar avatar-xxl mt-n5 mb-3">
                                                <img className="avatar-img rounded-circle border border-white border-3"
                                                     src={account.avatar} alt=""/>
                                            </div>
                                        </div>
                                        <div className="ms-sm-4 mt-sm-3">
                                            <h1 className="mb-0 h5">{account.name}<i
                                                className="bi bi-patch-check-fill text-success small"></i></h1>
                                            <p>250 connections</p>
                                        </div>
                                        <div className="d-flex mt-3 justify-content-center ms-sm-auto">
                                            <div className="dropdown">
                                                <button className="icon-md btn btn-light" type="button"
                                                        id="profileAction2"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="profileAction2">
                                                    <li><a className="dropdown-item" href="#"> <i
                                                        className="bi bi-lock fa-fw pe-2"></i>Change password</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                                        <li className="list-inline-item"><i className="bi bi-geo-alt me-1"></i> {account.address} </li>
                                    </ul>
                                </div>
                                <div className="card-footer mt-3 pt-2 pb-0">
                                    <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                                        <li className="nav-item"><a className="nav-link active"
                                                                    href="my-profile.html"> Posts </a></li>
                                        <li className="nav-item"><a className="nav-link"
                                                                    href="my-profile-about.html"> About </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card card-body">
                                <div className="d-flex mb-3">
                                    <div className="avatar avatar-xs me-2">
                                        <a href="#"> <img className="avatar-img rounded-circle"
                                                          src={account.avatar} alt=""/> </a>
                                    </div>
                                    <form className="w-100">
                                        <input className="form-control pe-4 border-0"
                                               placeholder="Share your thoughts..."
                                               data-bs-toggle="modal" data-bs-target="#modalCreateFeed"/>
                                    </form>
                                </div>
                                <ul className="nav nav-pills nav-stack small fw-normal">
                                    <li className="nav-item">
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal"
                                           data-bs-target="#feedActionPhoto"> <i
                                            className="bi bi-image-fill text-success pe-2"></i>Photo</a>
                                    </li>
                                </ul>
                            </div>
                            {posts !== undefined && posts.map(it => (
                                <div className="card">
                                    <div className="card-header border-0 pb-0">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar avatar-story me-2">
                                                    <a href="#!"> <img className="avatar-img rounded-circle"
                                                                       src={it.account.avatar} alt=""/> </a>
                                                </div>
                                                <div>
                                                    <div className="nav nav-divider">
                                                        <h6 className="nav-item card-title mb-0"><a
                                                            href="#!"> {it.account.name} </a></h6>
                                                        <span className="nav-item small"> {it.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a href="#"
                                                   className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                                   id="cardFeedAction1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="cardFeedAction1">
                                                    <li><a className="dropdown-item"  onClick={()=>{setCheckEditPost(true)}}><i
                                                        className="bi bi-pencil-fill pe-1" ></i>Edit post</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>{it.content}</p>
                                        <img className="card-img" src={it.image} alt="Post"/>
                                        <ul className="nav nav-stack py-3 small">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#!"> <i
                                                    className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!"> <i
                                                    className="bi bi-chat-fill pe-1"></i>Comments
                                                    (12)</a>
                                            </li>
                                        </ul>
                                        <div className="d-flex mb-3">
                                            <div className="avatar avatar-xs me-2">
                                                <a href="#!"> <img className="avatar-img rounded-circle"
                                                                   src="assets/images/avatar/12.jpg" alt=""/> </a>
                                            </div>
                                            <form className="position-relative w-100">
                                            <textarea className="form-control pe-4 bg-light" rows="1"
                                                      placeholder="Add a comment..."></textarea>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4">
                            <div className="row g-4">
                                <div className="col-md-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header border-0 pb-0">
                                            <h5 className="card-title">About</h5>
                                        </div>
                                        <div className="card-body position-relative pt-0">
                                            <p>Khi tất cả mọi thứ dường như chống lại bạn, hãy nhớ rằng máy bay cất cánh
                                                được nhờ ngược chiều gió.</p>
                                            <ul className="list-unstyled mt-3 mb-0">
                                                <li> Name: <strong> {account.name} </strong></li>
                                                <li> Born: <strong> {account.birthday} </strong></li>
                                                <li> German: <strong> {account.german} </strong></li>
                                                <li> Address: <strong> {account.address} </strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12">
                                    <div className="card">
                                        <div
                                            className="card-header d-sm-flex justify-content-between align-items-center border-0">
                                            <h5 className="card-title">Friends <span
                                                className="badge bg-danger bg-opacity-10 text-danger">230</span></h5>
                                            <a className="btn btn-primary-soft btn-sm" href="#!"> See all friends</a>
                                        </div>
                                        <div className="card-body position-relative pt-0">
                                            <div className="row g-3">
                                                <div className="col-6">
                                                    <div className="card shadow-none text-center h-100">
                                                        <div className="card-body p-2 pb-0">
                                                            <div className="avatar avatar-story avatar-xl">
                                                                <a href="#!"><img className="avatar-img rounded-circle"
                                                                                  src="assets/images/avatar/02.jpg"
                                                                                  alt=""/></a>
                                                            </div>
                                                            <h6 className="card-title mb-1 mt-3"><a href="#!"> Amanda
                                                                Reed </a></h6>
                                                            <p className="mb-0 small lh-sm">16 mutual connections</p>
                                                        </div>
                                                        <div className="card-footer p-2 border-0">
                                                            <button className="btn btn-sm btn-primary"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send message"><i
                                                                className="bi bi-chat-left-text"></i></button>
                                                            <button className="btn btn-sm btn-danger"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Remove friend"><i
                                                                className="bi bi-person-x"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="card shadow-none text-center h-100">
                                                        <div className="card-body p-2 pb-0">
                                                            <div className="avatar avatar-xl">
                                                                <a href="#!"><img className="avatar-img rounded-circle"
                                                                                  src="assets/images/avatar/03.jpg"
                                                                                  alt=""/></a>
                                                            </div>
                                                            <h6 className="card-title mb-1 mt-3"><a href="#!"> Samuel
                                                                Bishop </a></h6>
                                                            <p className="mb-0 small lh-sm">22 mutual connections</p>
                                                        </div>
                                                        <div className="card-footer p-2 border-0">
                                                            <button className="btn btn-sm btn-primary"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send message"><i
                                                                className="bi bi-chat-left-text"></i></button>
                                                            <button className="btn btn-sm btn-danger"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Remove friend"><i
                                                                className="bi bi-person-x"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="card shadow-none text-center h-100">
                                                        <div className="card-body p-2 pb-0">
                                                            <div className="avatar avatar-xl">
                                                                <a href="#!"><img className="avatar-img rounded-circle"
                                                                                  src="assets/images/avatar/04.jpg"
                                                                                  alt=""/></a>
                                                            </div>
                                                            <h6 className="card-title mb-1 mt-3"><a href="#"> Bryan
                                                                Knight </a></h6>
                                                            <p className="mb-0 small lh-sm">1 mutual connection</p>
                                                        </div>
                                                        <div className="card-footer p-2 border-0">
                                                            <button className="btn btn-sm btn-primary"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send message"><i
                                                                className="bi bi-chat-left-text"></i></button>
                                                            <button className="btn btn-sm btn-danger"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Remove friend"><i
                                                                className="bi bi-person-x"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="card shadow-none text-center h-100">
                                                        <div className="card-body p-2 pb-0">
                                                            <div className="avatar avatar-xl">
                                                                <a href="#!"><img className="avatar-img rounded-circle"
                                                                                  src="assets/images/avatar/05.jpg"
                                                                                  alt=""/></a>
                                                            </div>
                                                            <h6 className="card-title mb-1 mt-3"><a href="#!"> Amanda
                                                                Reed </a></h6>
                                                            <p className="mb-0 small lh-sm">15 mutual connections</p>
                                                        </div>
                                                        <div className="card-footer p-2 border-0">
                                                            <button className="btn btn-sm btn-primary"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send message"><i
                                                                className="bi bi-chat-left-text"></i></button>
                                                            <button className="btn btn-sm btn-danger"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Remove friend"><i
                                                                className="bi bi-person-x"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {checkEditPost ?
                <div className="modal fade show" id="feedActionPhoto" tabIndex="-1" aria-labelledby="feedActionPhotoLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>



                            <div className="modal-body">

                                <div className="d-flex mb-3">

                                    <div className="avatar avatar-xs me-2">
                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg"
                                             alt=""/>
                                    </div>

                                    <form className="w-100">
                                        <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows="2"
                                                  placeholder="Share your thoughts..."></textarea>
                                    </form>
                                </div>


                                <div>
                                    <label className="form-label">Upload attachment</label>
                                    <div className="dropzone dropzone-default card shadow-none"
                                         data-dropzone='{"maxFiles":2}'>
                                        <div className="dz-message">
                                            <i className="bi bi-images display-3"></i>
                                            <p>Drag here or click to upload photo.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="modal-footer ">

                                <button type="button" className="btn btn-danger-soft me-2"
                                        data-bs-dismiss="modal">Cancel
                                </button>
                                <button type="button" className="btn btn-success-soft">Post</button>
                            </div>
                        </div>
                    </div>
                </div>:<></>}
        </>
    )
}

export default MyTimeLine;
