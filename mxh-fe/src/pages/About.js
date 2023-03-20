import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {searchOtherAccount} from "../services/AccountService";
import {checkFriend} from "../services/FriendService";


const About = () => {

    const {idAccount} = useParams();

    const account = useSelector(state => {
        return state.account.currentAccount
    })

    const otherAccount = useSelector(state => {
        return state.account.otherAccount
    });

    const friend = useSelector(state => {
        return state.friends.friend
    })

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(searchOtherAccount(idAccount));
        let data = {thisId:account.idAccount,thatId:idAccount}
        dispatch(checkFriend(data))
    },[])


    return (
        <>
            <main>


                <div className="container">
                    <div className="row g-4">


                        <div className="col-lg-8 vstack gap-4">

                            <div className="card">
                                <div className="h-200px rounded-top"
                                     style={{
                                         backgroundimage: "url(assets/images/bg/05.jpg)",
                                         backgroundposition: "center",
                                         backgroundsize: "cover",
                                         backgroundrepeat: "no-repeat"
                                     }}></div>

                                <div className="card-body py-0">
                                    <div className="d-sm-flex align-items-start text-center text-sm-start">
                                        <div>

                                            <div className="avatar avatar-xxl mt-n5 mb-3">
                                                <img className="avatar-img rounded-circle border border-white border-3"
                                                     src={otherAccount.avatar} alt=""/>
                                            </div>
                                        </div>
                                        <div className="ms-sm-4 mt-sm-3">

                                            <h1 className="mb-0 h5">{otherAccount.name} <i
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
                                        <li className="list-inline-item"><i className="bi bi-geo-alt fa-fw me-2"></i>{otherAccount.address}</li>
                                        {friend === "Add Friend" && <span className="badge bg-primary">Add Friend</span>}
                                        {friend.status === "Friends" && <span className="badge bg-primary">Friends</span>}
                                        {friend.status === "Cancel Request" && <span className="badge bg-primary">Cancel Request</span>}
                                        {friend.status === "Confirm" && <span className="badge bg-primary">Confirm</span>}
                                    </ul>
                                </div>

                                <div className="card-footer mt-3 pt-2 pb-0">

                                    <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                                        <li className="nav-item"><Link className="nav-link"
                                                                       to={`/home/timeLine/${idAccount}`}> Posts </Link></li>
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
                                            <h6>{otherAccount.name}</h6>
                                        </div>
                                        <p>Thích màu hồng.</p>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-sm-6">

                                            <div className="d-flex align-items-center rounded border px-3 py-2">

                                                <p className="mb-0">
                                                    <i className="bi bi-calendar-date fa-fw me-2"></i> Born: <strong> {otherAccount.birthday} </strong>
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
                                                    <i className="bi bi-heart fa-fw me-2"></i> German: <strong> {otherAccount.german} </strong>
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
                                                    <i className="bi bi-geo-alt fa-fw me-2"></i> Lives
                                                    in: <strong> {otherAccount.address} </strong>
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
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div className="row g-4">


                                <div className="col-sm-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header border-0 pb-0">
                                            <h5 className="card-title">{otherAccount.name}</h5>

                                        </div>

                                        <div className="card-body position-relative pt-0">
                                            <p>Có rất nhiều việc tựa như gió thoảng mây bay. Chỉ cần trân trọng những gì
                                                mình đang có, chúng ta mới không phải nuối tiếc trong cuộc sống. – Đừng
                                                lựa chọn an nhàn khi còn trẻ</p>
                                            <ul className="list-unstyled mt-3 mb-0">
                                                <li className="mb-2"><i className="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> {otherAccount.birthday} </strong>
                                                </li>
                                                <li className="mb-2"><i className="bi bi-heart fa-fw pe-1"></i> German: <strong> {otherAccount.german} </strong>
                                                </li>
                                                <li><i className="bi bi-geo-alt fa-fw me-2"></i> Address: <strong> {otherAccount.address} </strong>
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
