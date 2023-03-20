import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findByIdAccount} from "../services/PostService";


const MyTimeLine = () => {

    const posts = useSelector(state => {
        return state.posts.posts
    });

    const account = useSelector(state => {
        return state.account.currentAccount
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findByIdAccount(account.idAccount))
    }, [])

    return (
        <>

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
                                            <img class="avatar-img rounded-circle border border-white border-3" src={account.avatar} alt=""/>
                                        </div>
                                    </div>
                                    <div class="ms-sm-4 mt-sm-3">

                                        <h1 class="mb-0 h5">{account.name} <i class="bi bi-patch-check-fill text-success small"></i></h1>
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

                                    <li class="list-inline-item"><i class="bi bi-geo-alt me-1"></i> {account.address}</li>

                                </ul>
                            </div>

                            <div class="card-footer mt-3 pt-2 pb-0">

                                <ul class="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                                    <li class="nav-item"> <Link class="nav-link active" to={""}> Posts </Link> </li>
                                    <li class="nav-item"> <Link class="nav-link" to={"/home/myAbout"}> About </Link> </li>
                                </ul>
                            </div>
                        </div>



                        <div class="card card-body">
                            <div class="d-flex mb-3">

                                <div class="avatar avatar-xs me-2">
                                    <Link to={""}> <img class="avatar-img rounded-circle" src={account.avatar} alt=""/> </Link>
                                </div>

                                <form class="w-100">
                                    <input class="form-control pe-4 border-0" placeholder="Share your thoughts..." data-bs-toggle="modal" data-bs-target="#modalCreateFeed"/>
                                </form>
                            </div>


                        </div>
                        {posts !== undefined && posts.map(it=>(
                        <div class="card">

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
                                                <li><a className="dropdown-item" href="#"> <i
                                                    className="bi bi-pencil-square fa-fw pe-2"></i>Edit</a></li>
                                                <li><a className="dropdown-item" href="#"> <i
                                                    className="bi bi-trash fa-fw pe-2"></i>Delete</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>



                            <div class="card-body">
                                <p>{it.content}</p>

                                <img class="card-img" src={it.image} alt="Post"/>

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
                                            <a href="#!"> <img class="avatar-img rounded-circle" src={account.avatar} alt=""/> </a>
                                        </div>

                                        <form class="position-relative w-100">
                                            <textarea class="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                                        </form>
                                    </div>

                                    <ul class="comment-wrap list-unstyled">



                                    </ul>

                            </div>



                        </div>
                        ))}

                    </div>

                    <div class="col-lg-4">

                        <div class="row g-4">


                            <div class="col-md-6 col-lg-12">
                                <div class="card">
                                    <div class="card-header border-0 pb-0">
                                        <h5 class="card-title">{account.name}</h5>

                                    </div>

                                    <div class="card-body position-relative pt-0">
                                        <p>Có rất nhiều việc tựa như gió thoảng mây bay. Chỉ cần trân trọng những gì mình đang có, chúng ta mới không phải nuối tiếc trong cuộc sống. – Đừng lựa chọn an nhàn khi còn trẻ</p>

                                        <ul class="list-unstyled mt-3 mb-0">
                                            <li class="mb-2"> <i class="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> {account.birthday} </strong> </li>
                                            <li class="mb-2"> <i class="bi bi-heart fa-fw pe-1"></i> German: <strong> {account.german} </strong> </li>
                                            <li><i className="bi bi-geo-alt me-1"></i> Address: <strong> {account.address} </strong> </li>
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
                        <button type="button" class="btn btn-danger-soft me-2"> <i className="bi bi-image-fill text-success pe-2"></i>Photo</button>
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

export default MyTimeLine;
