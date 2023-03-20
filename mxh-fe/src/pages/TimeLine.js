import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPosts, deletePost, editPost, findByIdAccount, findByIdPost} from "../services/PostService";
import {Field, Form, Formik} from "formik";
import swal from "sweetalert";
import {storage} from "../services/fireBase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

const TimeLine = () => {

    const navigate = useNavigate();

    const posts = useSelector(state => {
        return state.posts.posts
    });

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
        dispatch(editPost(values)).then(() => {
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

    useEffect(() => {
        dispatch(findByIdAccount(account.idAccount))
    }, [])

    return (
        <>
            <header class="navbar-light fixed-top header-static bg-mode">

                <nav class="navbar navbar-expand-lg">
                    <div class="container">

                        <a class="navbar-brand" href="index-2.html">
                            <img class="light-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo"/>
                            <img class="dark-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo"/>
                        </a>

                        <button class="navbar-toggler ms-auto icon-md btn btn-light p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-animation">
          <span></span>
          <span></span>
          <span></span>
        </span>
                        </button>


                        <div class="collapse navbar-collapse" id="navbarCollapse">


                            <div class="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
                                <div class="nav-item w-100">
                                    <form class="rounded position-relative">
                                        <input class="form-control ps-5 bg-light" type="search" placeholder="Search..." aria-label="Search"/>
                                        <button class="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit"><i class="bi bi-search fs-5"> </i></button>
                                    </form>
                                </div>
                            </div>


                            <ul class="navbar-nav navbar-nav-scroll ms-auto">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demo</a>
                                    <ul class="dropdown-menu" aria-labelledby="homeMenu">
                                        <li> <a class="dropdown-item" href="index-2.html">Home default</a></li>
                                        <li> <a class="dropdown-item" href="index-classic.html">Home classic</a></li>
                                        <li> <a class="dropdown-item" href="index-post.html">Home post</a></li>
                                        <li> <a class="dropdown-item" href="index-video.html">Home video</a></li>
                                        <li> <a class="dropdown-item" href="index-event.html">Home event</a></li>
                                        <li> <a class="dropdown-item" href="landing.html">Landing page</a></li>
                                        <li> <a class="dropdown-item" href="app-download.html">App download</a></li>
                                        <li class="dropdown-divider"></li>
                                        <li>
                                            <a class="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                                                <i class="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy Social!
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <ul class="dropdown-menu" aria-labelledby="pagesMenu">
                                        <li> <a class="dropdown-item" href="albums.html">Albums</a></li>
                                        <li> <a class="dropdown-item" href="celebration.html">Celebration</a></li>
                                        <li> <a class="dropdown-item" href="messaging.html">Messaging</a></li>

                                        <li class="dropdown-submenu dropend">
                                            <a class="dropdown-item dropdown-toggle" href="#!">Profile</a>
                                            <ul class="dropdown-menu" data-bs-popper="none">
                                                <li> <a class="dropdown-item" href="my-profile.html">Feed</a> </li>
                                                <li> <a class="dropdown-item" href="my-profile-about.html">About</a> </li>
                                                <li> <a class="dropdown-item" href="my-profile-connections.html">Connections</a> </li>
                                                <li> <a class="dropdown-item" href="my-profile-media.html">Media</a> </li>
                                                <li> <a class="dropdown-item" href="my-profile-videos.html">Videos</a> </li>
                                                <li> <a class="dropdown-item" href="my-profile-events.html">Events</a> </li>
                                                <li> <a class="dropdown-item" href="my-profile-activity.html">Activity</a> </li>
                                            </ul>
                                        </li>
                                        <li> <a class="dropdown-item" href="events.html">Events</a></li>
                                        <li> <a class="dropdown-item" href="events-2.html">Events 2</a></li>
                                        <li> <a class="dropdown-item" href="event-details.html">Event details</a></li>
                                        <li> <a class="dropdown-item" href="event-details-2.html">Event details 2</a></li>
                                        <li> <a class="dropdown-item" href="groups.html">Groups</a></li>
                                        <li> <a class="dropdown-item" href="group-details.html">Group details</a></li>
                                        <li> <a class="dropdown-item" href="post-videos.html">Post videos</a></li>
                                        <li> <a class="dropdown-item" href="post-video-details.html">Post video details</a></li>
                                        <li> <a class="dropdown-item" href="post-details.html">Post details</a></li>
                                        <li> <a class="dropdown-item" href="video-details.html">Video details</a></li>
                                        <li> <a class="dropdown-item" href="blog.html">Blog</a></li>
                                        <li> <a class="dropdown-item" href="blog-details.html">Blog details</a></li>


                                        <li class="dropdown-divider"></li>
                                        <li class="dropdown-submenu dropend">
                                            <a class="dropdown-item dropdown-toggle" href="#">Dropdown levels</a>
                                            <ul class="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                                <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                                                <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>

                                                <li class="dropdown-submenu dropstart">
                                                    <a class="dropdown-item dropdown-toggle" href="#">Dropdown (start)</a>
                                                    <ul class="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                                        <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                                                        <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                                                    </ul>
                                                </li>
                                                <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>


                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account </a>
                                    <ul class="dropdown-menu" aria-labelledby="postMenu">
                                        <li> <a class="dropdown-item" href="create-page.html">Create a page</a></li>
                                        <li> <a class="dropdown-item" href="settings.html">Settings</a> </li>
                                        <li> <a class="dropdown-item" href="notifications.html">Notifications</a> </li>
                                        <li> <a class="dropdown-item" href="help.html">Help center</a> </li>
                                        <li> <a class="dropdown-item" href="help-details.html">Help details</a> </li>

                                        <li class="dropdown-submenu dropstart">
                                            <a class="dropdown-item dropdown-toggle" href="#">Authentication</a>
                                            <ul class="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                                <li> <a class="dropdown-item" href="sign-in.html">Sign in</a> </li>
                                                <li> <a class="dropdown-item" href="sign-up.html">Sing up</a> </li>
                                                <li> <a class="dropdown-item" href="forgot-password.html">Forgot password</a> </li>
                                                <li class="dropdown-divider"></li>
                                                <li> <a class="dropdown-item" href="sign-in-advance.html">Sign in advance</a> </li>
                                                <li> <a class="dropdown-item" href="sign-up-advance.html">Sing up advance</a> </li>
                                                <li> <a class="dropdown-item" href="forgot-password-advance.html">Forgot password advance</a> </li>
                                            </ul>
                                        </li>
                                        <li> <a class="dropdown-item" href="error-404.html">Error 404</a> </li>
                                        <li> <a class="dropdown-item" href="offline.html">Offline</a> </li>
                                        <li> <a class="dropdown-item" href="privacy-and-terms.html">Privacy & terms</a> </li>
                                    </ul>
                                </li>


                                <li class="nav-item">
                                    <a class="nav-link" href="my-profile-connections.html">My network</a>
                                </li>
                            </ul>
                        </div>

                        <ul class="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
                            <li class="nav-item ms-2">
                                <a class="nav-link icon-md btn btn-light p-0" href="messaging.html">
                                    <i class="bi bi-chat-left-text-fill fs-6"> </i>
                                </a>
                            </li>
                            <li class="nav-item ms-2">
                                <a class="nav-link icon-md btn btn-light p-0" href="settings.html">
                                    <i class="bi bi-gear-fill fs-6"> </i>
                                </a>
                            </li>
                            <li class="nav-item dropdown ms-2">
                                <a class="nav-link icon-md btn btn-light p-0" href="#" id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                    <span class="badge-notif animation-blink"></span>
                                    <i class="bi bi-bell-fill fs-6"> </i>
                                </a>
                                <div class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0" aria-labelledby="notifDropdown">
                                    <div class="card">
                                        <div class="card-header d-flex justify-content-between align-items-center">
                                            <h6 class="m-0">Notifications <span class="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span></h6>
                                            <a class="small" href="#">Clear all</a>
                                        </div>
                                        <div class="card-body p-0">
                                            <ul class="list-group list-group-flush list-unstyled p-2">

                                                <li>
                                                    <div class="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3">
                                                        <div class="avatar text-center d-none d-sm-inline-block">
                                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt=""/>
                                                        </div>
                                                        <div class="ms-sm-3">
                                                            <div class=" d-flex">
                                                                <p class="small mb-2"><b>Judy Nguyen</b> sent you a friend request.</p>
                                                                <p class="small ms-3 text-nowrap">Just now</p>
                                                            </div>
                                                            <div class="d-flex">
                                                                <button class="btn btn-sm py-1 btn-primary me-2">Accept </button>
                                                                <button class="btn btn-sm py-1 btn-danger-soft">Delete </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div class="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3 position-relative">
                                                        <div class="avatar text-center d-none d-sm-inline-block">
                                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt=""/>
                                                        </div>
                                                        <div class="ms-sm-3 d-flex">
                                                            <div>
                                                                <p class="small mb-2">Wish <b>Amanda Reed</b> a happy birthday (Nov 12)</p>
                                                                <button class="btn btn-sm btn-outline-light py-1 me-2">Say happy birthday 🎂</button>
                                                            </div>
                                                            <p class="small ms-3">2min</p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <a href="#" class="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3">
                                                        <div class="avatar text-center d-none d-sm-inline-block">
                                                            <div class="avatar-img rounded-circle bg-success"><span class="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span></div>
                                                        </div>
                                                        <div class="ms-sm-3">
                                                            <div class="d-flex">
                                                                <p class="small mb-2">Webestica has 15 like and 1 new activity</p>
                                                                <p class="small ms-3">1hr</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#" class="list-group-item list-group-item-action rounded d-flex border-0 p-3 mb-1">
                                                        <div class="avatar text-center d-none d-sm-inline-block">
                                                            <img class="avatar-img rounded-circle" src="assets/images/logo/12.svg" alt=""/>
                                                        </div>
                                                        <div class="ms-sm-3 d-flex">
                                                            <p class="small mb-2"><b>Bootstrap in the news:</b> The search giant’s parent company, Alphabet, just joined an exclusive club of tech stocks.</p>
                                                            <p class="small ms-3">4hr</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-footer text-center">
                                            <a href="#" class="btn btn-sm btn-primary-soft">See all incoming activity</a>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li class="nav-item ms-2 dropdown">
                                <a class="nav-link btn icon-md p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img class="avatar-img rounded-2" src="assets/images/avatar/07.jpg" alt=""/>
                                </a>
                                <ul class="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3" aria-labelledby="profileDropdown">

                                    <li class="px-3">
                                        <div class="d-flex align-items-center position-relative">

                                            <div class="avatar me-3">
                                                <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar"/>
                                            </div>
                                            <div>
                                                <a class="h6 stretched-link" href="#">Lori Ferguson</a>
                                                <p class="small m-0">Web Developer</p>
                                            </div>
                                        </div>
                                        <a class="dropdown-item btn btn-primary-soft btn-sm my-2 text-center" href="my-profile.html">View profile</a>
                                    </li>

                                    <li><a class="dropdown-item" href="settings.html"><i class="bi bi-gear fa-fw me-2"></i>Settings & Privacy</a></li>
                                    <li>
                                        <a class="dropdown-item" href="https://support.webestica.com/" target="_blank">
                                            <i class="fa-fw bi bi-life-preserver me-2"></i>Support
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="docs/index.html" target="_blank">
                                            <i class="fa-fw bi bi-card-text me-2"></i>Documentation
                                        </a>
                                    </li>
                                    <li class="dropdown-divider"></li>
                                    <li><a class="dropdown-item bg-danger-soft-hover" href="sign-in-advance.html"><i class="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
                                    <li> <hr class="dropdown-divider"/></li>

                                    <li>
                                        <div class="modeswitch-wrap" id="darkModeSwitch">
                                            <div class="modeswitch-item">
                                                <div class="modeswitch-icon"></div>
                                            </div>
                                            <span>Dark mode</span>
                                        </div>
                                    </li>

                                </ul>
                            </li>


                        </ul>

                    </div>
                </nav>

            </header>

            <main>


                <div class="container">
                    <div class="row g-4">


                        <div class="col-lg-8 vstack gap-4">

                            <div class="card">

                                <div class="h-200px rounded-top" style={{backgroundimage:"url(assets/images/bg/05.jpg)", backgroundposition: "center", backgroundsize: "cover", backgroundrepeat: "no-repeat"}}></div>

                                <div class="card-body py-0">
                                    <div class="d-sm-flex align-items-start text-center text-sm-start">
                                        <div>

                                            <div class="avatar avatar-xxl mt-n5 mb-3">
                                                <img class="avatar-img rounded-circle border border-white border-3" src="assets/images/avatar/07.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div class="ms-sm-4 mt-sm-3">

                                            <h1 class="mb-0 h5">Sam Lanson <i class="bi bi-patch-check-fill text-success small"></i></h1>
                                            <p>250 connections</p>
                                        </div>

                                        <div class="d-flex mt-3 justify-content-center ms-sm-auto">
                                            <div class="dropdown">

                                                <button class="icon-md btn btn-light" type="button" id="profileAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </button>

                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction2">

                                                    <li><a class="dropdown-item" href="#"> <i class="bi bi-lock fa-fw pe-2"></i>Change password</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <ul class="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">

                                        <li class="list-inline-item"><i class="bi bi-geo-alt me-1"></i> New Hampshire</li>

                                    </ul>
                                </div>

                                <div class="card-footer mt-3 pt-2 pb-0">

                                    <ul class="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                                        <li class="nav-item"> <a class="nav-link active" href="my-profile.html"> Posts </a> </li>
                                        <li class="nav-item"> <a class="nav-link" href="my-profile-about.html"> About </a> </li>
                                    </ul>
                                </div>
                            </div>



                            <div class="card card-body">
                                <div class="d-flex mb-3">

                                    <div class="avatar avatar-xs me-2">
                                        <a href="#"> <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt=""/> </a>
                                    </div>

                                    <form class="w-100">
                                        <input class="form-control pe-4 border-0" placeholder="Share your thoughts..." data-bs-toggle="modal" data-bs-target="#modalCreateFeed"/>
                                    </form>
                                </div>

                                <ul class="nav nav-pills nav-stack small fw-normal">
                                    <li class="nav-item">
                                        <a class="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionPhoto"> <i class="bi bi-image-fill text-success pe-2"></i>Photo</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo"> <i class="bi bi-camera-reels-fill text-info pe-2"></i>Video</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link bg-light py-1 px-2 mb-0" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> <i class="bi bi-calendar2-event-fill text-danger pe-2"></i>Event </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#modalCreateFeed"> <i class="bi bi-emoji-smile-fill text-warning pe-2"></i>Feeling /Activity</a>
                                    </li>
                                    <li class="nav-item dropdown ms-sm-auto">
                                        <a class="nav-link bg-light py-1 px-2 mb-0" href="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots"></i>
                                        </a>

                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare">
                                            <li><a class="dropdown-item" href="#"> <i class="bi bi-envelope fa-fw pe-2"></i>Create a poll</a></li>
                                            <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark-check fa-fw pe-2"></i>Ask a question </a></li>
                                            <li><hr class="dropdown-divider"/></li>
                                            <li><a class="dropdown-item" href="#"> <i class="bi bi-pencil-square fa-fw pe-2"></i>Help</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>

                            <div class="card">

                                <div class="card-header border-0 pb-0">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">

                                            <div class="avatar avatar-story me-2">
                                                <a href="#!"> <img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt=""/> </a>
                                            </div>

                                            <div>
                                                <div class="nav nav-divider">
                                                    <h6 class="nav-item card-title mb-0"> <a href="#!"> Lori Ferguson </a></h6>
                                                    <span class="nav-item small"> 2hr</span>
                                                </div>
                                                <p class="mb-0 small">Web Developer at Webestica</p>
                                            </div>
                                        </div>

                                        <div class="dropdown">
                                            <a href="#" class="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="bi bi-three-dots"></i>
                                            </a>

                                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction1">
                                                <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a></li>
                                                <li><a class="dropdown-item" href="#"> <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </a></li>
                                                <li><a class="dropdown-item" href="#"> <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a></li>
                                                <li><a class="dropdown-item" href="#"> <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a></li>
                                                <li><hr class="dropdown-divider"/></li>
                                                <li><a class="dropdown-item" href="#"> <i class="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div class="card-body">
                                    <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>

                                    <img class="card-img" src="assets/images/post/3by2/01.jpg" alt="Post"/>

                                    <ul class="nav nav-stack py-3 small">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#!"> <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Comments (12)</a>
                                        </li>
                                    </ul>

                                    <div class="d-flex mb-3">

                                        <div class="avatar avatar-xs me-2">
                                            <a href="#!"> <img class="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt=""/> </a>
                                        </div>

                                        <form class="position-relative w-100">
                                            <textarea class="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                        </form>
                                    </div>

                                    <ul class="comment-wrap list-unstyled">



                                    </ul>

                                </div>



                            </div>


                        </div>

                        <div class="col-lg-4">

                            <div class="row g-4">


                                <div class="col-md-6 col-lg-12">
                                    <div class="card">
                                        <div class="card-header border-0 pb-0">
                                            <h5 class="card-title">About</h5>

                                        </div>

                                        <div class="card-body position-relative pt-0">
                                            <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>

                                            <ul class="list-unstyled mt-3 mb-0">
                                                <li class="mb-2"> <i class="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> October 20, 1990 </strong> </li>
                                                <li class="mb-2"> <i class="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong> </li>
                                                <li> <i class="bi bi-envelope fa-fw pe-1"></i> Email: <strong> webestica@gmail.com </strong> </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-12">
                                    <div class="card">

                                        <div class="card-header d-sm-flex justify-content-between align-items-center border-0">
                                            <h5 class="card-title">Friends <span class="badge bg-danger bg-opacity-10 text-danger">230</span></h5>
                                            <a class="btn btn-primary-soft btn-sm" href="#!"> See all friends</a>
                                        </div>

                                        <div class="card-body position-relative pt-0">
                                            <div class="row g-3">

                                                <div class="col-6">

                                                    <div class="card shadow-none text-center h-100">

                                                        <div class="card-body p-2 pb-0">
                                                            <div class="avatar avatar-story avatar-xl">
                                                                <a href="#!"><img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt=""/></a>
                                                            </div>
                                                            <h6 class="card-title mb-1 mt-3"> <a href="#!"> Amanda Reed </a></h6>
                                                            <p class="mb-0 small lh-sm">16 mutual connections</p>
                                                        </div>

                                                        <div class="card-footer p-2 border-0">
                                                            <button class="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i class="bi bi-chat-left-text"></i> </button>
                                                            <button class="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i class="bi bi-person-x"></i> </button>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="col-6">

                                                    <div class="card shadow-none text-center h-100">

                                                        <div class="card-body p-2 pb-0">
                                                            <div class="avatar avatar-xl">
                                                                <a href="#!"><img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt=""/></a>
                                                            </div>
                                                            <h6 class="card-title mb-1 mt-3"> <a href="#!"> Samuel Bishop </a></h6>
                                                            <p class="mb-0 small lh-sm">22 mutual connections</p>
                                                        </div>

                                                        <div class="card-footer p-2 border-0">
                                                            <button class="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i class="bi bi-chat-left-text"></i> </button>
                                                            <button class="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i class="bi bi-person-x"></i> </button>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="col-6">

                                                    <div class="card shadow-none text-center h-100">

                                                        <div class="card-body p-2 pb-0">
                                                            <div class="avatar avatar-xl">
                                                                <a href="#!"><img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt=""/></a>
                                                            </div>
                                                            <h6 class="card-title mb-1 mt-3"> <a href="#"> Bryan Knight </a></h6>
                                                            <p class="mb-0 small lh-sm">1 mutual connection</p>
                                                        </div>

                                                        <div class="card-footer p-2 border-0">
                                                            <button class="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i class="bi bi-chat-left-text"></i> </button>
                                                            <button class="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i class="bi bi-person-x"></i> </button>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="col-6">

                                                    <div class="card shadow-none text-center h-100">

                                                        <div class="card-body p-2 pb-0">
                                                            <div class="avatar avatar-xl">
                                                                <a href="#!"><img class="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt=""/></a>
                                                            </div>
                                                            <h6 class="card-title mb-1 mt-3"> <a href="#!"> Amanda Reed </a></h6>
                                                            <p class="mb-0 small lh-sm">15 mutual connections</p>
                                                        </div>

                                                        <div class="card-footer p-2 border-0">
                                                            <button class="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i class="bi bi-chat-left-text"></i> </button>
                                                            <button class="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i class="bi bi-person-x"></i> </button>
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

            <div class="modal fade" id="modalCreateFeed" tabindex="-1" aria-labelledby="modalLabelCreateFeed" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLabelCreateFeed">Create post</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">

                        </div>

                        <div class="modal-footer row justify-content-between">

                            <div class="col-lg-3">
                                <select class="form-select js-choice" data-position="top" data-search-enabled="false">
                                    <option value="PB">Public</option>
                                    <option value="PV">Friends</option>
                                    <option value="PV">Only me</option>
                                    <option value="PV">Custom</option>
                                </select>
                            </div>

                            <div class="col-lg-8 text-sm-end">
                                <button type="button" class="btn btn-danger-soft me-2"> <i class="bi bi-camera-video-fill pe-1"></i> Live video</button>
                                <button type="button" class="btn btn-success-soft">Post</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade" id="feedActionPhoto" tabindex="-1" aria-labelledby="feedActionPhotoLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">

                            <div class="d-flex mb-3">

                                <div class="avatar avatar-xs me-2">
                                    <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt=""/>
                                </div>

                                <form class="w-100">
                                    <textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="2" placeholder="Share your thoughts..."></textarea>
                                </form>
                            </div>


                            <div>
                                <label class="form-label">Upload attachment</label>
                                <div class="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
                                    <div class="dz-message">
                                        <i class="bi bi-images display-3"></i>
                                        <p>Drag here or click to upload photo.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="modal-footer ">

                            <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-success-soft">Post</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade" id="feedActionVideo" tabindex="-1" aria-labelledby="feedActionVideoLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title" id="feedActionVideoLabel">Add post video</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">

                            <div class="d-flex mb-3">

                                <div class="avatar avatar-xs me-2">
                                    <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt=""/>
                                </div>

                                <form class="w-100">
                                    <textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="2" placeholder="Share your thoughts..."></textarea>
                                </form>
                            </div>


                            <div>
                                <label class="form-label">Upload attachment</label>
                                <div class="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
                                    <div class="dz-message">
                                        <i class="bi bi-camera-reels display-3"></i>
                                        <p>Drag here or click to upload video.</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="modal-footer">

                            <button type="button" class="btn btn-danger-soft me-2"><i class="bi bi-camera-video-fill pe-1"></i> Live video</button>
                            <button type="button" class="btn btn-success-soft">Post</button>
                        </div>

                    </div>
                </div>
            </div>


            <div class="modal fade" id="modalCreateEvents" tabindex="-1" aria-labelledby="modalLabelCreateAlbum" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLabelCreateAlbum">Create event</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">

                            <form class="row g-4">

                                <div class="col-12">
                                    <label class="form-label">Title</label>
                                    <input type="email" class="form-control" placeholder="Event name here"/>
                                </div>

                                <div class="col-12">
                                    <label class="form-label">Description</label>
                                    <textarea class="form-control" rows="2" placeholder="Ex: topics, schedule, etc."></textarea>
                                </div>

                                <div class="col-sm-4">
                                    <label class="form-label">Date</label>
                                    <input type="text" class="form-control flatpickr" placeholder="Select date"/>
                                </div>

                                <div class="col-sm-4">
                                    <label class="form-label">Time</label>
                                    <input type="text" class="form-control flatpickr" data-enableTime="true" data-noCalendar="true" placeholder="Select time"/>
                                </div>

                                <div class="col-sm-4">
                                    <label class="form-label">Duration</label>
                                    <input type="email" class="form-control" placeholder="1hr 23m"/>
                                </div>

                                <div class="col-12">
                                    <label class="form-label">Location</label>
                                    <input type="email" class="form-control" placeholder="Logansport, IN 46947"/>
                                </div>

                                <div class="col-12">
                                    <label class="form-label">Add guests</label>
                                    <input type="email" class="form-control" placeholder="Guest email"/>
                                </div>

                                <div class="col-12 mt-3">
                                    <ul class="avatar-group list-unstyled align-items-center mb-0">
                                        <li class="avatar avatar-xs">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar"/>
                                        </li>
                                        <li class="avatar avatar-xs">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar"/>
                                        </li>
                                        <li class="avatar avatar-xs">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar"/>
                                        </li>
                                        <li class="avatar avatar-xs">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar"/>
                                        </li>
                                        <li class="avatar avatar-xs">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar"/>
                                        </li>
                                        <li class="avatar avatar-xs">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar"/>
                                        </li>
                                        <li class="avatar avatar-xs">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar"/>/
                                        </li>
                                        <li class="ms-3">
                                            <small> +50 </small>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <label class="form-label">Upload attachment</label>
                                    <div class="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
                                        <div class="dz-message">
                                            <i class="bi bi-file-earmark-text display-3"></i>
                                            <p>Drop presentation and document here or click to upload.</p>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal"> Cancel</button>
                            <button type="button" class="btn btn-success-soft">Create now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeLine;
