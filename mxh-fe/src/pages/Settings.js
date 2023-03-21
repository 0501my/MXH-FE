import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AccountsEdit, searchOtherAccount} from "../services/AccountService";

import swal from "sweetalert";
import {useParams} from "react-router-dom";


const Settings = () => {
    const {idAccount} = useParams()
    const [editInfo, setEditInfo] = useState(false)
    const account = useSelector(state => {
        return state.account.currentAccount
    })

    const otherAccount = useSelector(state => {
        return state.account.otherAccount
    })

    const dispatch =useDispatch()

    useEffect(() => {
        dispatch(searchOtherAccount(idAccount));
        if(idAccount == account.idAccount){
            setEditInfo(true)
        }

    }, [])



    return (
        <>
            <main>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3">

                            <div className="d-flex align-items-center mb-4 d-lg-none">
                                <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <i className="btn btn-primary fw-bold fa-solid fa-sliders"></i>
                                    <span className="h6 mb-0 fw-bold d-lg-none ms-2">Settings</span>
                                </button>
                            </div>

                            <nav className="navbar navbar-light navbar-expand-lg mx-0">
                                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset ms-auto"
                                                data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>

                                    <div className="offcanvas-body p-0">
                                        <div className="card w-100">
                                            <div className="card-body">
                                                <ul className="nav nav-tabs nav-pills nav-pills-soft flex-column fw-bold gap-2 border-0">
                                                    <li className="nav-item" data-bs-dismiss="offcanvas">
                                                        <a className="nav-link d-flex mb-0 active"
                                                           href="#nav-setting-tab-1" data-bs-toggle="tab"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="/assets/images/icon/person-outline-filled.svg"
                                                            alt=""/><span>Account </span></a>
                                                    </li>
                                                    <li className="nav-item" data-bs-dismiss="offcanvas">
                                                        <a className="nav-link d-flex mb-0" href="#nav-setting-tab-2"
                                                           data-bs-toggle="tab"> <img className="me-2 h-20px fa-fw"
                                                                                      src="/assets/images/icon/notification-outlined-filled.svg"
                                                                                      alt=""/><span>About </span></a>
                                                    </li>
                                                    <li className="nav-item" data-bs-dismiss="offcanvas">
                                                        <a className="nav-link d-flex mb-0" href="#nav-setting-tab-3"
                                                           data-bs-toggle="tab"> <img className="me-2 h-20px fa-fw"
                                                                                      src="/assets/images/icon/shield-outline-filled.svg"
                                                                                      alt=""/><span>Privacy and safety </span></a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="card-footer text-center py-2">
                                                <a className="btn btn-link text-secondary btn-sm" href="#!">View
                                                    Profile </a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </nav>
                        </div>

                        <div className="col-lg-6 vstack gap-4">
                            <div className="tab-content py-0 mb-0">
                                <div className="tab-pane show active fade" id="nav-setting-tab-1">
                                    <div className="card mb-4">
                                        <Formik initialValues={account}
                                                onSubmit={ (values)=>{
                                                    values.idAccount = account.idAccount;
                                                    values.avatar = account.avatar;
                                                  dispatch(AccountsEdit(values)).then( ()=>{
                                                      console.log(values,2)
                                                      dispatch(searchOtherAccount(idAccount))
                                                        swal(`Update information`,{
                                                            icon:"success"
                                                        })})

                                                }}
                                        enableReinitialize={true}>

                                            <Form>
                                                <div className="card-header border-0 pb-0">
                                                    <h1 className="h5 card-title">Account Settings</h1>

                                                </div>

                                                <div className="card-body">
                                                    <div className="row g-3">

                                                        <div className="col-sm-6 ">
                                                            <label className="form-label">Name</label>
                                                            <Field type="text" className="form-control" name={'name'}/>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <label className="form-label">Address</label>
                                                            <Field type="text" className="form-control" name="address"/>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <Field as={'select'} className="form-control" name={'german'}>
                                                                <option value={'men'}>Men</option>
                                                                <option value={'woman'}>Woman</option>
                                                                <option value={'other'}>Other</option>
                                                            </Field>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label className="form-label">Birthday </label>
                                                            <Field type="text" className="form-control flatpickr" name="birthday"/>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label className="form-label">Birthday </label>
                                                            <Field type="text" className="form-control flatpickr" name="avatar"/>
                                                        </div>
                                                        <div className="col-12 text-end">
                                                            <button type="submit" className="btn btn-sm btn-primary mb-0">Save
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Formik>
                                    </div>
                                    <div className="card">
                                        <div className="card-header border-0 pb-0">
                                            <h5 className="card-title">Change your password</h5>
                                            <p className="mb-0">See resolved goodness felicity shy civility domestic had
                                                but.</p>
                                        </div>
                                        <div className="card-body">
                                            <form className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Current password</label>
                                                    <input type="text" className="form-control" placeholder=""/>
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">New password</label>
                                                    <div className="input-group">
                                                        <input className="form-control fakepassword" type="password"
                                                               id="psw-input" placeholder="Enter new password"/>
                                                        <span className="input-group-text p-0">
                          <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                        </span>
                                                    </div>

                                                    <div id="pswmeter" className="mt-2"></div>
                                                    <div id="pswmeter-message" className="rounded mt-1"></div>
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Confirm password</label>
                                                    <input type="text" className="form-control" placeholder=""/>
                                                </div>
                                                <div className="col-12 text-end">
                                                    <button type="submit" className="btn btn-primary mb-0">Update
                                                        password
                                                    </button>
                                                </div>
                                            </form>
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

export default Settings;
