import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {AccountsEdit, findById} from "../services/AccountService";

export default function EditUser(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()

const user = useSelector(
    state => {
        return state.user.user
    }
)
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const handleEditUser = (values)=> {
        let data = {...values}
        dispatch(AccountsEdit(data)).then(()=>{
            navigate('/home')
        })
    }
    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };
    const handleUpload = () => {
        const promises = [];
        if (images.length > 0) {
            images.map((image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                promises.push(uploadTask);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                            setUrls(prevState => [...prevState, downloadURLs])
                            console.log(urls)
                        });
                    }
                );
            });
        }

        Promise.all(promises)
            .then(() => alert("All images uploaded"))
            .catch((err) => console.log(err));

    }
    useEffect(()=>{
        dispatch(findById(id)).then((e)=>{
            setUrls([e.payload.avatar])
        });
    },[])
    return(
        <>

        </>
    )
}
