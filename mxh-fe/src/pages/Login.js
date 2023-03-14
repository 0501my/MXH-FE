import React from 'react';
import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AccountsLogin} from "../services/AccountService";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialValuesAdd = {
        username: "",
        password: "",
    };
    const handleSubmit = async (values) => {
        console.log(localStorage.getItem('status') === 'User is not exit')
        await dispatch(AccountsLogin(values));
        if (localStorage.getItem('status') === 'User is not exit'
            || localStorage.getItem('status') === 'Password is wrong'
            || localStorage.getItem('status') == null
            || localStorage.getItem('status') === undefined) {
            alert('User or password incorrect')
            navigate(('/'))
        } else {
            navigate('/home')
        }
    };

    return (
        <>
            <div className="www-layout">
                <section>
                    <div className="gap no-gap signin whitish medium-opacity">
                        <div className="bg-image" style={{backgroundImage: 'url(images/resources/theme-bg.jpg'}}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="big-ad">
                                        <figure><img src="images/logo3.png" alt=""/></figure>
                                        <h1>Welcome to the Bug Men</h1>
                                        <p>
                                            Bug Men is a social network template that can be used to connect people. use
                                            this template for multipurpose social activities like job, dating, posting,
                                            bloging and much more. Now join & Make Cool Friends around the world !!!
                                        </p>

                                        <div className="fun-fact">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-4">
                                                    <div className="fun-box">
                                                        <i className="ti-check-box"></i>
                                                        <h6>Registered People</h6>
                                                        <span>1,01,242</span>
                                                    </div>

                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-4">
                                                    <div className="fun-box">
                                                        <i className="ti-layout-media-overlay-alt-2"></i>
                                                        <h6>Posts Published</h6>
                                                        <span>21,03,245</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-4">
                                                    <div className="fun-box">
                                                        <i className="ti-user"></i>
                                                        <h6>Online Users</h6>
                                                        <span>40,145</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="barcode">
                                            <figure><img src="images/resources/Barcode.jpg" alt=""/></figure>
                                            <div className="app-download">
                                                <span>Download Mobile App and Scan QR Code to login</span>
                                                <ul className="colla-apps">
                                                    <li><a title="" href="https://play.google.com/store?hl=en"><img
                                                        src="images/android.png" alt=""/>android</a></li>
                                                    <li><a title="" href="https://www.apple.com/lae/ios/app-store/"><img
                                                        src="images/apple.png" alt=""/>iPhone</a></li>
                                                    <li><a title="" href="https://www.microsoft.com/store/apps"><img
                                                        src="images/windows.png" alt=""/>Windows</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="we-login-register">
                                        <div className="form-title">
                                            <i className="fa fa-key"></i>login
                                            <span>sign in now and meet the awesome Friends around the world.</span>
                                        </div>
                                        <Formik className="we-form" initialValues={initialValuesAdd}
                                                onSubmit={handleSubmit}>
                                            <Form>
                                                <Form className="we-form mt-6">
                                                    <Field type="text" placeholder="UserName" name="username"/>
                                                </Form>

                                                <Form className="we-form mt-6">
                                                    <Field type="password" placeholder="Password" name="password"/>

                                                </Form>
                                                <div className="we-form mt-6">
                                                    <input type="checkbox"/><label>remember me</label>
                                                    <button type="submit"
                                                            className="we-form mt-6  btn-danger">Login
                                                    </button>
                                                </div>

                                            </Form>
                                        </Formik>
                                        <Link className="with-smedia google" href="#" title="" data-ripple=""><i
                                            className="fa fa-google-plus"></i></Link>
                                        <span className="col-12">don't have an account?
                                            <Link className="we-account "
                                                  title="" to={"/registers"}>
                                                <h6 className="we-account"
                                                    style={{color: "purple"}}>register now</h6></Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>

    )
}
export default Login;
