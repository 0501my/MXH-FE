import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editPost, findByIdPost, getPosts, addPosts} from "../services/PostService";
import {Link, useNavigate} from "react-router-dom";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../services/fireBase";
import ShowPost from "./posts/ShowPost";
import CreatePost from "./posts/CreatePost";

const ShowHome = () => {

    const [images, setImages] = useState([]);

    const account = useSelector(state => {
        return state.account.currentAccount
    })

    const dispatch = useDispatch();

    useEffect(() => {
        handleUpload()
    }, [images])

    const handleUpload = () => {
        const promises = [];
        if (images.length > 0) {
            images.map((image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                promises.push(uploadTask);
                uploadTask.on("state_changed", (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                }, (error) => {
                    console.log(error);
                }, async () => {
                    await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                        setUrls(prevState => [...prevState, downloadURLs])
                        console.log("File available at", downloadURLs);
                    });
                });
            });
        }
        Promise.all(promises)
            .then()
            .catch((err) => console.log(err));

    }

    const [urls, setUrls] = useState([]);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    useEffect((id) => {
        dispatch(findByIdPost(id))
    }, [])

    return (<>

            <main>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <div className="d-flex align-items-center d-lg-none">
                                <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                                    <i className="btn btn-primary fw-bold fa-solid fa-sliders-h"></i>
                                    <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
                                </button>
                            </div>
                            <nav className="navbar navbar-expand-lg mx-0">
                                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasSideNavbar">
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset ms-auto"
                                                data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body d-block px-2 px-lg-0">
                                        <div className="card overflow-hidden">
                                            <div className="card-body pt-0 mt-5">
                                                <div className="text-center">
                                                    <div className="avatar avatar-lg mt-n5 mb-3">
                                                        <a href="#!"><img
                                                            className="avatar-img rounded border border-white border-3"
                                                            src={account.avatar} alt=""/></a>
                                                    </div>
                                                    <h5 className="mb-0"><Link
                                                        to={`/Home/PersonalPage/MyTimeLine/${account.idAccount}`}>{account.name}</Link>
                                                    </h5>
                                                    <small>Web Developer at Webestica</small>
                                                    <p className="mt-3">I'd love to change the world, but they won’t
                                                        give me
                                                        the source code.</p>
                                                    <div className="hstack gap-2 gap-xl-3 justify-content-center">
                                                        <div>
                                                            <h6 className="mb-0">256</h6>
                                                            <small>Post</small>
                                                        </div>
                                                        <div className="vr"></div>
                                                        <div>
                                                            <h6 className="mb-0">2.5K</h6>
                                                            <small>Followers</small>
                                                        </div>
                                                        <div className="vr"></div>
                                                        <div>
                                                            <h6 className="mb-0">365</h6>
                                                            <small>Following</small>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr/>
                                                <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="my-profile.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/home-outline-filled.svg"
                                                            alt=""/><span>Feed </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="my-profile-connections.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/person-outline-filled.svg"
                                                            alt=""/><span>Connections </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="events.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/calendar-outline-filled.svg"
                                                            alt=""/><span>Events </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="notifications.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/notification-outlined-filled.svg"
                                                            alt=""/><span>Notifications </span></a>
                                                    </li>

                                                </ul>

                                            </div>
                                            <div className="card-footer text-center py-2">
                                                <a className="btn btn-link btn-sm" href="my-profile.html">View
                                                    Profile </a>
                                            </div>
                                        </div>
                                        <ul className="nav small mt-4 justify-content-center lh-1">
                                            <li className="nav-item">
                                                <a className="nav-link" href="my-profile-about.html">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="settings.html">Settings</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" target="_blank"
                                                   href="https://support.webestica.com/login">Support </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" target="_blank" href="docs/index.html">Docs </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="help.html">Help</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="privacy-and-terms.html">Privacy &
                                                    terms</a>
                                            </li>
                                        </ul>
                                        <p className="small text-center mt-1">©2022 <a className="text-body"
                                                                                       target="_blank"
                                                                                       href="https://www.webestica.com/"> Webestica </a>
                                        </p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-8 col-lg-6 vstack gap-4">
                            <CreatePost/>
                            <ShowPost/>
                            <a href="#!" role="button" className="btn btn-loader btn-primary-soft"
                               data-bs-toggle="button"
                               aria-pressed="true">
                                <span className="load-text"> Load more </span>
                                <div className="load-icon">
                                    <div className="spinner-grow spinner-grow-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3">
                            <div className="row g-4">

                                <div className="col-sm-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header pb-0 border-0">
                                            <h5 className="card-title mb-0">Who to follow</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="hstack gap-2 mb-3">
                                                <div className="avatar">
                                                    <a href="#"> <img className="avatar-img rounded-circle"
                                                                      src="assets/images/avatar/01.jpg" alt=""/> </a>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Lori Ferguson </a>
                                                    <p className="mb-0 small text-truncate">Web Developer at
                                                        Webestica</p>
                                                </div>
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                                                   href="#"><i
                                                    className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            <div className="d-grid mt-3">
                                                <a className="btn btn-sm btn-primary-soft" href="#!">View more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header pb-0 border-0">
                                            <h5 className="card-title mb-0">Today’s news</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <h6 className="mb-0"><a href="blog-details.html">Ten questions you
                                                    should
                                                    answer truthfully</a></h6>
                                                <small>2hr</small>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-0"><a href="blog-details.html">Five unbelievable facts
                                                    about money</a></h6>
                                                <small>3hr</small>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-0"><a href="blog-details.html">Best Pinterest Boards
                                                    for
                                                    learning about business</a></h6>
                                                <small>4hr</small>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-0"><a href="blog-details.html">Skills that you can
                                                    learn
                                                    from business</a></h6>
                                                <small>6hr</small>
                                            </div>
                                            <a href="#!" role="button"
                                               className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                                               data-bs-toggle="button" aria-pressed="true">
                                                <div className="spinner-dots me-2">
                                                    <span className="spinner-dot"></span>
                                                    <span className="spinner-dot"></span>
                                                    <span className="spinner-dot"></span>
                                                </div>
                                                View all latest news
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
export default ShowHome;
