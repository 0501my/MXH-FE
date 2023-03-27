import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, findByIdAccount} from "../services/PostService";
import {deleteFriend, getFriends} from "../services/FriendService";
import DeletePost from "./posts/DeletePost";


const MyTimeLine = () => {

    const posts = useSelector(state => {
        console.log(state,233)
        return state.posts.posts
    });


    const account = useSelector(state => {
        return state.account.currentAccount
    })

    const friends = useSelector(state => {
        return state.friends.friends
    })

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(findByIdAccount(account.idAccount));
        dispatch(getFriends(account.idAccount))
    }, [])



    return (
        <>

            <main className="MyTimeLineWrapper">
                <div className="container">
                    <div className="row g-4">


                        <div className="col-lg-8 vstack gap-4">

                            <div className="card">

                                <div className="h-200px rounded-top" style=
                                    {{  backgroundImage: "url(/assets/images/building-6822998.jpg)",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat"}}></div>

                                <div className="card-body py-0">
                                    <div className="d-sm-flex align-items-start text-center text-sm-start">
                                        <div>

                                            <div className="avatar avatar-xxl mt-n5 mb-3">
                                                <img className="avatar-img rounded-circle border border-white border-3" src={account.avatar} alt=""/>
                                            </div>
                                        </div>
                                        <div className="ms-sm-4 mt-sm-3">

                                            <h1 className="mb-0 h5">{account.name} <i className="bi bi-patch-check-fill text-success small"></i></h1>
                                            <p>250 connections</p>
                                        </div>

                                        <div className="d-flex mt-3 justify-content-center ms-sm-auto">
                                            <div className="dropdown">

                                                <button className="icon-md btn btn-light" type="button" id="profileAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction2">


                                                    <li><Link className="dropdown-item" to={"/home/settings"}> <i className="bi bi-lock fa-fw pe-2"></i>Setting Account</Link></li>


                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">

                                        <li className="list-inline-item"><i className="bi bi-geo-alt me-1"></i> {account.address}</li>

                                    </ul>
                                </div>

                                <div className="card-footer mt-3 pt-2 pb-0">

                                    <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                                        <li className="nav-item"> <Link className="nav-link active" to={""}> Posts </Link> </li>
                                        <li className="nav-item"> <Link className="nav-link" to={"/home/myAbout"}> About </Link> </li>
                                    </ul>
                                </div>
                            </div>



                            <div className="card card-body">
                                <div className="d-flex mb-3">

                                    <div className="avatar avatar-xs me-2">
                                        <Link to={""}> <img className="avatar-img rounded-circle" src={account.avatar} alt=""/> </Link>
                                    </div>

                                    <form className="w-100">
                                        <input className="form-control pe-4 border-0" placeholder="Share your thoughts..." data-bs-toggle="modal" data-bs-target="#modalCreateFeed"/>
                                    </form>
                                </div>


                            </div>
                            {posts !== undefined && posts.map(it=>(
                                <div className="card">

                                    <div className="card-header border-0 pb-0">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">

                                                <div className="avatar avatar-story me-2">
                                                    <Link to={""}> <img className="avatar-img rounded-circle"
                                                                        src={it.account.avatar} alt=""/> </Link>
                                                </div>

                                                <div>
                                                    <div className="nav nav-divider">
                                                        <h6 className="nav-item card-title mb-0"><Link to={""}> {it.account.name} </Link></h6>
                                                        <span className="nav-item small"> {it.time}</span>
                                                    </div>
                                                    <p className="mb-0 small">{it.status}</p>
                                                </div>
                                            </div>

                                            <div className="dropdown">
                                                <a href="#"
                                                   className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                                   id="cardFeedAction1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots"></i>
                                                </a>

                                                <ul className="dropdown-menu dropdown-menu-end"
                                                    aria-labelledby="aboutAction">
                                                    <li><Link className="dropdown-item" to={`/${it.idPost}`}> <i
                                                        className="bi bi-pencil-square fa-fw pe-2"></i>Edit</Link></li>
                                                    <DeletePost id={it.idPost}/>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>{it.content}</p>

                                        <Link to={`/${it.idPost}`}> <img className="card-img" src={it.image} alt="Post" /></Link>

                                        <ul className="nav nav-stack py-3 small">
                                            <li className="nav-item">
                                                <a className="nav-link active" > <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked </a>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`/${it.idPost}`}><a className="nav-link"> <i className="bi bi-chat-fill pe-1"></i> {it.comment !== undefined && it.comment.length} Comments </a></Link>
                                            </li>
                                        </ul>

                                        {/*{it.comment != undefined && it.comment.slice(-2).reverse().map(itc => <>*/}
                                        {/*    <ul className="comment-wrap list-unstyled">*/}
                                        {/*        <li className="comment-item">*/}
                                        {/*            <div className="d-flex position-relative">*/}
                                        {/*                <div className="avatar avatar-xs">*/}
                                        {/*                    <a href="#!"><img className="avatar-img rounded-circle"*/}
                                        {/*                                      src={itc.account.avatar} alt=""/></a>*/}
                                        {/*                </div>*/}
                                        {/*                <div className="ms-2">*/}
                                        {/*                    <div className="bg-light rounded-start-top-0 p-3 rounded">*/}
                                        {/*                        <div className="d-flex justify-content-between">*/}
                                        {/*                            <h6 className="mb-1"><a href="#!"> {itc.account.name} </a></h6>*/}

                                        {/*                        </div>*/}
                                        {/*                        <p className="small mb-0">{itc.content}</p>*/}
                                        {/*                    </div>*/}
                                        {/*                    <small className="ms-2">{itc.time}</small>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </li>*/}
                                        {/*    </ul>*/}
                                        {/*</>)}*/}

                                        <ul className="comment-wrap list-unstyled">



                                        </ul>

                                    </div>



                                </div>
                            ))}

                        </div>

                        <div className="col-lg-4">

                            <div className="row g-4">


                                <div className="col-md-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header border-0 pb-0">
                                            <h5 className="card-title">{account.name}</h5>

                                        </div>

                                        <div className="card-body position-relative pt-0">
                                            <p>Có rất nhiều việc tựa như gió thoảng mây bay. Chỉ cần trân trọng những gì mình đang có, chúng ta mới không phải nuối tiếc trong cuộc sống. – Đừng lựa chọn an nhàn khi còn trẻ</p>

                                            <ul className="list-unstyled mt-3 mb-0">
                                                <li className="mb-2"> <i className="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> {account.birthday} </strong> </li>
                                                <li className="mb-2"> <i className="bi bi-heart fa-fw pe-1"></i> German: <strong> {account.german} </strong> </li>
                                                <li><i className="bi bi-geo-alt me-1"></i> Address: <strong> {account.address} </strong> </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-12">
                                    <div className="card">

                                        <div className="card-header d-sm-flex justify-content-between align-items-center border-0">
                                            <h5 className="card-title">Friends</h5>
                                        </div>

                                        <div className="card-body position-relative pt-0">
                                            <div className="row g-3">

                                                {friends !== undefined && friends.map(it=>(
                                                    <div className="col-6">

                                                        <div className="card shadow-none text-center h-100">

                                                            <div className="card-body p-2 pb-0">
                                                                <div className="avatar avatar-story avatar-xl">
                                                                    <a href="#!"><img
                                                                        className="avatar-img rounded-circle"
                                                                        src={it.avatar}
                                                                        alt=""/></a>
                                                                </div>
                                                                <h6 className="card-title mb-1 mt-3"><Link
                                                                    to={`/home/timeLine/${it.idAccount}`}> {it.name}</Link></h6>

                                                            </div>

                                                        </div>

                                                    </div>


                                                ))}

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>


            </main>

            <div className="modal fade" id="modalCreateFeed" tabindex="-1" aria-labelledby="modalLabelCreateFeed" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabelCreateFeed">Create post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                        </div>

                        <div className="modal-footer row justify-content-between">

                            <div className="col-lg-3">
                                <select className="form-select js-choice" data-position="top" data-search-enabled="false">
                                    <option value="PB">Public</option>
                                    <option value="PV">Friends</option>
                                    <option value="PV">Only me</option>
                                    <option value="PV">Custom</option>
                                </select>
                            </div>

                            <div className="col-lg-8 text-sm-end">
                                <button type="button" className="btn btn-danger-soft me-2"> <i className="bi bi-image-fill text-success pe-2"></i>Photo</button>
                                <button type="button" className="btn btn-success-soft">Post</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="feedActionPhoto" tabindex="-1" aria-labelledby="feedActionPhotoLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                            <div className="d-flex mb-3">

                                <div className="avatar avatar-xs me-2">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt=""/>
                                </div>

                                <form className="w-100">
                                    <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows="2" placeholder="Share your thoughts..."></textarea>
                                </form>
                            </div>


                            <div>
                                <label className="form-label">Upload attachment</label>
                                <div className="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
                                    <div className="dz-message">
                                        <i className="bi bi-images display-3"></i>
                                        <p>Drag here or click to upload photo.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="modal-footer ">

                            <button type="button" className="btn btn-danger-soft me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success-soft">Post</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="feedActionVideo" tabindex="-1" aria-labelledby="feedActionVideoLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="feedActionVideoLabel">Add post video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                            <div className="d-flex mb-3">

                                <div className="avatar avatar-xs me-2">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt=""/>
                                </div>

                                <form className="w-100">
                                    <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows="2" placeholder="Share your thoughts..."></textarea>
                                </form>
                            </div>


                            <div>
                                <label className="form-label">Upload attachment</label>
                                <div className="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
                                    <div className="dz-message">
                                        <i className="bi bi-camera-reels display-3"></i>
                                        <p>Drag here or click to upload video.</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="modal-footer">

                            <button type="button" className="btn btn-danger-soft me-2"><i className="bi bi-camera-video-fill pe-1"></i> Live video</button>
                            <button type="button" className="btn btn-success-soft">Post</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalCreateEvents" tabindex="-1" aria-labelledby="modalLabelCreateAlbum" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabelCreateAlbum">Create event</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                            <form className="row g-4">

                                <div className="col-12">
                                    <label className="form-label">Title</label>
                                    <input type="email" className="form-control" placeholder="Event name here"/>
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" rows="2" placeholder="Ex: topics, schedule, etc."></textarea>
                                </div>

                                <div className="col-sm-4">
                                    <label className="form-label">Date</label>
                                    <input type="text" className="form-control flatpickr" placeholder="Select date"/>
                                </div>

                                <div className="col-sm-4">
                                    <label className="form-label">Time</label>
                                    <input type="text" className="form-control flatpickr" data-enableTime="true" data-noCalendar="true" placeholder="Select time"/>
                                </div>

                                <div className="col-sm-4">
                                    <label className="form-label">Duration</label>
                                    <input type="email" className="form-control" placeholder="1hr 23m"/>
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Location</label>
                                    <input type="email" className="form-control" placeholder="Logansport, IN 46947"/>
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Add guests</label>
                                    <input type="email" className="form-control" placeholder="Guest email"/>
                                </div>

                                <div className="col-12 mt-3">
                                    <ul className="avatar-group list-unstyled align-items-center mb-0">
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar"/>/
                                        </li>
                                        <li className="ms-3">
                                            <small> +50 </small>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <label className="form-label">Upload attachment</label>
                                    <div className="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
                                        <div className="dz-message">
                                            <i className="bi bi-file-earmark-text display-3"></i>
                                            <p>Drop presentation and document here or click to upload.</p>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger-soft me-2" data-bs-dismiss="modal"> Cancel</button>
                            <button type="button" className="btn btn-success-soft">Create now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyTimeLine;
