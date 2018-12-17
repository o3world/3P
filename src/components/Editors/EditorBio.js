import React from 'react'

const EditorBio = (props) => {
    const EditorDetails = props.data.userById;
    const EditorName = EditorDetails.fieldFirstName + " " + EditorDetails.fieldLastName;

    return(
        <div>
          <div>
            <img src={EditorDetails.userPicture.url} alt={EditorName + ' headshot'}/>
            <p>{EditorName} </p>
            <p>{/* @TODO Add job title. */}</p>
            <ul>{/* @TODO Add social icons and links. Use Font Awesome icons. */}</ul>
          </div>
          <div dangerouslySetInnerHTML={{__html: EditorDetails.fieldUserBio.processed}} />
          <div>
            <p>Stories written by {EditorName}</p>
          </div>
        </div>
    );

};

export default EditorBio;