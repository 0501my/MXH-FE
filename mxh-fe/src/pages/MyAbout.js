import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";

import {useDispatch, useSelector} from "react-redux";
import {AccountsEdit, findById, searchOtherAccount} from "../services/AccountService";
import {useParams} from "react-router-dom";


const MyAbout = () => {
    const {idAccount} = useParams()
    const [check, setCheck] = useState(false);
    const [editInfo, setEditInfo] = useState(false);
    const dispatch = useDispatch()
    const account = useSelector(state => {
        return state.account.account
    })
    const otherAccount = useSelector(state => {
        return state.account.otherAccount
    })
    useEffect(() => {
        dispatch(searchOtherAccount(idAccount));
        if(idAccount == account.idAccount){
            dispatch(findById(idAccount));
            setEditInfo(true)
        }


    }, [])

    return (<>
        <div className="col-lg-4 col-md-4">

            <aside className="sidebar">
                <div className="central-meta stick-widget">
                    <span className="create-post">Personal Info</span>
                    {editInfo &&
                        <p style={{textAlign:"right"}} as={'button'} onClick={()=>{setCheck(true)}}>
                            <i className="ti-more-alt"></i></p>
                    }
                    <div className="personal-head">
                                                    <span className="f-title"><i
                                                        className="ml-3 fa fa-user"></i> Name: {otherAccount.name}</span>

                        <span className="f-title"><i className="ml-3 fa fa-birthday-cake"></i> Birthday:{otherAccount.birthday}</span>
                        <span className="f-title"><i
                            className="ml-3 fa fa-male"></i> Gender: {otherAccount.german}</span>
                        <span className=" f-title"><i
                            className="ml-3 fa fa-globe"></i> Country:{otherAccount.address}</span>

                    </div>
                </div>
            </aside>
        </div>
        <div className="col-lg-8 col-md-8">
            {
                check ? <>
                    <Formik
                    initialValues={account}
                    onSubmit={(values)=>{
                    values.idAccount = account.idAccount
                    dispatch(AccountsEdit(values)).then(()=>{
                        dispatch(findById(idAccount))
                        dispatch(searchOtherAccount(idAccount))
                        alert('Cập Nhật Thành Công')
                        setCheck (false)
                    })
                    }}
                    >
                        <Form>
                        <div className="central-meta" >
                                            <span className="create-post">Update Profile<a href="#"
                                                                                           title="">See All</a></span>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="gen-metabox">
                             <span className="f-title"><i
                                 className="fa fa-user"></i> Name:</span>
                                        <Field type="text" name="name" />
                                    </div>
                                    <div className="gen-metabox">
                                        <span className="f-title"><i className="fa fa-birthday-cake"></i> Birthday:</span>
                                        <Field type="text" name="birthday" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="gen-metabox">
                            <span className="f-title"><i
                                className="fa fa-male"></i> Gender:</span>
                                        <Field type="text" name="german" />
                                    </div>
                                    <div className="gen-metabox">
                             <span className="f-title"><i
                                 className="fa fa-globe"></i> Country:</span>
                                        <Field type="text" name="address" />
                                    </div>
                                </div>
                            </div>
                            <button  type="submit">
                                Update
                            </button>
                        </div>
                        </Form>

                    </Formik>
                </>: <></>
            }


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
    </>)
}

export default MyAbout;
