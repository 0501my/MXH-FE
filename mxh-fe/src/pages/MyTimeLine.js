import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPosts, deletePost, editPost, findByIdAccount, findByIdPost} from "../services/PostService";
import {Field, Form, Formik} from "formik";
import swal from "sweetalert";

const MyTimeLine = () => {
    const {idAccount} = useParams();
    const navigate = useNavigate();
    const posts = useSelector(state => {
        return state.posts.posts
    });
    const currentPost = useSelector(state => {
        return state.currentPost.currentPost
    })

    const account = useSelector(state => {
        return state.account.account
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findByIdAccount(idAccount))
    }, [])
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


    const [check, setCheck] = useState(false)
    const checkId = async (id) => {
        dispatch(findByIdPost(id)).then(() => {
        })

    }

    return (
        <>
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
                    <div className="gap2 gray-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row merged20" id="page-contents">

                                        <div className="col-lg-3">
                                            <aside className="sidebar static left">
                                                <div className="widget whitish low-opacity">
                                                    <div className="bg-image"></div>
                                                    <div className="dob-head">
                                                        <img src="images/resources/sug-page-5.jpg" alt=""/>
                                                        <span>22nd Birthday</span>
                                                        <div className="dob">
                                                            <i>19</i>
                                                            <span>September</span>
                                                        </div>
                                                    </div>
                                                    <div className="dob-meta">
                                                        <figure><img src="images/resources/dob-cake.gif" alt=""/>
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
                                                    <figure>
                                                        <img src="images/resources/admin.jpg" alt=""/>
                                                    </figure>
                                                    <Formik initialValues={{content: "",}} onSubmit={(values) => {
                                                        values.account = account.idAccount;
                                                        dispatch(addPosts(values))
                                                        document.getElementById('add-form').reset();
                                                    }}>
                                                        <Form id='add-form'>
                                                            <div className="newpst-input">
                                                                <Field as={'textarea'} name={'content'} rows="2"
                                                                       placeholder="Share some what you are thinking?"/>
                                                            </div>
                                                            <div className="attachments">
                                                                {/*<ul>*/}
                                                                {/*        <li>*/}
                                                                {/*<span className="add-loc">*/}
                                                                {/*	<i className="fa fa-map-marker"></i>*/}
                                                                {/*</span>*/}
                                                                {/*        </li>*/}
                                                                {/*        <li>*/}
                                                                {/*            <i className="fa fa-music"></i>*/}
                                                                {/*            <label className="fileContainer">*/}
                                                                {/*                <input type="file"/>*/}
                                                                {/*            </label>*/}
                                                                {/*        </li>*/}
                                                                {/*        <li>*/}
                                                                {/*            <i className="fa fa-image"></i>*/}
                                                                {/*            <label className="fileContainer">*/}
                                                                {/*                <input type="file"/>*/}
                                                                {/*            </label>*/}
                                                                {/*        </li>*/}
                                                                {/*        <li>*/}
                                                                {/*            <i className="fa fa-video-camera"></i>*/}
                                                                {/*            <label className="fileContainer">*/}
                                                                {/*                <input type="file"/>*/}
                                                                {/*            </label>*/}
                                                                {/*        </li>*/}
                                                                {/*        <li>*/}
                                                                {/*            <i className="fa fa-camera"></i>*/}
                                                                {/*            <label className="fileContainer">*/}
                                                                {/*                <input type="file"/>*/}
                                                                {/*            </label>*/}
                                                                {/*        </li>*/}
                                                                {/*        <li className="preview-btn">*/}
                                                                {/*            <button className="post-btn-preview" type="submit"*/}
                                                                {/*                    data-ripple="">Preview*/}
                                                                {/*            </button>*/}
                                                                {/*        </li>*/}
                                                                {/*    </ul>*/}
                                                                <button className="post-btn" type="submit"
                                                                        data-ripple="">Post
                                                                </button>
                                                            </div>
                                                            {/*<div className="add-location-post">*/}
                                                            {/*    <span>Drag map point to selected area</span>*/}
                                                            {/*    <div className="row">*/}
                                                            {/*        <div className="col-lg-6">*/}
                                                            {/*            <label className="control-label">Lat :</label>*/}
                                                            {/*            <input type="text" className="" id="us3-lat"/>*/}
                                                            {/*        </div>*/}
                                                            {/*        <div className="col-lg-6">*/}
                                                            {/*            <label>Long :</label>*/}
                                                            {/*            <input type="text" className="" id="us3-lon"/>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    /!*map*!/*/}
                                                            {/*    <div id="us3"></div>*/}
                                                            {/*</div>*/}
                                                        </Form>
                                                    </Formik>
                                                </div>
                                            </div>
                                            {/*add post new box*/}


                                            <div className="loadMore">
                                                {posts !== undefined && posts.map(it => (
                                                    <>
                                                        <div className="central-meta item">
                                                            <div className="user-post">
                                                                <div className="friend-info">
                                                                    <figure>
                                                                        <img src={it.account.avatar} alt="#"/>
                                                                    </figure>
                                                                    <div className="friend-name">
                                                                        <div className="more">
                                                                            {account.idAccount === it.account.idAccount &&
                                                                                <div className="more-post-optns"><i
                                                                                    className="ti-more-alt"></i>
                                                                                    <ul>
                                                                                        <li><i
                                                                                            className="fa fa-pencil-square-o"
                                                                                            onClick={() => {
                                                                                                setCheck(true)
                                                                                                checkId(it.idPost)
                                                                                            }}
                                                                                        >Edit Post</i>
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
                                                                                </div>
                                                                            }

                                                                        </div>
                                                                        <ins><a
                                                                            href={`/Home/personalPage/${it.account.idAccount}`}
                                                                            title="">{it.account.username}</a> Post
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
                                                                                       href="images/resources/album1.jpg"
                                                                                       title=""
                                                                                       data-strip-group="mygroup"
                                                                                       data-strip-group-options="loop: false">
                                                                                        <img
                                                                                            src={it.image}
                                                                                            alt="#"/>
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
                                                                                    href="#" title="">24+ more</a> liked</span>
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
                                                    </>
                                                ))}


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
                                                                            <img src="images/resources/userlist-1.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="frank" data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-2.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Sara" data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-3.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Amy" data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-4.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Ema" data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-5.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Sophie"
                                                                           data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-6.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Maria" data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-7.jpg"
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
                                                                            <img src="images/resources/userlist-1.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="frank" data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-2.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Sara" data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-3.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Amy" data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-4.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Ema" data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-5.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Sophie"
                                                                           data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-6.jpg"
                                                                                 alt=""/>
                                                                        </a>
                                                                        <a href="#" title="Maria" data-toggle="tooltip">
                                                                            <img src="images/resources/userlist-7.jpg"
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

            {
                check ? <>
                    <Formik initialValues={currentPost}
                            onSubmit={(values) => {
                                handleEditPost(values)
                            }
                            }
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
                                                        <div className="select-options">
                                                            <hr/>
                                                            <Field as={'select'} className="select" name={'status'}>
                                                                <option value={'public'}>Public</option>
                                                                <option value={'friendonly'}>Friend only</option>
                                                                <option value={'onlyme'}>Only me</option>
                                                            </Field>
                                                        </div>
                                                        <div className="attachments">
                                                            <li>
                                                                <i className="fa fa-camera"></i>
                                                                <label className="fileContainer">
                                                                    <input type="file"/>
                                                                </label>
                                                            </li>
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
                </> : <>

                </>
            }
        </>
    )
}

export default MyTimeLine;