import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {editPost, findByIdPost} from "../services/PostService";
import {Field, Form, Formik} from "formik";

export default function EditPost() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()
    useEffect(() => {
        dispatch(findByIdPost(id)).then(() => {
        });
    }, [])
    const post = useSelector(
        state => {
            console.log(state)
            return state.posts.post
        }
    )
    const handleEditPost = (values) => {
        let data = {...values}
        dispatch(editPost(data)).then(() => {
            console.log(data)
            navigate('/home')
        })
    }
    return (
        <>
            <Formik initialValues={post} onSubmit={(values) => {
                handleEditPost(values)
            }
            }

                    enableReinitialize={true}>
                <Form>
                    <div>
                        <label>Status</label>
                        <Field type="text" name={'status'}/>
                    </div>
                    <div>
                        <label>Content</label>
                        <Field type="text" name={'content'}/>
                    </div>
                    <div>
                        <label>Time</label>
                        <Field type="text" name={'time'}/>
                    </div>
                    <div>
                        <label>Image</label>
                        <Field type="text" name={'image'}/>
                    </div>
                    <button type="submit">EDIT</button>
                </Form>
            </Formik>
        </>
    )
}