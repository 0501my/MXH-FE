import React, {useEffect, useState} from 'react';
import {addPosts, editPost, findByIdPost} from "../../services/PostService";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../services/fireBase";

const EditPost = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentPost = useSelector(state => {
        return state.currentPost.currentPost
    })
    const account = useSelector(state => {
        return state.account.currentAccount
    })
    const [images, setImages] = useState([]);
    const [progress, setProgress] = useState(0);
    const [urls, setUrls] = useState([]);
    const handleEditPost = (values) => {
        let data = {...values}
        dispatch(editPost(data)).then(() => {
            navigate('/home')
        })
    }
    const handleChange = async (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }

    };
    useEffect(() => {
        dispatch(findByIdPost(props.id))
    },[])
    useEffect(() => {
        handleUpload()
    }, [images])
    const handleUpload = () => {
        const promises = [];
        if (images.length > 0) {
            console.log(22)
            images.map((image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                promises.push(uploadTask);
                uploadTask.on("state_changed", (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                }, (error) => {
                    console.log(error);
                }, async () => {
                    await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                        setUrls(prevState => [...prevState, downloadURLs])
                        console.log("File available at", downloadURLs);
                    });
                });
            });
        }
        Promise.all(promises)
            .then()
            .catch((err) => console.log(err));

    }

    return (
        <>
            <li>
                        <a data-bs-toggle="modal" data-bs-target="#feedActionPhoto">
                            <i className="bi bi-bookmark fa-fw pe-2"></i>Edit Post
                        </a>
                {/*<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">*/}
                {/*    Launch static backdrop modal*/}
                {/*</button>*/}

            </li>

            <div className="modal fade" id="feedActionPhoto" data-backdrop="static" data-keyboard="false" tabIndex="-1"
                 aria-labelledby="feedActionPhotoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default EditPost;
