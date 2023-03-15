import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {editPost} from "../services/PostService";
import {AccountsEdit, changePassword} from "../services/AccountService";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import {Link} from "react-router-dom";

const MyAbout = ()=> {
    const [check, setCheck] = useState(false)


    const account = useSelector(state => {
        return state.account.account
    })
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        newPassword: Yup.string()
            .required("Vui lòng nhập mật khẩu")
            .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
            .max(32, "Mật khẩu chỉ có nhiều nhất 14 ký tự"),
        repeatPassword: Yup.string()
            .required("Vui lòng nhập mật khẩu confirm")
    });





    return(
        <>
            <section style={{marginTop:50}}>
                <div className="gap2 gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row merged20" id="page-contents">
                                    <div className="user-profile">
                                        <figure>
                                            <div className="edit-pp">
                                                <label className="fileContainer">
                                                    <i className="fa fa-camera"></i>
                                                    <input type="file"/>
                                                </label>
                                            </div>
                                            <img src="/images/resources/profile-image.jpg" alt=""/>
                                                <ul className="profile-controls">
                                                    <li><a href="#" title="Add friend" data-toggle="tooltip"><i
                                                        className="fa fa-user-plus"></i></a></li>
                                                    <li><a href="#" title="Follow" data-toggle="tooltip"><i
                                                        className="fa fa-star"></i></a></li>
                                                    <li><a className="send-mesg" href="#" title="Send Message"
                                                           data-toggle="tooltip"><i className="fa fa-comment"></i></a>
                                                    </li>
                                                    <li>
                                                        <div className="edit-seting" title="Edit Profile image"><i
                                                            className="fa fa-sliders"></i>
                                                            <ul className="more-dropdown">
                                                                <li><a href="setting.html" title="">Update Profile
                                                                    Photo</a></li>
                                                                <li><a href="setting.html" title="">Update Header
                                                                    Photo</a></li>

                                                                <li><a href="support-and-help.html" title="">Find
                                                                    Support</a></li>
                                                                <li><a className="bad-report" href="#" title="">Report
                                                                    Profile</a></li>
                                                                <li><a href="#" title="">Block Profile</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ol className="pit-rate">
                                                    <li className="rated"><i className="fa fa-star"></i></li>
                                                    <li className="rated"><i className="fa fa-star"></i></li>
                                                    <li className="rated"><i className="fa fa-star"></i></li>
                                                    <li className="rated"><i className="fa fa-star"></i></li>
                                                    <li className=""><i className="fa fa-star"></i></li>
                                                    <li><span>4.7/5</span></li>
                                                </ol>
                                        </figure>
                                        <div className="profile-section">
                                            <div className="row">
                                                <div className="col-lg-2 col-md-3">
                                                    <div className="profile-author">
                                                        <div className="profile-author-thumb">
                                                            <img alt="author" src="/images/resources/author.jpg"/>
                                                                <div className="edit-dp">
                                                                    <label className="fileContainer">
                                                                        <i className="fa fa-camera"></i>
                                                                        <input type="file"/>
                                                                    </label>
                                                                </div>
                                                        </div>

                                                        <div className="author-content">
                                                            <a className="h4 author-name" href="about.html">Jack
                                                                Carter</a>
                                                            <div className="country">Ontario, CA</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-10 col-md-9">
                                                    <ul className="profile-menu">
                                                        <li>
                                                            <Link className="" to={`/home/MyTimeLine/${account.idAccount}`}>Timeline</Link>
                                                        </li>
                                                        <li>
                                                            <a className="active" href="about.html">About</a>
                                                        </li>
                                                        <li>
                                                            <a className="" href="timeline-friends.html">Friends</a>
                                                        </li>
                                                        <li>
                                                            <a className="" href="timeline-photos.html">Photos</a>
                                                        </li>
                                                        <li>
                                                            <a className="" href="timeline-videos.html">Videos</a>
                                                        </li>
                                                        <li>
                                                            <div className="more">
                                                                <i className="fa fa-ellipsis-h"></i>
                                                                <ul className="more-dropdown">
                                                                    <li>
                                                                        {/*<a href="home/edit-Account">Edit Account</a>*/}
                                                                        <a onClick={() => {
                                                                            setCheck(true)
                                                                        }}
                                                                            >Account Settings</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="statistics.html">Profile Analytics</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ol className="folw-detail">
                                                        <li><span>Posts</span>
                                                            <ins>101</ins>
                                                        </li>
                                                        <li><span>Followers</span>
                                                            <ins>1.3K</ins>
                                                        </li>
                                                        <li><span>Following</span>
                                                            <ins>22</ins>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <aside className="sidebar">
                                            <div className="central-meta stick-widget">
                                                <span className="create-post">Personal Info</span>
                                                <div className="personal-head">
                                                    <span className="f-title"><i
                                                        className="fa fa-user"></i> About Me:</span>
                                                    <p>
                                                        Hi, I’m John Carter, I’m 36 and I work as a Digital Designer for
                                                        the “dewwater” Agency in Ontario, Canada
                                                    </p>
                                                    <span className="f-title"><i className="fa fa-birthday-cake"></i> Birthday:</span>
                                                    <p>
                                                        December 17, 1985
                                                    </p>
                                                    <span className="f-title"><i className="fa fa-phone"></i> Phone Number:</span>
                                                    <p>
                                                        +1-989-232435234
                                                    </p>
                                                    <span className="f-title"><i className="fa fa-medkit"></i> Blood group:</span>
                                                    <p>
                                                        B+
                                                    </p>
                                                    <span className="f-title"><i
                                                        className="fa fa-male"></i> Gender:</span>
                                                    <p>
                                                        Male
                                                    </p>
                                                    <span className="f-title"><i
                                                        className="fa fa-globe"></i> Country:</span>
                                                    <p>
                                                        San Francisco, California, USA
                                                    </p>
                                                    <span className="f-title"><i className="fa fa-briefcase"></i> Occupation:</span>
                                                    <p>
                                                        UI/UX Designer
                                                    </p>
                                                    <span className="f-title"><i className="fa fa-handshake-o"></i> Joined:</span>
                                                    <p>
                                                        December 20, 2001
                                                    </p>

                                                    <span className="f-title"><i className="fa fa-envelope"></i> Email & Website:</span>
                                                    <p>
                                                        <a href="wpkixx.html" title="">www.wpkixx.com</a> <a
                                                        href="http://wpkixx.com/cdn-cgi/l/email-protection"
                                                        className="__cf_email__"
                                                        data-cfemail="ebbb829f858280ab92849e99868a8287c5888486">[email&#160;protected]</a>
                                                    </p>

                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <div className="central-meta">
                                            <span className="create-post">General Info<a href="#"
                                                                                         title="">See All</a></span>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="gen-metabox">
                                                        <span><i className="fa fa-puzzle-piece"></i> Hobbies</span>
                                                        <p>
                                                            I like to ride the bicycle, swimming, and working out. I
                                                            also like reading design magazines, and searching on
                                                            internet, and also binge watching a good hollywood Movies
                                                            while it’s raining outside.
                                                        </p>
                                                    </div>
                                                    <div className="gen-metabox">
                                                        <span><i className="fa fa-plus"></i> Others Interests</span>
                                                        <p>
                                                            Swimming, Surfing, Uber Diving, Anime, Photography, Tattoos,
                                                            Street Art.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="gen-metabox">
                                                        <span><i className="fa fa-mortar-board"></i> Education</span>
                                                        <p>
                                                            Master of computer science, sixteen years degree From <a
                                                            href="#" title="">Oxford Uniersity, London</a>
                                                        </p>
                                                    </div>
                                                    <div className="gen-metabox">
                                                        <span><i className="fa fa-certificate"></i> Work and experience</span>
                                                        <p>
                                                            Currently working in the "color hands" web development
                                                            agency from the last 5 five years as <a href="#" title="">Senior
                                                            UI/UX Designer</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="gen-metabox no-margin">
                                                        <span><i className="fa fa-sitemap"></i> Social Networks</span>
                                                        <ul className="sociaz-media">
                                                            <li><a className="facebook" href="#" title=""><i
                                                                className="fa fa-facebook"></i></a></li>
                                                            <li><a className="twitter" href="#" title=""><i
                                                                className="fa fa-twitter"></i></a></li>
                                                            <li><a className="google" href="#" title=""><i
                                                                className="fa fa-google-plus"></i></a></li>
                                                            <li><a className="vk" href="#" title=""><i
                                                                className="fa fa-vk"></i></a></li>
                                                            <li><a className="instagram" href="#" title=""><i
                                                                className="fa fa-instagram"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="gen-metabox no-margin">
                                                        <span><i className="fa fa-trophy"></i> Badges</span>
                                                        <ul className="badged">
                                                            <li><img src="/images/badges/badge2.png" alt=""/></li>
                                                            <li><img src="/images/badges/badge19.png" alt=""/></li>
                                                            <li><img src="/images/badges/badge21.png" alt=""/></li>
                                                            <li><img src="/images/badges/badge3.png" alt=""/></li>
                                                            <li><img src="/images/badges/badge4.png" alt=""/></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="central-meta">
                                            <span className="create-post">Favourit Movies & TV Shows (33) <a href="#"
                                                                                                             title="">See All</a></span>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay1.jpg" alt=""/>
                                                        </figure>
                                                        <span className="tv-play-title">Attaturk Tv Series 2017 </span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay2.jpg" alt=""/>
                                                        </figure>
                                                        <span
                                                            className="tv-play-title">Thor Hollywood Movie 2017 </span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay3.jpg" alt=""/>
                                                        </figure>
                                                        <span className="tv-play-title">Spider Men 2015 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="central-meta">
                                            <span className="create-post">Friend's (320) <a
                                                href="timeline-friends2.html" title="">See All</a></span>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay1.jpg" alt=""/>
                                                        </figure>
                                                        <span className="tv-play-title">Attaturk Tv Series 2017 </span>
                                                    </div>
                                                    <ul className="add-remove-frnd">
                                                        <li className="add-tofrndlist"><a className="send-mesg"
                                                                                          href="#"
                                                                                          title="Send Message"><i
                                                            className="fa fa-commenting"></i></a></li>
                                                        <li className="remove-frnd"><a href="#"
                                                                                       title="remove friend"><i
                                                            className="fa fa-user-times"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay1.jpg" alt=""/>
                                                        </figure>
                                                        <span className="tv-play-title">Attaturk Tv Series 2017 </span>
                                                    </div>
                                                    <ul className="add-remove-frnd">
                                                        <li className="add-tofrndlist"><a className="send-mesg"
                                                                                          href="#"
                                                                                          title="Send Message"><i
                                                            className="fa fa-commenting"></i></a></li>
                                                        <li className="remove-frnd"><a href="#"
                                                                                       title="remove friend"><i
                                                            className="fa fa-user-times"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay1.jpg" alt=""/>
                                                        </figure>
                                                        <span className="tv-play-title">Attaturk Tv Series 2017 </span>
                                                    </div>
                                                    <ul className="add-remove-frnd">
                                                        <li className="add-tofrndlist"><a className="send-mesg"
                                                                                          href="#"
                                                                                          title="Send Message"><i
                                                            className="fa fa-commenting"></i></a></li>
                                                        <li className="remove-frnd"><a href="#"
                                                                                       title="remove friend"><i
                                                            className="fa fa-user-times"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="central-meta">
                                            <span className="create-post">Photo (320) <a
                                                href="timeline-friends2.html" title="">See All</a></span>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay1.jpg" alt=""/>
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay1.jpg" alt=""/>
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay1.jpg" alt=""/>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="central-meta">
                                            <span className="create-post">Videos (320) <a
                                                href="timeline-friends2.html" title="">See All</a></span>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay1.jpg" alt=""/>
                                                        </figure>
                                                    </div>

                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay1.jpg" alt=""/>
                                                        </figure>

                                                    </div>

                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-6">
                                                    <div className="fav-play">
                                                        <figure>
                                                            <img src="/images/resources/tvplay1.jpg" alt=""/>
                                                        </figure>

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
            </section>

            {
                check ? <>
                    <Formik initialValues={{}}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                values.id = account.idAccount;
                                if(values.repeatPassword === values.newPassword){
                                    dispatch(changePassword(values)).then(()=>{
                                        setCheck(false)
                                    })
                                }else {
                                    alert(' can not')
                                }


                            }
                            }
                            enableReinitialize={true}>

                        <div className="popup-wraper active">
                            <div className="popup" style={{width:300, textAlignLast:"center"}}>
                                <span className="popup-closed" onClick={() => {
                                    setCheck(false)
                                }}><i className="ti-close"></i></span>
                                <div className="popup-meta">
                                    <div className="popup-head">
                                        <h5>Change Password</h5>
                                    </div>
                                    <div className="forum-form">
                                        <div className="postbox">
                                            <div className="new-postbox">
                                                <Form>
                                                    <div className="newpst-input">
                                                        <div>
                                                            <label>oldPassword</label>
                                                            <Field   type="password"  name={'oldPassword'}/>

                                                        </div>
                                                        <div>
                                                            <label>newPassword</label>
                                                            <Field  type="password" name={'newPassword'}/>
                                                            <alert>
                                                                <ErrorMessage name={"newPassword"}></ErrorMessage>
                                                            </alert>
                                                        </div>
                                                        <div>
                                                            <label>repeatPassword</label>
                                                            <Field  type="password" name={'repeatPassword'}/>
                                                            <alert>
                                                                <ErrorMessage name={"repeatPassword"}></ErrorMessage>
                                                            </alert>
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

export default MyAbout;
