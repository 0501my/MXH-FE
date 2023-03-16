import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik, validateYupSchema} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AccountsLogin, AccountsLoginGG, AccountsRegister} from "../services/AccountService";
import {GoogleLogin, GoogleOAuthProvider, useGoogleLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import * as Yup from "yup";
import GoogleButton from 'react-google-button'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValuesAdd = {
        username: "", password: "",
    };
    let [userGG, setUserGG] = useState({})
    const checkUSer = useSelector(state => {
        return state.account.checkUser;
    })

    async function check() {
        if (checkUSer === false) {
            await dispatch(AccountsRegister(userGG))
            await dispatch(AccountsLogin(userGG))
             navigate('/home')
        }
        if (checkUSer === true) {
            await dispatch(AccountsLogin(userGG))
             navigate('/home')
        }
    }

    check()
    const handleSubmit = async (values) => {
        console.log(localStorage.getItem('status') === 'User is not exit')
        await dispatch(AccountsLogin(values));
        if (localStorage.getItem('status') === 'User is not exit' || localStorage.getItem('status') === 'Password is wrong' || localStorage.getItem('status') == null || localStorage.getItem('status') === undefined) {
            alert('User or password incorrect')
            navigate(('/'))
        } else {
            alert("Đăng nhập thành công")
            navigate('/home')
        }
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Vui lòng nhập tên đăng nhập")
            .matches(/^[a-zA-Z0-9]/), password: Yup.string()
            .required("Vui lòng nhập mật khẩu")
            .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
            .max(32, "Mật khẩu chỉ có nhiều nhất 14 ký tự")
    });


    return (<>
            <div className="www-layout">
                <section>
                    <div className="gap no-gap signin whitish medium-opacity">
                        <div className="bg-image" style={{backgroundImage: 'url(images/resources/theme-bg.jpg'}}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="big-ad">
                                        <figure><img style={{width:150}} src="images/logo3.png" alt=""/></figure>
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
                                        <div className="row">
                                            <Formik className="we-form" initialValues={initialValuesAdd}
                                                    validationSchema={validationSchema}
                                                    onSubmit={handleSubmit}>
                                                <Form>
                                                    <Form className="we-form mt-6">
                                                        <Field type="text" placeholder="UserName" name="username" style={{borderRadius:'5px'}}/>
                                                        <alert>
                                                            <ErrorMessage name={"username"}/>
                                                        </alert>
                                                    </Form>

                                                    <Form className="we-form mt-6">
                                                        <Field type="password" placeholder="Password" name="password"   style={{borderRadius:'5px'}}/>
                                                        <alert>
                                                            <ErrorMessage name={"password"}/>
                                                        </alert>


                                                    </Form>
                                                    <div className="we-form mt-6">
                                                        <input type="checkbox"/><label>remember me</label>
                                                        <button type="submit"
                                                                className="we-form mt-6 btn-danger"  style={{borderRadius:'5px'}}>Login
                                                        </button>
                                                    </div>
                                                </Form>
                                            </Formik>
                                        </div>
                                        <div className="row">
                                            <div className={'col-12 d-flex justify-content-center'}>
                                                <GoogleOAuthProvider
                                                    clientId="1004137847361-3p3lh814vts1f6ts9e2al867rjrjp9gc.apps.googleusercontent.com">
                                                    <GoogleLogin
                                                        onSuccess={async credentialResponse => {
                                                            const decoded = jwt_decode(credentialResponse.credential);
                                                            let user = {username: decoded.email, password: decoded.sub};
                                                            await setUserGG(user)
                                                            await dispatch(AccountsLoginGG(user))
                                                        }}
                                                        onError={() => {
                                                            console.log('Login Failed');
                                                        }}
                                                    />
                                                </GoogleOAuthProvider>
                                            </div>

                                        </div>

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
