  //  <Formik initialValues={currentPost}
  //         onSubmit={(values) => {
  //            handleEditPost(values)
  //          }}
  //           enableReinitialize={true}>
  //
  //      <div className="popup-wraper active">
  //          <div className="popup">
  //                   setCheck(false)
  //                 }}><i className="ti-close"></i></span>
  //             <div className="popup-meta">
  //                 <div className="popup-head">
  //                     <h5>Edit Post</h5>
  //                 </div>
  //                 <div className="forum-form">
  //                     <div className="postbox">
  //                         <div className="new-postbox">
  //                             <Form>
  //                                 <div className="newpst-input">
  //                                     <div>
  //                                         <label>Content</label>
  //                                         <Field as={'textarea'} type="text" name={'content'}/>
  //                                     </div>
  //
  //                                     {(currentPost && currentPost.image != 1) ?
  //                                         <div className="image-container2">
  //                                             <img src={currentPost.image} style={{width: 300}}/>
  //                                             <div className="close-button" style={{color: '#cc0000'}}
  //                                                  onClick={() => {
  //                                                      let newPost = {...currentPost};
  //                                                      newPost.image = '1'
  //                                                      dispatch(handleEditPost(newPost))
  //                                                  }}>&times;</div>
  //                                         </div> : <></>}
  //                                     <div>
  //                                         {urls && <>
  //                                             <img src={urls[urls.length - 1]} alt=""
  //                                                  style={{
  //                                                      width: 300, marginBottom: "10px"
  //                                                  }}/></>}
  //                                     </div>
  //                                     <div>
  //                                         <input type="file" id="myFile" name="image"
  //                                                onChange={handleChange}/>
  //                                         <label htmlFor="myFile" className="file-upload"><i
  //                                             className="fa fa-camera"
  //                                             style={{fontSize: "18px"}}/></label>
  //                                     </div>
  //                                     <div className="select-options">
  //                                         <hr/>
  //                                         <Field as={'select'} className="select" name={'status'}>
  //                                             <option value={'public'}>Public</option>
  //                                             <option value={'friendonly'}>Friend only</option>
  //                                             <option value={'onlyme'}>Only me</option>
  //                                         </Field>
  //                                     </div>
  //                                     <button className="post-btn" type="submit" data-ripple="">Edit
  //                                     </button>
  //                                 </div>
  //                             </Form>
  //                         </div>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  //
  // </Formik>
