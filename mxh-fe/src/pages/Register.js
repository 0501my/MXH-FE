import React from 'react';
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {AccountsRegister} from "../services/AccountService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialValuesAdd = {
        username: "", password: "", passwordAgain: "",
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Vui lòng nhập tên đăng nhập")
            .matches(/^[a-zA-Z0-9]/), password: Yup.string()
            .required("Vui lòng nhập mật khẩu.")
            .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
            .max(32, "Mật khẩu chỉ có nhiều nhất 14 ký tự"), passwordAgain: Yup.string()
            .required("Vui lòng nhập lại mật khẩu. ")
    });
    const handleSubmit = async (values) => {
        if (values.password !== values.passwordAgain) {
            alert('Mật khẩu không đúng.')
        } else {
            let data = {
                username: values.username, password: values.password
            }
            await dispatch(AccountsRegister(data));
            swal(`Bạn đã đăng ký thành công.`, {
                icon: "success",
            })
            navigate('/')
        }

    };
    return (<>
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
                                        <figure><img src="/images/resources/Barcode.jpg" alt=""/></figure>
                                        <div className="app-download">
                                            <span>Download Mobile App and Scan QR Code to login</span>
                                            <ul className="colla-apps">
                                                <li><a title="" href="https://play.google.com/store?hl=en"><img
                                                    src="/images/android.png" alt=""/>android</a></li>
                                                <li><a title="" href="https://www.apple.com/lae/ios/app-store/"><img
                                                    src="/images/apple.png" alt=""/>iPhone</a></li>
                                                <li><a title="" href="https://www.microsoft.com/store/apps"><img
                                                    src="/images/windows.png" alt=""/>Windows</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="we-login-register">
                                    <div className="form-title">
                                        <i className="fa fa-key"></i>register
                                        <span>Register now and meet the awesome Friends around the world.</span>
                                    </div>
                                    <Formik className="we-form" initialValues={initialValuesAdd}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}>
                                        <Form>
                                            <Form className="we-form mt-6">
                                                <Field type="text" placeholder="UserName" name="username" style={{borderRadius:'5px'}}/>
                                                <alert>
                                                    <ErrorMessage name={"username"}></ErrorMessage>
                                                </alert>

                                            </Form>

                                            <Form className="we-form mt-6">
                                                <Field type="password" placeholder="Password" name="password" style={{borderRadius:'5px'}}/>
                                                <alert>
                                                    <ErrorMessage name={"password"}></ErrorMessage>
                                                </alert>


                                            </Form>
                                            <Form className="we-form mt-6">
                                                <Field type="password" placeholder="passwordAgain"
                                                       name="passwordAgain" style={{borderRadius:'5px'}}/>
                                                <alert>
                                                    <ErrorMessage name={"passwordAgain"}></ErrorMessage>
                                                </alert>
                                            </Form>
                                            <div className="we-form mt-6">
                                                <button type="submit"
                                                        className="we-form mt-6 btn-outline-danger " style={{borderRadius:'5px'}}>Register
                                                </button>
                                            </div>

                                        </Form>
                                    </Formik>
                                    <span className="col-12">Do you already have an account???
                                            <Link className="we-account" to={"/"}>
                                            <h6>Login now</h6></Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>)
}


export default Register;
