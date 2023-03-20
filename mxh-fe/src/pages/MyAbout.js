import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";

import {useDispatch, useSelector} from "react-redux";
import {AccountsEdit, searchOtherAccount} from "../services/AccountService";

import {useParams} from "react-router-dom";
import swal from "sweetalert";


const MyAbout = () => {
    // const {idAccount} = useParams()
    // const [check, setCheck] = useState(false);
    // const [editInfo, setEditInfo] = useState(false);
    // const dispatch = useDispatch()
    // const account = useSelector(state => {
    //     return state.account.currentAccount
    // })
    //
    // const otherAccount = useSelector(state => {
    //     return state.account.otherAccount
    // })
    //
    // useEffect(() => {
    //     dispatch(searchOtherAccount(idAccount));
    //     if (idAccount == account.idAccount) {
    //         setEditInfo(true)
    //     }
    // }, [])
    //
    //
    // return (
    //     <>
    //         <main>
    //             <div className="container">
    //                 <div className="row g-4">
    //                     <div className="col-lg-8 vstack gap-4">
    //                         <div className="card">
    //                             <div className="h-200px rounded-top"
    //                                  style="background-image:url(assets/images/bg/05.jpg); background-position: center; background-size: cover; background-repeat: no-repeat;"></div>
    //                             <div className="card-body py-0">
    //                                 <div className="d-sm-flex align-items-start text-center text-sm-start">
    //                                     <div>
    //                                         <div className="avatar avatar-xxl mt-n5 mb-3">
    //                                             <img className="avatar-img rounded-circle border border-white border-3"
    //                                                  src="assets/images/avatar/07.jpg" alt=""/>
    //                                         </div>
    //                                     </div>
    //                                     <div className="ms-sm-4 mt-sm-3">
    //                                         <h1 className="mb-0 h5">Sam Lanson <i
    //                                             className="bi bi-patch-check-fill text-success small"></i></h1>
    //                                         <p>250 connections</p>
    //                                     </div>
    //                                     <div className="d-flex mt-3 justify-content-center ms-sm-auto">
    //                                         <button className="btn btn-danger-soft me-2" type="button"><i
    //                                             className="bi bi-pencil-fill pe-1"></i> Edit profile
    //                                         </button>
    //                                         <div className="dropdown">
    //                                             <button className="icon-md btn btn-light" type="button"
    //                                                     id="profileAction2"
    //                                                     data-bs-toggle="dropdown" aria-expanded="false">
    //                                                 <i className="bi bi-three-dots"></i>
    //                                             </button>
    //                                             <ul className="dropdown-menu dropdown-menu-end"
    //                                                 aria-labelledby="profileAction2">
    //                                                 <li><a className="dropdown-item" href="#"> <i
    //                                                     className="bi bi-bookmark fa-fw pe-2"></i>Share profile in a
    //                                                     message</a>
    //                                                 </li>
    //                                                 <li><a className="dropdown-item" href="#"> <i
    //                                                     className="bi bi-file-earmark-pdf fa-fw pe-2"></i>Save your
    //                                                     profile
    //                                                     to PDF</a></li>
    //                                                 <li><a className="dropdown-item" href="#"> <i
    //                                                     className="bi bi-lock fa-fw pe-2"></i>Lock profile</a></li>
    //                                                 <li>
    //                                                     <hr className="dropdown-divider"/>
    //                                                 </li>
    //                                                 <li><a className="dropdown-item" href="#"> <i
    //                                                     className="bi bi-gear fa-fw pe-2"></i>Profile settings</a></li>
    //                                             </ul>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
    //                                     <li className="list-inline-item"><i className="bi bi-briefcase me-1"></i> Lead
    //                                         Developer
    //                                     </li>
    //                                     <li className="list-inline-item"><i className="bi bi-geo-alt me-1"></i> New
    //                                         Hampshire
    //                                     </li>
    //                                     <li className="list-inline-item"><i
    //                                         className="bi bi-calendar2-plus me-1"></i> Joined on Nov 26, 2019
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                             <div className="card-footer mt-3 pt-2 pb-0">
    //                                 <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
    //                                     <li className="nav-item"><a className="nav-link active"
    //                                                                 href="my-profile.html"> Posts </a></li>
    //                                     <li className="nav-item"><a className="nav-link"
    //                                                                 href="my-profile-about.html"> About </a></li>
    //                                     <li className="nav-item"><a className="nav-link"
    //                                                                 href="my-profile-connections.html"> Connections <span
    //                                         className="badge bg-success bg-opacity-10 text-success small"> 230</span>
    //                                     </a>
    //                                     </li>
    //                                     <li className="nav-item"><a className="nav-link"
    //                                                                 href="my-profile-media.html"> Media</a></li>
    //                                     <li className="nav-item"><a className="nav-link"
    //                                                                 href="my-profile-videos.html"> Videos</a></li>
    //                                     <li className="nav-item"><a className="nav-link"
    //                                                                 href="my-profile-events.html"> Events</a></li>
    //                                     <li className="nav-item"><a className="nav-link"
    //                                                                 href="my-profile-activity.html"> Activity</a></li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                         <div className="card card-body">
    //                             <div className="d-flex mb-3">
    //                                 <div className="avatar avatar-xs me-2">
    //                                     <a href="#"> <img className="avatar-img rounded-circle"
    //                                                       src="assets/images/avatar/07.jpg" alt=""/> </a>
    //                                 </div>
    //                                 <form className="w-100">
    //                                     <input className="form-control pe-4 border-0"
    //                                            placeholder="Share your thoughts..."
    //                                            data-bs-toggle="modal" data-bs-target="#modalCreateFeed"/>
    //                                 </form>
    //                             </div>
    //                             <ul className="nav nav-pills nav-stack small fw-normal">
    //                                 <li className="nav-item">
    //                                     <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal"
    //                                        data-bs-target="#feedActionPhoto"> <i
    //                                         className="bi bi-image-fill text-success pe-2"></i>Photo</a>
    //                                 </li>
    //                                 <li className="nav-item">
    //                                     <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal"
    //                                        data-bs-target="#feedActionVideo"> <i
    //                                         className="bi bi-camera-reels-fill text-info pe-2"></i>Video</a>
    //                                 </li>
    //                                 <li className="nav-item">
    //                                     <a href="#" className="nav-link bg-light py-1 px-2 mb-0" data-bs-toggle="modal"
    //                                        data-bs-target="#modalCreateEvents"> <i
    //                                         className="bi bi-calendar2-event-fill text-danger pe-2"></i>Event </a>
    //                                 </li>
    //                                 <li className="nav-item">
    //                                     <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal"
    //                                        data-bs-target="#modalCreateFeed"> <i
    //                                         className="bi bi-emoji-smile-fill text-warning pe-2"></i>Feeling
    //                                         /Activity</a>
    //                                 </li>
    //                                 <li className="nav-item dropdown ms-sm-auto">
    //                                     <a className="nav-link bg-light py-1 px-2 mb-0" href="#" id="feedActionShare"
    //                                        data-bs-toggle="dropdown" aria-expanded="false">
    //                                         <i className="bi bi-three-dots"></i>
    //                                     </a>
    //                                     <ul className="dropdown-menu dropdown-menu-end"
    //                                         aria-labelledby="feedActionShare">
    //                                         <li><a className="dropdown-item" href="#"> <i
    //                                             className="bi bi-envelope fa-fw pe-2"></i>Create a poll</a></li>
    //                                         <li><a className="dropdown-item" href="#"> <i
    //                                             className="bi bi-bookmark-check fa-fw pe-2"></i>Ask a question </a></li>
    //                                         <li>
    //                                             <hr className="dropdown-divider"/>
    //                                         </li>
    //                                         <li><a className="dropdown-item" href="#"> <i
    //                                             className="bi bi-pencil-square fa-fw pe-2"></i>Help</a></li>
    //                                     </ul>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                         <div className="card">
    //                             <div className="card-header border-0 pb-0">
    //                                 <div className="d-flex align-items-center justify-content-between">
    //                                     <div className="d-flex align-items-center">
    //                                         <div className="avatar avatar-story me-2">
    //                                             <a href="#!"> <img className="avatar-img rounded-circle"
    //                                                                src="assets/images/avatar/04.jpg" alt=""/> </a>
    //                                         </div>
    //                                         <div>
    //                                             <div className="nav nav-divider">
    //                                                 <h6 className="nav-item card-title mb-0"><a href="#!"> Lori
    //                                                     Ferguson </a></h6>
    //                                                 <span className="nav-item small"> 2hr</span>
    //                                             </div>
    //                                             <p className="mb-0 small">Web Developer at Webestica</p>
    //                                         </div>
    //                                     </div>
    //                                     <div className="dropdown">
    //                                         <a href="#"
    //                                            className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
    //                                            id="cardFeedAction1" data-bs-toggle="dropdown" aria-expanded="false">
    //                                             <i className="bi bi-three-dots"></i>
    //                                         </a>
    //                                         <ul className="dropdown-menu dropdown-menu-end"
    //                                             aria-labelledby="cardFeedAction1">
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-bookmark fa-fw pe-2"></i>Save post</a></li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson
    //                                             </a>
    //                                             </li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-x-circle fa-fw pe-2"></i>Hide post</a></li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-slash-circle fa-fw pe-2"></i>Block</a></li>
    //                                             <li>
    //                                                 <hr className="dropdown-divider"/>
    //                                             </li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
    //                                         </ul>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="card-body">
    //                                 <p>I'm thrilled to share that I've completed a graduate certificate course in
    //                                     project
    //                                     management with the president's honor roll.</p>
    //                                 <img className="card-img" src="assets/images/post/3by2/01.jpg" alt="Post"/>
    //                                 <ul className="nav nav-stack py-3 small">
    //                                     <li className="nav-item">
    //                                         <a className="nav-link active" href="#!"> <i
    //                                             className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a>
    //                                     </li>
    //                                     <li className="nav-item">
    //                                         <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments
    //                                             (12)</a>
    //                                     </li>
    //                                     <li className="nav-item dropdown ms-sm-auto">
    //                                         <a className="nav-link mb-0" href="#" id="cardShareAction8"
    //                                            data-bs-toggle="dropdown" aria-expanded="false">
    //                                             <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
    //                                         </a>
    //                                         <ul className="dropdown-menu dropdown-menu-end"
    //                                             aria-labelledby="cardShareAction8">
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-envelope fa-fw pe-2"></i>Send via Direct
    //                                                 Message</a></li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
    //                                             <li>
    //                                                 <hr className="dropdown-divider"/>
    //                                             </li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-pencil-square fa-fw pe-2"></i>Share to News
    //                                                 Feed</a></li>
    //                                         </ul>
    //                                     </li>
    //                                 </ul>
    //                                 <div className="d-flex mb-3">
    //                                     <div className="avatar avatar-xs me-2">
    //                                         <a href="#!"> <img className="avatar-img rounded-circle"
    //                                                            src="assets/images/avatar/12.jpg" alt=""/> </a>
    //                                     </div>
    //                                     <form className="position-relative w-100">
    //                                         <textarea className="form-control pe-4 bg-light" rows="1"
    //                                                   placeholder="Add a comment..."></textarea>
    //                                     </form>
    //                                 </div>
    //                                 <ul className="comment-wrap list-unstyled">
    //                                     <li className="comment-item">
    //                                         <div className="d-flex position-relative">
    //                                             <div className="avatar avatar-xs">
    //                                                 <a href="#!"><img className="avatar-img rounded-circle"
    //                                                                   src="assets/images/avatar/05.jpg" alt=""/></a>
    //                                             </div>
    //                                             <div className="ms-2">
    //                                                 <div className="bg-light rounded-start-top-0 p-3 rounded">
    //                                                     <div className="d-flex justify-content-between">
    //                                                         <h6 className="mb-1"><a href="#!"> Frances Guerrero </a>
    //                                                         </h6>
    //                                                         <small className="ms-2">5hr</small>
    //                                                     </div>
    //                                                     <p className="small mb-0">Removed demands expense account in
    //                                                         outward tedious do. Particular way thoroughly unaffected
    //                                                         projection.</p>
    //                                                 </div>
    //                                                 <ul className="nav nav-divider py-2 small">
    //                                                     <li className="nav-item">
    //                                                         <a className="nav-link" href="#!"> Like (3)</a>
    //                                                     </li>
    //                                                     <li className="nav-item">
    //                                                         <a className="nav-link" href="#!"> Reply</a>
    //                                                     </li>
    //                                                     <li className="nav-item">
    //                                                         <a className="nav-link" href="#!"> View 5 replies</a>
    //                                                     </li>
    //                                                 </ul>
    //                                             </div>
    //                                         </div>
    //                                         <ul className="comment-item-nested list-unstyled">
    //                                             <li className="comment-item">
    //                                                 <div className="d-flex">
    //                                                     <div className="avatar avatar-xs">
    //                                                         <a href="#!"><img className="avatar-img rounded-circle"
    //                                                                           src="assets/images/avatar/06.jpg" alt=""/></a>
    //                                                     </div>
    //                                                     <div className="ms-2">
    //                                                         <div className="bg-light p-3 rounded">
    //                                                             <div className="d-flex justify-content-between">
    //                                                                 <h6 className="mb-1"><a href="#!"> Lori Stevens </a>
    //                                                                 </h6>
    //                                                                 <small className="ms-2">2hr</small>
    //                                                             </div>
    //                                                             <p className="small mb-0">See resolved goodness felicity
    //                                                                 shy civility domestic had but Drawings offended yet
    //                                                                 answered Jennings perceive.</p>
    //                                                         </div>
    //                                                         <ul className="nav nav-divider py-2 small">
    //                                                             <li className="nav-item">
    //                                                                 <a className="nav-link" href="#!"> Like (5)</a>
    //                                                             </li>
    //                                                             <li className="nav-item">
    //                                                                 <a className="nav-link" href="#!"> Reply</a>
    //                                                             </li>
    //                                                         </ul>
    //                                                     </div>
    //                                                 </div>
    //                                             </li>
    //                                             <li className="comment-item">
    //                                                 <div className="d-flex">
    //                                                     <div className="avatar avatar-story avatar-xs">
    //                                                         <a href="#!"><img className="avatar-img rounded-circle"
    //                                                                           src="assets/images/avatar/07.jpg" alt=""/></a>
    //                                                     </div>
    //                                                     <div className="ms-2">
    //                                                         <div className="bg-light p-3 rounded">
    //                                                             <div className="d-flex justify-content-between">
    //                                                                 <h6 className="mb-1"><a href="#!"> Billy
    //                                                                     Vasquez </a></h6>
    //                                                                 <small className="ms-2">15min</small>
    //                                                             </div>
    //                                                             <p className="small mb-0">Wishing calling is warrant
    //                                                                 settled was lucky.</p>
    //                                                         </div>
    //                                                         <ul className="nav nav-divider py-2 small">
    //                                                             <li className="nav-item">
    //                                                                 <a className="nav-link" href="#!"> Like</a>
    //                                                             </li>
    //                                                             <li className="nav-item">
    //                                                                 <a className="nav-link" href="#!"> Reply</a>
    //                                                             </li>
    //                                                         </ul>
    //                                                     </div>
    //                                                 </div>
    //                                             </li>
    //                                         </ul>
    //                                         <a href="#!" role="button"
    //                                            className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
    //                                            data-bs-toggle="button" aria-pressed="true">
    //                                             <div className="spinner-dots me-2">
    //                                                 <span className="spinner-dot"></span>
    //                                                 <span className="spinner-dot"></span>
    //                                                 <span className="spinner-dot"></span>
    //                                             </div>
    //                                             Load more replies
    //                                         </a>
    //                                     </li>
    //                                     <li className="comment-item">
    //                                         <div className="d-flex">
    //                                             <div className="avatar avatar-xs">
    //                                                 <a href="#!"><img className="avatar-img rounded-circle"
    //                                                                   src="assets/images/avatar/05.jpg" alt=""/></a>
    //                                             </div>
    //                                             <div className="ms-2">
    //                                                 <div className="bg-light p-3 rounded">
    //                                                     <div className="d-flex justify-content-between">
    //                                                         <h6 className="mb-1"><a href="#!"> Frances Guerrero </a>
    //                                                         </h6>
    //                                                         <small className="ms-2">4min</small>
    //                                                     </div>
    //                                                     <p className="small mb-0">Removed demands expense account in
    //                                                         outward tedious do. Particular way thoroughly unaffected
    //                                                         projection.</p>
    //                                                 </div>
    //                                                 <ul className="nav nav-divider pt-2 small">
    //                                                     <li className="nav-item">
    //                                                         <a className="nav-link" href="#!"> Like (1)</a>
    //                                                     </li>
    //                                                     <li className="nav-item">
    //                                                         <a className="nav-link" href="#!"> Reply</a>
    //                                                     </li>
    //                                                     <li className="nav-item">
    //                                                         <a className="nav-link" href="#!"> View 6 replies</a>
    //                                                     </li>
    //                                                 </ul>
    //                                             </div>
    //                                         </div>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                             <div className="card-footer border-0 pt-0">
    //                                 <a href="#!" role="button"
    //                                    className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
    //                                    data-bs-toggle="button" aria-pressed="true">
    //                                     <div className="spinner-dots me-2">
    //                                         <span className="spinner-dot"></span>
    //                                         <span className="spinner-dot"></span>
    //                                         <span className="spinner-dot"></span>
    //                                     </div>
    //                                     Load more comments
    //                                 </a>
    //                             </div>
    //                         </div>
    //                         <div className="card">
    //                             <div className="border-bottom">
    //                                 <p className="small mb-0 px-4 py-2"><i
    //                                     className="bi bi-heart-fill text-danger pe-1"></i>Sam Lanson likes this post</p>
    //                             </div>
    //                             <div className="card-header border-0 pb-0">
    //                                 <div className="d-flex align-items-center justify-content-between">
    //                                     <div className="d-flex align-items-center">
    //                                         <div className="avatar me-2">
    //                                             <a href="#"> <img className="avatar-img rounded-circle"
    //                                                               src="assets/images/logo/13.svg" alt=""/> </a>
    //                                         </div>
    //                                         <div>
    //                                             <h6 className="card-title mb-0"><a href="#!"> Apple Education </a></h6>
    //                                             <p className="mb-0 small">9 November at 23:29</p>
    //                                         </div>
    //                                     </div>
    //                                     <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
    //                                        id="cardShareAction5" data-bs-toggle="dropdown" aria-expanded="false">
    //                                         <i className="bi bi-three-dots"></i>
    //                                     </a>
    //                                     <ul className="dropdown-menu dropdown-menu-end"
    //                                         aria-labelledby="cardShareAction5">
    //                                         <li><a className="dropdown-item" href="#"> <i
    //                                             className="bi bi-bookmark fa-fw pe-2"></i>Save post</a></li>
    //                                         <li><a className="dropdown-item" href="#"> <i
    //                                             className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </a>
    //                                         </li>
    //                                         <li><a className="dropdown-item" href="#"> <i
    //                                             className="bi bi-x-circle fa-fw pe-2"></i>Hide post</a></li>
    //                                         <li><a className="dropdown-item" href="#"> <i
    //                                             className="bi bi-slash-circle fa-fw pe-2"></i>Block</a></li>
    //                                         <li>
    //                                             <hr className="dropdown-divider"/>
    //                                         </li>
    //                                         <li><a className="dropdown-item" href="#"> <i
    //                                             className="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
    //                                     </ul>
    //                                 </div>
    //                             </div>
    //                             <div className="card-body pb-0">
    //                                 <p>Find out how you can save time in the classroom this year. Earn recognition while
    //                                     you
    //                                     learn new skills on iPad and Mac. Start recognition your first Apple Teacher
    //                                     badge
    //                                     today!</p>
    //                                 <ul className="nav nav-stack pb-2 small">
    //                                     <li className="nav-item">
    //                                         <a className="nav-link active text-secondary" href="#!"> <i
    //                                             className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i> Louis,
    //                                             Billy and 126 others </a>
    //                                     </li>
    //                                     <li className="nav-item ms-sm-auto">
    //                                         <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1"></i>Comments
    //                                             (12)</a>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                             <div className="card-footer py-3">
    //                                 <ul className="nav nav-fill nav-stack small">
    //                                     <li className="nav-item">
    //                                         <a className="nav-link mb-0 active" href="#!"> <i
    //                                             className="bi bi-heart pe-1"></i>Liked (56)</a>
    //                                     </li>
    //                                     <li className="nav-item">
    //                                         <a className="nav-link mb-0" href="#!"> <i
    //                                             className="bi bi-chat-fill pe-1"></i>Comments
    //                                             (12)</a>
    //                                     </li>
    //                                     <li className="nav-item dropdown">
    //                                         <a href="#" className="nav-link mb-0" id="cardShareAction6"
    //                                            data-bs-toggle="dropdown" aria-expanded="false">
    //                                             <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
    //                                         </a>
    //                                         <ul className="dropdown-menu dropdown-menu-end"
    //                                             aria-labelledby="cardShareAction6">
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-envelope fa-fw pe-2"></i>Send via Direct
    //                                                 Message</a>
    //                                             </li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
    //                                             <li>
    //                                                 <hr className="dropdown-divider"/>
    //                                             </li>
    //                                             <li><a className="dropdown-item" href="#"> <i
    //                                                 className="bi bi-pencil-square fa-fw pe-2"></i>Share to News
    //                                                 Feed</a>
    //                                             </li>
    //                                         </ul>
    //                                     </li>
    //                                     <li className="nav-item">
    //                                         <a className="nav-link mb-0" href="#!"> <i
    //                                             className="bi bi-send-fill pe-1"></i>Send</a>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="col-lg-4">
    //                         <div className="row g-4">
    //                             <div className="col-md-6 col-lg-12">
    //                                 <div className="card">
    //                                     <div className="card-header border-0 pb-0">
    //                                         <h5 className="card-title">About</h5>
    //                                     </div>
    //                                     <div className="card-body position-relative pt-0">
    //                                         <p>He moonlights difficult engrossed it, sportsmen. Interested has all
    //                                             Devonshire difficulty gay assistance joy.</p>
    //                                         <ul className="list-unstyled mt-3 mb-0">
    //                                             <li className="mb-2"><i
    //                                                 className="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> October
    //                                                 20, 1990 </strong></li>
    //                                             <li className="mb-2"><i
    //                                                 className="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong>
    //                                             </li>
    //                                             <li><i
    //                                                 className="bi bi-envelope fa-fw pe-1"></i> Email: <strong> webestica@gmail.com </strong>
    //                                             </li>
    //                                         </ul>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="col-md-6 col-lg-12">
    //                                 <div className="card">
    //
    //                                     <div className="card-header d-flex justify-content-between border-0">
    //                                         <h5 className="card-title">Experience</h5>
    //                                         <a className="btn btn-primary-soft btn-sm" href="#!"> <i
    //                                             className="fa-solid fa-plus"></i> </a>
    //                                     </div>
    //                                     <div className="card-body position-relative pt-0">
    //                                         <div className="d-flex">
    //                                             <div className="avatar me-3">
    //                                                 <a href="#!"> <img className="avatar-img rounded-circle"
    //                                                                    src="assets/images/logo/08.svg" alt=""/> </a>
    //                                             </div>
    //                                             <div>
    //                                                 <h6 className="card-title mb-0"><a href="#!"> Apple Computer,
    //                                                     Inc. </a>
    //                                                 </h6>
    //                                                 <p className="small">May 2015 – Present Employment Duration 8 mos <a
    //                                                     className="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a>
    //                                                 </p>
    //                                             </div>
    //                                         </div>
    //                                         <div className="d-flex">
    //                                             <div className="avatar me-3">
    //                                                 <a href="#!"> <img className="avatar-img rounded-circle"
    //                                                                    src="assets/images/logo/09.svg" alt=""/> </a>
    //                                             </div>
    //
    //                                             <div>
    //                                                 <h6 className="card-title mb-0"><a href="#!"> Microsoft
    //                                                     Corporation </a>
    //                                                 </h6>
    //                                                 <p className="small">May 2017 – Present Employment Duration 1 yrs 5
    //                                                     mos <a className="btn btn-primary-soft btn-xs ms-2"
    //                                                            href="#!">Edit </a></p>
    //                                             </div>
    //                                         </div>
    //                                         <div className="d-flex">
    //                                             <div className="avatar me-3">
    //                                                 <a href="#!"> <img className="avatar-img rounded-circle"
    //                                                                    src="assets/images/logo/10.svg" alt=""/> </a>
    //                                             </div>
    //                                             <div>
    //                                                 <h6 className="card-title mb-0"><a href="#!"> Tata Consultancy
    //                                                     Services. </a></h6>
    //                                                 <p className="small mb-0">May 2022 – Present Employment Duration 6
    //                                                     yrs
    //                                                     10 mos <a className="btn btn-primary-soft btn-xs ms-2"
    //                                                               href="#!">Edit </a></p>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="col-md-6 col-lg-12">
    //                                 <div className="card">
    //                                     <div className="card-header d-sm-flex justify-content-between border-0">
    //                                         <h5 className="card-title">Photos</h5>
    //                                         <a className="btn btn-primary-soft btn-sm" href="#!"> See all photo</a>
    //                                     </div>
    //                                     <div className="card-body position-relative pt-0">
    //                                         <div className="row g-2">
    //                                             <div className="col-6">
    //                                                 <a href="assets/images/albums/01.jpg" data-gallery="image-popup"
    //                                                    data-glightbox="">
    //                                                     <img className="rounded img-fluid"
    //                                                          src="assets/images/albums/01.jpg"
    //                                                          alt=""/>
    //                                                 </a>
    //                                             </div>
    //                                             <div className="col-6">
    //                                                 <a href="assets/images/albums/02.jpg" data-gallery="image-popup"
    //                                                    data-glightbox="">
    //                                                     <img className="rounded img-fluid"
    //                                                          src="assets/images/albums/02.jpg"
    //                                                          alt=""/>
    //                                                 </a>
    //                                             </div>
    //                                             <div className="col-4">
    //                                                 <a href="assets/images/albums/03.jpg" data-gallery="image-popup"
    //                                                    data-glightbox="">
    //                                                     <img className="rounded img-fluid"
    //                                                          src="assets/images/albums/03.jpg"
    //                                                          alt=""/>
    //                                                 </a>
    //                                             </div>
    //                                             <div className="col-4">
    //                                                 <a href="assets/images/albums/04.jpg" data-gallery="image-popup"
    //                                                    data-glightbox="">
    //                                                     <img className="rounded img-fluid"
    //                                                          src="assets/images/albums/04.jpg"
    //                                                          alt=""/>
    //                                                 </a>
    //                                             </div>
    //                                             <div className="col-4">
    //                                                 <a href="assets/images/albums/05.jpg" data-gallery="image-popup"
    //                                                    data-glightbox="">
    //                                                     <img className="rounded img-fluid"
    //                                                          src="assets/images/albums/05.jpg"
    //                                                          alt=""/>
    //                                                 </a>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="col-md-6 col-lg-12">
    //                                 <div className="card">
    //                                     <div
    //                                         className="card-header d-sm-flex justify-content-between align-items-center border-0">
    //                                         <h5 className="card-title">Friends <span
    //                                             className="badge bg-danger bg-opacity-10 text-danger">230</span></h5>
    //                                         <a className="btn btn-primary-soft btn-sm" href="#!"> See all friends</a>
    //                                     </div>
    //                                     <div className="card-body position-relative pt-0">
    //                                         <div className="row g-3">
    //
    //                                             <div className="col-6">
    //                                                 <div className="card shadow-none text-center h-100">
    //                                                     <div className="card-body p-2 pb-0">
    //                                                         <div className="avatar avatar-story avatar-xl">
    //                                                             <a href="#!"><img className="avatar-img rounded-circle"
    //                                                                               src="assets/images/avatar/02.jpg"
    //                                                                               alt=""/></a>
    //                                                         </div>
    //                                                         <h6 className="card-title mb-1 mt-3"><a href="#!"> Amanda
    //                                                             Reed </a></h6>
    //                                                         <p className="mb-0 small lh-sm">16 mutual connections</p>
    //                                                     </div>
    //                                                     <div className="card-footer p-2 border-0">
    //                                                         <button className="btn btn-sm btn-primary"
    //                                                                 data-bs-toggle="tooltip" data-bs-placement="top"
    //                                                                 title="Send message"><i
    //                                                             className="bi bi-chat-left-text"></i></button>
    //                                                         <button className="btn btn-sm btn-danger"
    //                                                                 data-bs-toggle="tooltip" data-bs-placement="top"
    //                                                                 title="Remove friend"><i
    //                                                             className="bi bi-person-x"></i>
    //                                                         </button>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="col-6">
    //                                                 <div className="card shadow-none text-center h-100">
    //                                                     <div className="card-body p-2 pb-0">
    //                                                         <div className="avatar avatar-xl">
    //                                                             <a href="#!"><img className="avatar-img rounded-circle"
    //                                                                               src="assets/images/avatar/03.jpg"
    //                                                                               alt=""/></a>
    //                                                         </div>
    //                                                         <h6 className="card-title mb-1 mt-3"><a href="#!"> Samuel
    //                                                             Bishop </a></h6>
    //                                                         <p className="mb-0 small lh-sm">22 mutual connections</p>
    //                                                     </div>
    //                                                     <div className="card-footer p-2 border-0">
    //                                                         <button className="btn btn-sm btn-primary"
    //                                                                 data-bs-toggle="tooltip" data-bs-placement="top"
    //                                                                 title="Send message"><i
    //                                                             className="bi bi-chat-left-text"></i></button>
    //                                                         <button className="btn btn-sm btn-danger"
    //                                                                 data-bs-toggle="tooltip" data-bs-placement="top"
    //                                                                 title="Remove friend"><i
    //                                                             className="bi bi-person-x"></i>
    //                                                         </button>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="col-6">
    //                                                 <div className="card shadow-none text-center h-100">
    //                                                     <div className="card-body p-2 pb-0">
    //                                                         <div className="avatar avatar-xl">
    //                                                             <a href="#!"><img className="avatar-img rounded-circle"
    //                                                                               src="assets/images/avatar/04.jpg"
    //                                                                               alt=""/></a>
    //                                                         </div>
    //                                                         <h6 className="card-title mb-1 mt-3"><a href="#"> Bryan
    //                                                             Knight </a></h6>
    //                                                         <p className="mb-0 small lh-sm">1 mutual connection</p>
    //                                                     </div>
    //                                                     <div className="card-footer p-2 border-0">
    //                                                         <button className="btn btn-sm btn-primary"
    //                                                                 data-bs-toggle="tooltip" data-bs-placement="top"
    //                                                                 title="Send message"><i
    //                                                             className="bi bi-chat-left-text"></i></button>
    //                                                         <button className="btn btn-sm btn-danger"
    //                                                                 data-bs-toggle="tooltip" data-bs-placement="top"
    //                                                                 title="Remove friend"><i
    //                                                             className="bi bi-person-x"></i>
    //                                                         </button>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="col-6">
    //                                                 <div className="card shadow-none text-center h-100">
    //                                                     <div className="card-body p-2 pb-0">
    //                                                         <div className="avatar avatar-xl">
    //                                                             <a href="#!"><img className="avatar-img rounded-circle"
    //                                                                               src="assets/images/avatar/05.jpg"
    //                                                                               alt=""/></a>
    //                                                         </div>
    //                                                         <h6 className="card-title mb-1 mt-3"><a href="#!"> Amanda
    //                                                             Reed </a></h6>
    //                                                         <p className="mb-0 small lh-sm">15 mutual connections</p>
    //                                                     </div>
    //                                                     <div className="card-footer p-2 border-0">
    //                                                         <button className="btn btn-sm btn-primary"
    //                                                                 data-bs-toggle="tooltip" data-bs-placement="top"
    //                                                                 title="Send message"><i
    //                                                             className="bi bi-chat-left-text"></i></button>
    //                                                         <button className="btn btn-sm btn-danger"
    //                                                                 data-bs-toggle="tooltip" data-bs-placement="top"
    //                                                                 title="Remove friend"><i
    //                                                             className="bi bi-person-x"></i>
    //                                                         </button>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </main>
    //     </>
    // )
}

export default MyAbout;
