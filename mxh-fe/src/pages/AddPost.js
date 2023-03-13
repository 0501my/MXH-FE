import React from 'react';
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {addPosts} from "../services/PostService";

const AddPost = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <>
            <div>
                Add Post
            </div>
            <div>
                <Formik
                    initialValues={{
                        content:"",
                        time:"",
                        image:""
                    }}
                    onSubmit={ (values) =>{
                        values.account = 1;
                        dispatch(addPosts(values)).then(()=>{
                            navigate('/Home');
                        })
                    }
                    }>
                    <Form>
                        <Field type='text' name={'content'}/>
                        <Field type='text' name={'time'}/>
                        <Field type='text' name={'image'}/>
                        <button type='submit'>Add</button>
                    </Form>
                </Formik>
            </div>
        </>

    )
}
export default AddPost;
