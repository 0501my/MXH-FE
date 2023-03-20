import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePost, editPost, findByIdPost, getPosts, addPosts} from "../services/PostService";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import {Form, Field, Formik} from "formik";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../services/fireBase";
import login from "./Login";
import ShowPost from "./posts/ShowPost";
import CreatePost from "./posts/CreatePost";

const ShowHome = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
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


    const handleDelete = async (id) => {
        dispatch(deletePost(id))
    }
    const handleEditPost = (values) => {
        let data = {...values}
        dispatch(editPost(data)).then(() => {
            navigate('/home')
            setCheck(false)
        })
    }
    const handleChange = async (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }

    };
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

    const [check, setCheck] = useState(false)
    const checkId = async (id, index) => {
        let data = [id, index]
        dispatch(findByIdPost(data)).then(() => {
        })

    }
    useEffect(() => {
        dispatch(getPosts())
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
                                                        <a className="nav-link" href="blog.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/earth-outline-filled.svg"
                                                            alt=""/><span>Latest News </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="events.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/calendar-outline-filled.svg"
                                                            alt=""/><span>Events </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="groups.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/chat-outline-filled.svg"
                                                            alt=""/><span>Groups </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="notifications.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/notification-outlined-filled.svg"
                                                            alt=""/><span>Notifications </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="settings.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/cog-outline-filled.svg"
                                                            alt=""/><span>Settings </span></a>
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
                                                    <a href="#!"><img className="avatar-img rounded-circle"
                                                                      src="assets/images/avatar/04.jpg" alt=""/></a>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Judy Nguyen </a>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                                                   href="#"><i
                                                    className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            <div className="hstack gap-2 mb-3">
                                                <div className="avatar avatar-story">
                                                    <a href="#!"> <img className="avatar-img rounded-circle"
                                                                       src="assets/images/avatar/05.jpg" alt=""/> </a>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Amanda Reed </a>
                                                    <p className="mb-0 small text-truncate">Web Developer</p>
                                                </div>
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                                                   href="#"><i
                                                    className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            <div className="hstack gap-2 mb-3">
                                                <div className="avatar">
                                                    <a href="#"> <img className="avatar-img rounded-circle"
                                                                      src="assets/images/avatar/11.jpg" alt=""/> </a>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Billy Vasquez </a>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>
                                                <a className="btn btn-primary rounded-circle icon-md ms-auto"
                                                   href="#"><i
                                                    className="bi bi-person-check-fill"> </i></a>
                                            </div>
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
                                            <div className="hstack gap-2 mb-3">
                                                <div className="avatar">
                                                    <a href="#"> <img className="avatar-img rounded-circle"
                                                                      src="assets/images/avatar/placeholder.jpg"
                                                                      alt=""/> </a>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Carolyn Ortiz </a>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
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

            {/*kkk*/}
            <div className="theme-layout">
                <div className="responsive-header">
                    <div className="mh-head first Sticky">
			<span className="mh-btns-left">
				<a className="" href="#menu"><i className="fa fa-align-justify"></i></a>
			</span>
                        <span className="mh-btns-right">
				<a className="fa fa-sliders" href="#shoppingbag"></a>
			</span>
                    </div>
                </div>
                <section>
                    <div className="gap2 gray-bg py-5 mt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row merged20" id="page-contents">

                                        <div className="col-lg-3">
                                            <aside className="sidebar static left">
                                                <div className="widget whitish low-opacity">
                                                    <div className="bg-image"></div>
                                                    <div className="dob-head">
                                                        <img src="/images/resources/sug-page-5.jpg" alt=""/>
                                                        <span>22nd Birthday</span>
                                                        <div className="dob">
                                                            <i>19</i>
                                                            <span>September</span>
                                                        </div>
                                                    </div>
                                                    <div className="dob-meta">
                                                        <figure><img src="/images/resources/dob-cake.gif" alt=""/>
                                                        </figure>
                                                        <h6><a href="#" title="">Lucy Carbel</a> valentine's birthday
                                                        </h6>
                                                        <p>leave a message with your best wishes on his profile.</p>
                                                    </div>
                                                </div>
                                                {/*birthday widget*/}


                                                <div className="widget">
                                                    <h4 className="widget-title">Shortcuts</h4>
                                                    <ul className="naves">
                                                        <li>
                                                            <i className="ti-clipboard"></i>
                                                            <a href="newsfeed.html" title="">News feed</a>
                                                        </li>
                                                        <li>
                                                            <i className="ti-mouse-alt"></i>
                                                            <a href="inbox.html" title="">Inbox</a>
                                                        </li>
                                                        <li>
                                                            <i className="ti-files"></i>
                                                            <a href="fav-page.html" title="">My pages</a>
                                                        </li>
                                                        <li>
                                                            <i className="ti-user"></i>
                                                            <a href="timeline-friends.html" title="">friends</a>
                                                        </li>
                                                        <li>
                                                            <i className="ti-image"></i>
                                                            <a href="timeline-photos.html" title="">images</a>
                                                        </li>
                                                        <li>
                                                            <i className="ti-video-camera"></i>
                                                            <a href="timeline-videos.html" title="">videos</a>
                                                        </li>
                                                        <li>
                                                            <i className="ti-comments-smiley"></i>
                                                            <a href="messages.html" title="">Messages</a>
                                                        </li>
                                                        <li>
                                                            <i className="ti-bell"></i>
                                                            <a href="notifications.html" title="">Notifications</a>
                                                        </li>
                                                        <li>
                                                            <i className="ti-share"></i>
                                                            <a href="people-nearby.html" title="">People Nearby</a>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-bar-chart-o"></i>
                                                            <a href="insights.html" title="">insights</a>
                                                        </li>
                                                        <li>
                                                            <i className="ti-power-off"></i>
                                                            <a as={'button'} onClick={() => {
                                                                localStorage.clear();
                                                                navigate('/')

                                                            }}>Logout</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/*Shortcuts*/}


                                                <div className="widget stick-widget">
                                                    <h4 className="widget-title">Who's follownig</h4>
                                                    <ul className="followers">
                                                        <li>
                                                            <figure><img src="images/resources/friend-avatar2.jpg"
                                                                         alt=""/></figure>
                                                            <div className="friend-meta">
                                                                <h4><a href="time-line.html" title="">Kelly Bill</a>
                                                                </h4>
                                                                <a href="#" title="" className="underline">Add
                                                                    Friend</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/friend-avatar4.jpg"
                                                                         alt=""/></figure>
                                                            <div className="friend-meta">
                                                                <h4><a href="time-line.html" title="">Issabel</a></h4>
                                                                <a href="#" title="" className="underline">Add
                                                                    Friend</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/friend-avatar6.jpg"
                                                                         alt=""/></figure>
                                                            <div className="friend-meta">
                                                                <h4><a href="time-line.html" title="">Andrew</a></h4>
                                                                <a href="#" title="" className="underline">Add
                                                                    Friend</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/friend-avatar8.jpg"
                                                                         alt=""/></figure>
                                                            <div className="friend-meta">
                                                                <h4><a href="time-line.html" title="">Sophia</a></h4>
                                                                <a href="#" title="" className="underline">Add
                                                                    Friend</a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/friend-avatar3.jpg"
                                                                         alt=""/></figure>
                                                            <div className="friend-meta">
                                                                <h4><a href="time-line.html" title="">Allen</a></h4>
                                                                <a href="#" title="" className="underline">Add
                                                                    Friend</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/*who's following*/}

                                            </aside>
                                        </div>
                                        {/*sidebar*/}

                                        <div className="col-lg-6">
                                            <div className="central-meta postbox">
                                                <span className="create-post">Create post</span>
                                                <div className="new-postbox">
                                                    <Formik initialValues={{content: "", image: ""}}
                                                            onSubmit={(values) => {
                                                                values.account = account.idAccount;
                                                                values.image = urls[urls.length - 1]
                                                                dispatch(addPosts(values))
                                                                document.getElementById('add-form').reset();
                                                                setUrls([])
                                                            }}>
                                                        <Form id='add-form'>
                                                            <div className={"row"}>
                                                                <div className="col-2">
                                                                    <img src={account && account.avatar} style={{
                                                                        width: "50px",
                                                                        height: "50px",
                                                                        borderRadius: "50%"
                                                                    }}/>
                                                                </div>
                                                                <div className="col-9">
                                                                    <Field as={'textarea'} name={'content'} rows="2"
                                                                           placeholder="Share some what you are thinking?"
                                                                           style={{border: "none"}}/>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {urls && <>
                                                                    <img src={urls[urls.length - 1]} alt=""
                                                                         style={{
                                                                             width: 300, marginBottom: "10px"
                                                                         }}/></>}
                                                            </div>
                                                            <div>
                                                                <input type="file" id="myFile" name="image"
                                                                       onChange={handleChange}/>
                                                                <label htmlFor="myFile" className="file-upload"><i
                                                                    className="fa fa-camera"
                                                                    style={{fontSize: "18px"}}/></label>
                                                            </div>

                                                            <div className="attachments">

                                                                <button className="post-btn" type="submit"
                                                                        data-ripple="">Post
                                                                </button>
                                                            </div>

                                                        </Form>
                                                    </Formik>
                                                </div>
                                            </div>


                                            <div className="loadMore">
                                                {posts !== undefined && posts.map((it, index) => (<>
                                                    <div className="central-meta item">
                                                        <div className="user-post">
                                                            <div className="friend-info">
                                                                <figure>
                                                                    <img src={it.account.avatar} alt="#"/>
                                                                </figure>
                                                                <div className="friend-name">
                                                                    <div className="more">
                                                                        {account.idAccount == it.account.idAccount &&
                                                                            <div className="more-post-optns"><i
                                                                                className="ti-more-alt"></i>
                                                                                <ul>
                                                                                    <li>
                                                                                        <i
                                                                                            className="fa fa-pencil-square-o"
                                                                                            onClick={() => {
                                                                                                setCheck(true)
                                                                                                checkId(it.idPost, index)
                                                                                            }}
                                                                                        > Edit Post {index}</i>
                                                                                    </li>
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
                                                                                                           handleDelete(it.idPost).then(() => {
                                                                                                               swal("Poof! Your imaginary file has been deleted!", {
                                                                                                                   icon: "success",
                                                                                                               })
                                                                                                           });
                                                                                                       } else {
                                                                                                           swal("Your imaginary file is safe!")
                                                                                                       }
                                                                                                   });
                                                                                           }}>&nbsp; Delete Post</i>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>}

                                                                    </div>
                                                                    <ins><Link
                                                                        to={`/Home/PersonalPage/MyTimeLine/${it.account.idAccount}`}
                                                                        title="">{it.account.name}</Link> Post
                                                                        Album
                                                                    </ins>
                                                                    <span><i
                                                                        className="fa fa-globe"></i> published: {it.time} </span>
                                                                </div>


                                                                <div className="post-meta">
                                                                    <p>
                                                                        {it.content}
                                                                    </p>
                                                                    <figure>
                                                                        <div className="img-bunch">
                                                                            <figure>
                                                                                <a className="strip"
                                                                                   href="/images/resources/album1.jpg"
                                                                                   title=""
                                                                                   data-strip-group="mygroup"
                                                                                   data-strip-group-options="loop: false">
                                                                                    {it.image != 1 ? <>
                                                                                        <img
                                                                                            src={it.image}
                                                                                            alt="#"/>
                                                                                    </> : <></>}

                                                                                </a>
                                                                            </figure>
                                                                        </div>
                                                                        <ul className="like-dislike">
                                                                            <li><a className="bg-purple" href="#"
                                                                                   title="Save to Pin Post"><i
                                                                                className="fa fa-thumb-tack"></i></a>
                                                                            </li>
                                                                            <li><a className="bg-blue" href="#"
                                                                                   title="Like Post"><i
                                                                                className="ti-thumb-up"></i></a>
                                                                            </li>
                                                                            <li><a className="bg-red" href="#"
                                                                                   title="dislike Post"><i
                                                                                className="ti-thumb-down"></i></a>
                                                                            </li>
                                                                        </ul>
                                                                    </figure>
                                                                    <div className="we-video-info">
                                                                        <ul>
                                                                            <li>
																<span className="views" title="views">
																	<i className="fa fa-eye"></i>
																	<ins>1.2k</ins>
																</span>
                                                                            </li>
                                                                            <li>
                                                                                <div className="likes heart"
                                                                                     title="Like/Dislike">❤ <span>2K</span>
                                                                                </div>
                                                                            </li>
                                                                            <li>
																<span className="comment" title="Comments">
																	<i className="fa fa-commenting"></i>
																	<ins>52</ins>
																</span>
                                                                            </li>

                                                                            <li>
																<span>
																	<a className="share-pst" href="#" title="Share">
																		<i className="fa fa-share-alt"></i>
																	</a>
																	<ins>20</ins>
																</span>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="users-thumb-list">
                                                                            <a data-toggle="tooltip" title="Anderw"
                                                                               href="#">
                                                                                <img alt=""
                                                                                     src="images/resources/userlist-1.jpg"/>
                                                                            </a>
                                                                            <span><strong>You</strong>, <b>Sarah</b> and <a
                                                                                href="#"
                                                                                title="">24+ more</a> liked</span>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div className="coment-area">
                                                                    <ul className="we-comet">
                                                                        <li>
                                                                            <div className="comet-avatar">
                                                                                <img
                                                                                    src="images/resources/nearly3.jpg"
                                                                                    alt=""/>
                                                                            </div>
                                                                            <div className="we-comment">
                                                                                <h5><a href="time-line.html"
                                                                                       title="">Jason
                                                                                    borne</a></h5>
                                                                                <p>we are working for the dance and
                                                                                    sing
                                                                                    songs. this video is very
                                                                                    awesome for
                                                                                    the youngster. please vote this
                                                                                    video
                                                                                    and like our channel</p>
                                                                                <div className="inline-itms">
                                                                                    <span>1 year ago</span>
                                                                                    <a className="we-reply" href="#"
                                                                                       title="Reply"><i
                                                                                        className="fa fa-reply"></i></a>
                                                                                    <a href="#" title=""><i
                                                                                        className="fa fa-heart"></i><span>20</span></a>
                                                                                </div>
                                                                            </div>

                                                                        </li>
                                                                        <li>
                                                                            <div className="comet-avatar">
                                                                                <img
                                                                                    src="images/resources/comet-4.jpg"
                                                                                    alt=""/>
                                                                            </div>
                                                                            <div className="we-comment">
                                                                                <h5><a href="time-line.html"
                                                                                       title="">Sophia</a></h5>
                                                                                <p>we are working for the dance and
                                                                                    sing
                                                                                    songs. this video is very
                                                                                    awesome for
                                                                                    the youngster.
                                                                                    <i className="em em-smiley"></i>
                                                                                </p>
                                                                                <div className="inline-itms">
                                                                                    <span>1 year ago</span>
                                                                                    <a className="we-reply" href="#"
                                                                                       title="Reply"><i
                                                                                        className="fa fa-reply"></i></a>
                                                                                    <a href="#" title=""><i
                                                                                        className="fa fa-heart"></i><span>20</span></a>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title=""
                                                                               className="showmore underline">more
                                                                                comments+</a>
                                                                        </li>
                                                                        <li className="post-comment">
                                                                            <div className="comet-avatar">
                                                                                <img
                                                                                    src="images/resources/nearly1.jpg"
                                                                                    alt=""/>
                                                                            </div>
                                                                            <div className="post-comt-box">
                                                                                <form method="post">
                                                                                <textarea
                                                                                    placeholder="Post your comment"></textarea>
                                                                                    <div className="add-smiles">
                                                                                        <div
                                                                                            className="uploadimage">
                                                                                            <i className="fa fa-image"></i>
                                                                                            <label
                                                                                                className="fileContainer">
                                                                                                <input type="file"/>
                                                                                            </label>
                                                                                        </div>
                                                                                        <span
                                                                                            className="em em-expressionless"
                                                                                            title="add icon"></span>
                                                                                        <div
                                                                                            className="smiles-bunch">
                                                                                            <i className="em em---1"></i>
                                                                                            <i className="em em-smiley"></i>
                                                                                            <i className="em em-anguished"></i>
                                                                                            <i className="em em-laughing"></i>
                                                                                            <i className="em em-angry"></i>
                                                                                            <i className="em em-astonished"></i>
                                                                                            <i className="em em-blush"></i>
                                                                                            <i className="em em-disappointed"></i>
                                                                                            <i className="em em-worried"></i>
                                                                                            <i className="em em-kissing_heart"></i>
                                                                                            <i className="em em-rage"></i>
                                                                                            <i className="em em-stuck_out_tongue"></i>
                                                                                        </div>
                                                                                    </div>

                                                                                    <button type="submit"></button>
                                                                                </form>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </>))}


                                            </div>
                                        </div>
                                        {/*danh sach post*/}

                                        {/*centerl meta*/}
                                        <div className="col-lg-3">
                                            <aside className="sidebar static right">
                                                <div className="widget">
                                                    <h4 className="widget-title">Your page</h4>
                                                    <div className="your-page">
                                                        <figure>
                                                            <a href="#" title=""><img
                                                                src="images/resources/friend-avatar9.jpg" alt=""/></a>
                                                        </figure>
                                                        <div className="page-meta">
                                                            <a href="#" title="" className="underline">My Creative
                                                                Page</a>
                                                            <span><i className="ti-comment"></i><a href="insight.html"
                                                                                                   title="">Messages <em>9</em></a></span>
                                                            <span><i className="ti-bell"></i><a href="insight.html"
                                                                                                title="">Notifications <em>2</em></a></span>
                                                        </div>
                                                        <ul className="page-publishes">
                                                            <li>
                                                                <span><i className="ti-pencil-alt"></i>Publish</span>
                                                            </li>
                                                            <li>
                                                                <span><i className="ti-camera"></i>Photo</span>
                                                            </li>
                                                            <li>
                                                                <span><i className="ti-video-camera"></i>Live</span>
                                                            </li>
                                                            <li>
                                                                <span><i className="fa fa-user-plus"></i>Invite</span>
                                                            </li>
                                                        </ul>
                                                        <div className="page-likes">
                                                            <ul className="nav nav-tabs likes-btn">
                                                                <li className="nav-item"><a className="active"
                                                                                            href="#link1"
                                                                                            data-toggle="tab"
                                                                                            data-ripple="">likes</a>
                                                                </li>
                                                                <li className="nav-item"><a className="" href="#link2"
                                                                                            data-toggle="tab"
                                                                                            data-ripple="">views</a>
                                                                </li>
                                                            </ul>
                                                            {/*Tab panes */}
                                                            <div className="tab-content">
                                                                <div className="tab-pane active fade show " id="link1">
                                                                    <span><i className="ti-heart"></i>884</span>
                                                                    <a href="#" title="weekly-likes">35 new likes this
                                                                        week</a>
                                                                    <div className="users-thumb-list">
                                                                        <a href="#" title="Anderw"
                                                                           data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-1.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="frank" data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-2.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Sara" data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-3.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Amy" data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-4.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Ema" data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-5.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Sophie"
                                                                           data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-6.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Maria" data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-7.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="link2">
                                                                    <span><i className="fa fa-eye"></i>440</span>
                                                                    <a href="#" title="weekly-likes">440 new views this
                                                                        week</a>
                                                                    <div className="users-thumb-list">
                                                                        <a href="#" title="Anderw"
                                                                           data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-1.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="frank" data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-2.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Sara" data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-3.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Amy" data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-4.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Ema" data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-5.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Sophie"
                                                                           data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-6.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Maria" data-toggle="tooltip">
                                                                            <img src="/images/resources/userlist-7.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*page like widget*/}
                                                <div className="widget">
                                                    <h4 className="widget-title">Profile intro</h4>
                                                    <ul className="short-profile">
                                                        <li>
                                                            <span>about</span>
                                                            <p>Hi, i am jhon kates, i am 32 years old and worked as a
                                                                web developer in microsoft </p>
                                                        </li>
                                                        <li>
                                                            <span>fav tv show</span>
                                                            <p>Sacred Games, Spartcus Blood, Games of Theron </p>
                                                        </li>
                                                        <li>
                                                            <span>favourit music</span>
                                                            <p>Justin Biber, Shakira, Nati Natasah</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/*profile intro widget*/}
                                                <div className="widget stick-widget">
                                                    <h4 className="widget-title">Recent Links <a title="" href="#"
                                                                                                 className="see-all">See
                                                        All</a></h4>
                                                    <ul className="recent-links">
                                                        <li>
                                                            <figure><img src="images/resources/recentlink-1.jpg"
                                                                         alt=""/>
                                                            </figure>
                                                            <div className="re-links-meta">
                                                                <h6><a href="#" title="">moira's fade reaches much
                                                                    farther than you think.</a></h6>
                                                                <span>2 weeks ago </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/recentlink-2.jpg"
                                                                         alt=""/>
                                                            </figure>
                                                            <div className="re-links-meta">
                                                                <h6><a href="#" title="">daniel asks if we want him to
                                                                    do the voice of doomfist</a></h6>
                                                                <span>3 months ago </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/recentlink-3.jpg"
                                                                         alt=""/>
                                                            </figure>
                                                            <div className="re-links-meta">
                                                                <h6><a href="#" title="">the pitnik overwatch
                                                                    scandals.</a></h6>
                                                                <span>1 day before</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/*recent links*/}
                                            </aside>
                                        </div>
                                        {/*sidebar*/}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {check ? <>
                <Formik initialValues={currentPost}
                        onSubmit={(values) => {
                            handleEditPost(values)
                        }}
                        enableReinitialize={true}>
                    <div className="popup-wraper active">
                        <div className="popup">
                                <span className="popup-closed" onClick={() => {
                                    setCheck(false)
                                }}><i className="ti-close"></i></span>
                            <div className="popup-meta">
                                <div className="popup-head">
                                    <h5>Edit Post</h5>
                                </div>
                                <div className="forum-form">
                                    <div className="postbox">
                                        <div className="new-postbox">
                                            <Form>
                                                <div className="newpst-input">
                                                    <div>
                                                        <label>Content</label>
                                                        <Field as={'textarea'} type="text" name={'content'}/>
                                                    </div>

                                                    {(currentPost && currentPost.image != 1) ?
                                                        <div className="image-container2">
                                                            <img src={currentPost.image} style={{width: 300}}/>
                                                            <div className="close-button" style={{color: '#cc0000'}}
                                                                 onClick={() => {
                                                                     let newPost = {...currentPost};
                                                                     newPost.image = '1'
                                                                     dispatch(handleEditPost(newPost))
                                                                 }}>&times;</div>
                                                        </div> : <></>}
                                                    <div>
                                                        {urls && <>
                                                            <img src={urls[urls.length - 1]} alt=""
                                                                 style={{
                                                                     width: 300, marginBottom: "10px"
                                                                 }}/></>}
                                                    </div>
                                                    <div>
                                                        <input type="file" id="myFile" name="image"
                                                               onChange={handleChange}/>
                                                        <label htmlFor="myFile" className="file-upload"><i
                                                            className="fa fa-camera"
                                                            style={{fontSize: "18px"}}/></label>
                                                    </div>
                                                    <div className="select-options">
                                                        <hr/>
                                                        <Field as={'select'} className="select" name={'status'}>
                                                            <option value={'public'}>Public</option>
                                                            <option value={'friendonly'}>Friend only</option>
                                                            <option value={'onlyme'}>Only me</option>
                                                        </Field>
                                                    </div>
                                                    <button className="post-btn" type="submit" data-ripple="">Edit
                                                    </button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </Formik>
            </> : <></>}
        </>

    )
}
export default ShowHome;
