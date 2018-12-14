import React from 'react'
import EditorPic from '../../assets/images/profile_pic1.png'

const EditorSocial = (props) => {
    const EditorDetails = props.data.userById;
    const profilePic = (EditorDetails.userPicture !== null) ? EditorDetails.userPicture.url : {EditorPic};
    return(
        <div>
            <div>
                <img src={profilePic} />
                <p>{EditorDetails.fieldFirstName} {EditorDetails.fieldLastName} </p>
                <p>Chief of thought leadership</p>
                <p>@jhowell</p>
                <p>@jhowell</p>
            </div>
            <div>
                <p>{EditorDetails.fieldUserBio.processed}</p>
            </div>
        </div>
    );

}

export default EditorSocial;