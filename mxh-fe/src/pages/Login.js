import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AccountsLogin, AccountsLoginGG, AccountsRegister} from "../services/AccountService";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import * as Yup from "yup";

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
            await alert("Login success")
        }
        if (checkUSer === true) {
            await dispatch(AccountsLogin(userGG))
            navigate('/home')
            // await alert("Login success")
        }
    }


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
            <Formik className="mt-sm-4" initialValues={initialValuesAdd}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values)
                        handleSubmit(values)
                    }}>
                <Form>
                    <div className="container">
                        <div className="row justify-content-center align-items-center vh-100 py-5">

                            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">

                                <div className="card card-body text-center p-4 p-sm-5">

                                    <h1 className="mb-2">Sign in</h1>
                                    <p className="mb-0">Don't have an account?<Link to={"/registers"}> Click here to
                                        sign
                                        up</Link>
                                    </p>

                                    <div className="mb-3 mt-3 input-group-lg">

                                        <Field className="form-control" type="text" placeholder="UserName"
                                               name="username"/>
                                        <alert>
                                            <ErrorMessage name={"username"}/>
                                        </alert>
                                    </div>
                                    <div className="mb-3 position-relative">

                                        <div className="input-group input-group-lg">

                                            <Field className="form-control fakepassword" type="password"
                                                   id="psw-input"
                                                   placeholder="Password" name="password"/>

                                            <span className="input-group-text p-0">
                                            <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                                            </span>
                                        </div>
                                        <div id="pswmeter" className="mt-2"></div>
                                        <alert>
                                            <ErrorMessage name={"password"}/>
                                        </alert>
                                        <div className="d-flex mt-1">
                                            <div id="pswmeter-message" className="rounded"></div>
                                            <div className="ms-auto">
                                                <i className="bi bi-info-circle ps-1" data-bs-container="body"
                                                   data-bs-toggle="popover" data-bs-placement="top"
                                                   data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long."
                                                   data-bs-original-title="" title=""></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-sm-flex justify-content-between">
                                        <div>
                                            <input type="checkbox" className="form-check-input"
                                                   id="rememberCheck"/>
                                            <label className="form-check-label" htmlFor="rememberCheck">Remember
                                                me?</label>
                                        </div>
                                        <a href="forgot-password.html">Forgot password?</a>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-lg btn-primary">Login</button>
                                    </div>
                                    <div className="row mt-3">
                                        <div className={'col-12 d-flex justify-content-center'}>
                                            <GoogleOAuthProvider
                                                clientId="1004137847361-3p3lh814vts1f6ts9e2al867rjrjp9gc.apps.googleusercontent.com">
                                                <GoogleLogin
                                                    onSuccess={async credentialResponse => {
                                                        const decoded = jwt_decode(credentialResponse.credential);

                                                        let user = {
                                                            username: decoded.email,
                                                            password: decoded.sub,
                                                            name: decoded.name,
                                                            avatar: decoded.picture
                                                        };
                                                        await setUserGG(user)
                                                        await dispatch(AccountsLoginGG(user))
                                                        check().then()

                                                    }}
                                                    onError={() => {
                                                        console.log('Login Failed');
                                                    }}
                                                />
                                            </GoogleOAuthProvider>
                                        </div>

                                    </div>
                                    <p className="mb-0 mt-3">©2022 <a target="_blank"
                                                                      href="https://www.webestica.com/">Webestica.</a> All
                                        rights reserved</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>

    )
}
export default Login;
