import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AccountsEdit, searchOtherAccount} from "../services/AccountService";
import {Link, useParams} from "react-router-dom";
import swal from "sweetalert";


const About = () => {
    const {idAccount} = useParams()
    const [check, setCheck] = useState(false);
    const [editInfo, setEditInfo] = useState(false);
    const dispatch = useDispatch()
    const account = useSelector(state => {
        return state.account.currentAccount
    })

    const otherAccount = useSelector(state => {
        return state.account.otherAccount
    })

    useEffect(() => {
        dispatch(searchOtherAccount(idAccount));
        if (idAccount == account.idAccount) {
            setEditInfo(true)
        }
    }, [])


    return (
        <>
            <header className="navbar-light fixed-top header-static bg-mode">


                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index-2.html">
                            <img className="light-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo"/>
                            <img className="dark-mode-item navbar-brand-item" src="assets/images/logo.svg"
                                 alt="logo"/>
                        </a>

                        <button className="navbar-toggler ms-auto icon-md btn btn-light p-0" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-animation">
          <span></span>
          <span></span>
          <span></span>
        </span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarCollapse">


                            <div className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
                                <div className="nav-item w-100">
                                    <form className="rounded position-relative">
                                        <input className="form-control ps-5 bg-light" type="search"
                                               placeholder="Search..." aria-label="Search"/>
                                        <button
                                            className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                                            type="submit"><i className="bi bi-search fs-5"> </i></button>
                                    </form>
                                </div>
                            </div>


                            <ul className="navbar-nav navbar-nav-scroll ms-auto">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="homeMenu"
                                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demo</a>
                                    <ul className="dropdown-menu" aria-labelledby="homeMenu">
                                        <li><a className="dropdown-item" href="index-2.html">Home default</a></li>
                                        <li><a className="dropdown-item" href="index-classic.html">Home classic</a></li>
                                        <li><a className="dropdown-item" href="index-post.html">Home post</a></li>
                                        <li><a className="dropdown-item" href="index-video.html">Home video</a></li>
                                        <li><a className="dropdown-item" href="index-event.html">Home event</a></li>
                                        <li><a className="dropdown-item" href="landing.html">Landing page</a></li>
                                        <li><a className="dropdown-item" href="app-download.html">App download</a></li>
                                        <li className="dropdown-divider"></li>
                                        <li>
                                            <a className="dropdown-item"
                                               href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                                                <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy
                                                Social!
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="pagesMenu"
                                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                                        <li><a className="dropdown-item" href="albums.html">Albums</a></li>
                                        <li><a className="dropdown-item" href="celebration.html">Celebration</a></li>
                                        <li><a className="dropdown-item" href="messaging.html">Messaging</a></li>

                                        <li className="dropdown-submenu dropend">
                                            <a className="dropdown-item dropdown-toggle" href="#!">Profile</a>
                                            <ul className="dropdown-menu" data-bs-popper="none">
                                                <li><a className="dropdown-item" href="my-profile.html">Feed</a></li>
                                                <li><a className="dropdown-item" href="my-profile-about.html">About</a>
                                                </li>
                                                <li><a className="dropdown-item"
                                                       href="my-profile-connections.html">Connections</a></li>
                                                <li><a className="dropdown-item" href="my-profile-media.html">Media</a>
                                                </li>
                                                <li><a className="dropdown-item"
                                                       href="my-profile-videos.html">Videos</a></li>
                                                <li><a className="dropdown-item"
                                                       href="my-profile-events.html">Events</a></li>
                                                <li><a className="dropdown-item"
                                                       href="my-profile-activity.html">Activity</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="events.html">Events</a></li>
                                        <li><a className="dropdown-item" href="events-2.html">Events 2</a></li>
                                        <li><a className="dropdown-item" href="event-details.html">Event details</a>
                                        </li>
                                        <li><a className="dropdown-item" href="event-details-2.html">Event details 2</a>
                                        </li>
                                        <li><a className="dropdown-item" href="groups.html">Groups</a></li>
                                        <li><a className="dropdown-item" href="group-details.html">Group details</a>
                                        </li>
                                        <li><a className="dropdown-item" href="post-videos.html">Post videos</a></li>
                                        <li><a className="dropdown-item" href="post-video-details.html">Post video
                                            details</a></li>
                                        <li><a className="dropdown-item" href="post-details.html">Post details</a></li>
                                        <li><a className="dropdown-item" href="video-details.html">Video details</a>
                                        </li>
                                        <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                                        <li><a className="dropdown-item" href="blog-details.html">Blog details</a></li>


                                        <li className="dropdown-divider"></li>
                                        <li className="dropdown-submenu dropend">
                                            <a className="dropdown-item dropdown-toggle" href="#">Dropdown levels</a>
                                            <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                                <li><a className="dropdown-item" href="#">Dropdown item</a></li>
                                                <li><a className="dropdown-item" href="#">Dropdown item</a></li>

                                                <li className="dropdown-submenu dropstart">
                                                    <a className="dropdown-item dropdown-toggle" href="#">Dropdown
                                                        (start)</a>
                                                    <ul className="dropdown-menu dropdown-menu-end"
                                                        data-bs-popper="none">
                                                        <li><a className="dropdown-item" href="#">Dropdown item</a></li>
                                                        <li><a className="dropdown-item" href="#">Dropdown item</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Dropdown item</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="postMenu"
                                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account </a>
                                    <ul className="dropdown-menu" aria-labelledby="postMenu">
                                        <li><a className="dropdown-item" href="create-page.html">Create a page</a></li>
                                        <li><a className="dropdown-item" href="settings.html">Settings</a></li>
                                        <li><a className="dropdown-item" href="notifications.html">Notifications</a>
                                        </li>
                                        <li><a className="dropdown-item" href="help.html">Help center</a></li>
                                        <li><a className="dropdown-item" href="help-details.html">Help details</a></li>

                                        <li className="dropdown-submenu dropstart">
                                            <a className="dropdown-item dropdown-toggle" href="#">Authentication</a>
                                            <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                                <li><a className="dropdown-item" href="sign-in.html">Sign in</a></li>
                                                <li><a className="dropdown-item" href="sign-up.html">Sing up</a></li>
                                                <li><a className="dropdown-item" href="forgot-password.html">Forgot
                                                    password</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="sign-in-advance.html">Sign in
                                                    advance</a></li>
                                                <li><a className="dropdown-item" href="sign-up-advance.html">Sing up
                                                    advance</a></li>
                                                <li><a className="dropdown-item" href="forgot-password-advance.html">Forgot
                                                    password advance</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="error-404.html">Error 404</a></li>
                                        <li><a className="dropdown-item" href="offline.html">Offline</a></li>
                                        <li><a className="dropdown-item" href="privacy-and-terms.html">Privacy &
                                            terms</a></li>
                                    </ul>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" href="my-profile-connections.html">My network</a>
                                </li>
                            </ul>
                        </div>

                        <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
                            <li className="nav-item ms-2">
                                <a className="nav-link icon-md btn btn-light p-0" href="messaging.html">
                                    <i className="bi bi-chat-left-text-fill fs-6"> </i>
                                </a>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link icon-md btn btn-light p-0" href="settings.html">
                                    <i className="bi bi-gear-fill fs-6"> </i>
                                </a>
                            </li>
                            <li className="nav-item dropdown ms-2">
                                <a className="nav-link icon-md btn btn-light p-0" href="#" id="notifDropdown"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                   data-bs-auto-close="outside">
                                    <span className="badge-notif animation-blink"></span>
                                    <i className="bi bi-bell-fill fs-6"> </i>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0"
                                    aria-labelledby="notifDropdown">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h6 className="m-0">Notifications <span
                                                className="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span>
                                            </h6>
                                            <a className="small" href="#">Clear all</a>
                                        </div>
                                        <div className="card-body p-0">
                                            <ul className="list-group list-group-flush list-unstyled p-2">

                                                <li>
                                                    <div
                                                        className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3">
                                                        <div className="avatar text-center d-none d-sm-inline-block">
                                                            <img className="avatar-img rounded-circle"
                                                                 src="assets/images/avatar/01.jpg" alt=""/>
                                                        </div>
                                                        <div className="ms-sm-3">
                                                            <div className=" d-flex">
                                                                <p className="small mb-2"><b>Judy Nguyen</b> sent you a
                                                                    friend request.</p>
                                                                <p className="small ms-3 text-nowrap">Just now</p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <button
                                                                    className="btn btn-sm py-1 btn-primary me-2">Accept
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm py-1 btn-danger-soft">Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div
                                                        className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3 position-relative">
                                                        <div className="avatar text-center d-none d-sm-inline-block">
                                                            <img className="avatar-img rounded-circle"
                                                                 src="assets/images/avatar/02.jpg" alt=""/>
                                                        </div>
                                                        <div className="ms-sm-3 d-flex">
                                                            <div>
                                                                <p className="small mb-2">Wish <b>Amanda Reed</b> a
                                                                    happy birthday (Nov 12)</p>
                                                                <button
                                                                    className="btn btn-sm btn-outline-light py-1 me-2">Say
                                                                    happy birthday 🎂
                                                                </button>
                                                            </div>
                                                            <p className="small ms-3">2min</p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <a href="#"
                                                       className="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3">
                                                        <div className="avatar text-center d-none d-sm-inline-block">
                                                            <div className="avatar-img rounded-circle bg-success"><span
                                                                className="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
                                                            </div>
                                                        </div>
                                                        <div className="ms-sm-3">
                                                            <div className="d-flex">
                                                                <p className="small mb-2">Webestica has 15 like and 1
                                                                    new activity</p>
                                                                <p className="small ms-3">1hr</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#"
                                                       className="list-group-item list-group-item-action rounded d-flex border-0 p-3 mb-1">
                                                        <div className="avatar text-center d-none d-sm-inline-block">
                                                            <img className="avatar-img rounded-circle"
                                                                 src="assets/images/logo/12.svg" alt=""/>
                                                        </div>
                                                        <div className="ms-sm-3 d-flex">
                                                            <p className="small mb-2"><b>Bootstrap in the news:</b> The
                                                                search giant’s parent company, Alphabet, just joined an
                                                                exclusive club of tech stocks.</p>
                                                            <p className="small ms-3">4hr</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer text-center">
                                            <a href="#" className="btn btn-sm btn-primary-soft">See all incoming
                                                activity</a>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item ms-2 dropdown">
                                <a className="nav-link btn icon-md p-0" href="#" id="profileDropdown" role="button"
                                   data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    <img className="avatar-img rounded-2" src="assets/images/avatar/07.jpg" alt=""/>
                                </a>
                                <ul className="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3"
                                    aria-labelledby="profileDropdown">

                                    <li className="px-3">
                                        <div className="d-flex align-items-center position-relative">

                                            <div className="avatar me-3">
                                                <img className="avatar-img rounded-circle"
                                                     src="assets/images/avatar/07.jpg" alt="avatar"/>
                                            </div>
                                            <div>
                                                <a className="h6 stretched-link" href="#">Lori Ferguson</a>
                                                <p className="small m-0">Web Developer</p>
                                            </div>
                                        </div>
                                        <a className="dropdown-item btn btn-primary-soft btn-sm my-2 text-center"
                                           href="my-profile.html">View profile</a>
                                    </li>

                                    <li><a className="dropdown-item" href="settings.html"><i
                                        className="bi bi-gear fa-fw me-2"></i>Settings & Privacy</a></li>
                                    <li>
                                        <a className="dropdown-item" href="https://support.webestica.com/"
                                           target="_blank">
                                            <i className="fa-fw bi bi-life-preserver me-2"></i>Support
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="docs/index.html" target="_blank">
                                            <i className="fa-fw bi bi-card-text me-2"></i>Documentation
                                        </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li><a className="dropdown-item bg-danger-soft-hover" href="sign-in-advance.html"><i
                                        className="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>

                                    <li>
                                        <div className="modeswitch-wrap" id="darkModeSwitch">
                                            <div className="modeswitch-item">
                                                <div className="modeswitch-icon"></div>
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


                <div className="container">
                    <div className="row g-4">


                        <div className="col-lg-8 vstack gap-4">

                            <div className="card">
                                <div className="h-200px rounded-top"
                                     style={{backgroundimage:"url(assets/images/bg/05.jpg)", backgroundposition: "center", backgroundsize: "cover", backgroundrepeat: "no-repeat"}}></div>

                                <div className="card-body py-0">
                                    <div className="d-sm-flex align-items-start text-center text-sm-start">
                                        <div>

                                            <div className="avatar avatar-xxl mt-n5 mb-3">
                                                <img className="avatar-img rounded-circle border border-white border-3"
                                                     src="assets/images/avatar/07.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="ms-sm-4 mt-sm-3">

                                            <h1 className="mb-0 h5">Sam Lanson <i
                                                className="bi bi-patch-check-fill text-success small"></i></h1>
                                            <p>250 connections</p>
                                        </div>

                                        <div className="d-flex mt-3 justify-content-center ms-sm-auto">
                                            <div className="dropdown">
                                                <button className="icon-md btn btn-light" type="button"
                                                        id="profileAction2" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                    <i className="bi bi-three-dots"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="profileAction2">
                                                    <li><a className="dropdown-item" href="#"> <i
                                                        className="bi bi-lock fa-fw pe-2"></i>Change profile</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                                        <li className="list-inline-item"><i
                                            className="bi bi-calendar2-plus me-1"></i> Joined on Nov 26, 2019
                                        </li>
                                    </ul>
                                </div>

                                <div className="card-footer mt-3 pt-2 pb-0">

                                    <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                                        <li className="nav-item"><Link className="nav-link"
                                                                       to={"/home/myTimeLine"}> Posts </Link></li>
                                        <li className="nav-item"><Link className="nav-link active"
                                                                       to={""}> About </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">

                                <div className="card-header border-0 pb-0">
                                    <h5 className="card-title"> Profile Info</h5>
                                </div>

                                <div className="card-body">
                                    <div className="rounded border px-3 py-2 mb-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6>Overview</h6>
                                            <div className="dropdown ms-auto">

                                                <a className="nav-link text-secondary mb-0" href="#" id="aboutAction"
                                                   data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots"></i>
                                                </a>

                                                <ul className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="aboutAction">
                                                    <li><a className="dropdown-item" href="#"> <i
                                                        className="bi bi-pencil-square fa-fw pe-2"></i>Edit</a></li>
                                                    <li><a className="dropdown-item" href="#"> <i
                                                        className="bi bi-trash fa-fw pe-2"></i>Delete</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>He moonlights difficult engrossed it, sportsmen. Interested has all
                                            Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling
                                            age material. As style lived he worse dried. Offered related so visitors we
                                            private removed. Moderate do subjects to distance. </p>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-calendar-date fa-fw me-2"></i> Born: <strong> October
                                                    20, 1990 </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <a className="nav-link text-secondary mb-0" href="#"
                                                       id="aboutAction2" data-bs-toggle="dropdown"
                                                       aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </a>

                                                    <ul className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="aboutAction2">
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-pencil-square fa-fw pe-2"></i>Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-trash fa-fw pe-2"></i>Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-heart fa-fw me-2"></i> Status: <strong> Single </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <a className="nav-link text-secondary mb-0" href="#"
                                                       id="aboutAction3" data-bs-toggle="dropdown"
                                                       aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </a>

                                                    <ul className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="aboutAction3">
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-pencil-square fa-fw pe-2"></i>Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-trash fa-fw pe-2"></i>Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-briefcase fa-fw me-2"></i> <strong> Lead
                                                    Developer </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <a className="nav-link text-secondary mb-0" href="#"
                                                       id="aboutAction4" data-bs-toggle="dropdown"
                                                       aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </a>

                                                    <ul className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="aboutAction4">
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-pencil-square fa-fw pe-2"></i>Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-trash fa-fw pe-2"></i>Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-geo-alt fa-fw me-2"></i> Lives in: <strong> New
                                                    Hampshire </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <a className="nav-link text-secondary mb-0" href="#"
                                                       id="aboutAction5" data-bs-toggle="dropdown"
                                                       aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </a>

                                                    <ul className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="aboutAction5">
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-pencil-square fa-fw pe-2"></i>Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-trash fa-fw pe-2"></i>Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-geo-alt fa-fw me-2"></i> Joined on: <strong> Nov
                                                    26, 2019 </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <a className="nav-link text-secondary mb-0" href="#"
                                                       id="aboutAction6" data-bs-toggle="dropdown"
                                                       aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </a>

                                                    <ul className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="aboutAction6">
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-pencil-square fa-fw pe-2"></i>Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-trash fa-fw pe-2"></i>Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-envelope fa-fw me-2"></i> Email: <strong> webestica@gmail.com </strong>
                                                </p>
                                                <div className="dropdown ms-auto">

                                                    <a className="nav-link text-secondary mb-0" href="#"
                                                       id="aboutAction7" data-bs-toggle="dropdown"
                                                       aria-expanded="false">
                                                        <i className="bi bi-three-dots"></i>
                                                    </a>

                                                    <ul className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="aboutAction7">
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-pencil-square fa-fw pe-2"></i>Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"> <i
                                                            className="bi bi-trash fa-fw pe-2"></i>Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div className="row g-4">


                                <div className="col-sm-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header border-0 pb-0">
                                            <h5 className="card-title">About</h5>

                                        </div>

                                        <div className="card-body position-relative pt-0">
                                            <p>He moonlights difficult engrossed it, sportsmen. Interested has all
                                                Devonshire difficulty gay assistance joy.</p>
                                            <ul className="list-unstyled mt-3 mb-0">
                                                <li className="mb-2"><i
                                                    className="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> October
                                                    20, 1990 </strong></li>
                                                <li className="mb-2"><i
                                                    className="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong>
                                                </li>
                                                <li><i
                                                    className="bi bi-envelope fa-fw pe-1"></i> Email: <strong> webestica@gmail.com </strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-12">
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
                                                                className="bi bi-person-x"></i></button>
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
                                                                className="bi bi-person-x"></i></button>
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
                                                                className="bi bi-person-x"></i></button>
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
                                                                className="bi bi-person-x"></i></button>
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
        </>
    )
}

export default About;
