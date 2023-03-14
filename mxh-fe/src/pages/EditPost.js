import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {editPost, findByIdPost} from "../services/PostService";
import {Field, Form, Formik} from "formik";

export default function EditPost() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()

    const post = useSelector(
        state => {
            return state.posts.post
        }
    )
    const handleEditPost = (values) => {
        let data = {...values}
        dispatch(editPost(data)).then(() => {
            navigate('/home')
        })
    }

    useEffect(() => {
        dispatch(findByIdPost(id)).then(() => {
        });
    }, [])
    return (
        <>
            <Formik initialValues={post}
                    onSubmit={(values) => {
                handleEditPost(values)
            }
            }
                    enableReinitialize={true}>
                    <section>
                        <div className="gap gray-bg">
                            <div className="container">
                                <div className="row merged20">
                                    <div className="col-lg-9">
                                        <div className="forum-warper">
                                            <div className="central-meta">
                                                <div className="title-block">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="align-left">
                                                                <h5>Edit Post</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="forum-form">
                                            <div className="central-meta">
                                                <Form method="post" className="c-form">
                                                    <div className="select-options">
                                                        <Field as={'select'} className="select" name={'status'}>
                                                            <option value={'public'}>Public</option>
                                                            <option value={'friendonly'}>Friend only</option>
                                                            <option value={'onlyme'}>Only me</option>
                                                        </Field>
                                                    </div>
                                                    <div>
                                                        <label>Content</label>
                                                        <Field as={'textarea'} type="text" name={'content'} />
                                                    </div>
                                                    <div>
                                                        <label>Image</label>
                                                        <Field type="text"  name={'image'}/>
                                                    </div>
                                                    <div>
                                                        <button className="main-btn" type="submit" >Edit
                                                        </button>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </Formik>
        </>
    )
}