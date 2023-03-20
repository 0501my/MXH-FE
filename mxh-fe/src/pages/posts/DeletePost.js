import React from 'react';
import swal from "sweetalert";
import {deletePost} from "../../services/PostService";
import {useDispatch} from "react-redux";

const DeletePost = (props) => {
    const dispatch = useDispatch();
    const handleDelete = async () => {
        dispatch(deletePost(props.id))
    }
    return (
        <>
            <li>
                <a className="dropdown-item" style={{cursor: "pointer"}} onClick={() => {
                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                handleDelete().then(() => {
                                    swal("Poof! Your imaginary file has been deleted!", {
                                        icon: "success",
                                    })
                                });
                            } else {
                                swal("Your imaginary file is safe!")
                            }
                        });
                }}> <i className="bi bi-trash3-fill" style={{color: "red"}}></i> Delete</a></li>
        </>

    )
}
export default DeletePost;
