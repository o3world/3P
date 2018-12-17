import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditorBio = (props) => {
    const EditorDetails = props.data.userById;
    const EditorName = EditorDetails.fieldFirstName + " " + EditorDetails.fieldLastName;

    return(
        <div>
          <div>
            <img src={EditorDetails.userPicture.url} alt={EditorName + ' headshot'}/>
            <p>{EditorName} </p>
            <p>{/* @TODO Add job title. */}</p>
            <ul>
                <li>
                    <p><a href={'https://instagram.com/jhowell'} target={'_blank'}><FontAwesomeIcon icon={["fab", "twitter"]} />ADD TWITTER ICON{/* @TODO Add Twitter icon */}</a></p>
                </li>
                <li>
                    <p><a href={'https://twitter.com/jhowell'} target={'_blank'}><FontAwesomeIcon icon={["fab", "instagram"]} />ADD INSTAGRAM ICON{/* @TODO Add Instagram icon */}</a></p>
                </li>
            </ul>
          </div>
          <div dangerouslySetInnerHTML={{__html: EditorDetails.fieldUserBio.processed}} />
          <div>
            <p>Stories written by {EditorName}</p>
          </div>
        </div>
    );

};

export default EditorBio;