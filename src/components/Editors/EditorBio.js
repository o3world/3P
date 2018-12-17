import React from 'react'
import styles from './EditorCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const EditorBio = (props) => {
    const EditorDetails = props.data.userById;
    const EditorName = EditorDetails.fieldFirstName + " " + EditorDetails.fieldLastName;

    return(
        <div>
          <div>
            <img src={EditorDetails.userPicture.url} />
            <p><h3 className={styles.name}>{EditorName}</h3></p>
            <p>{/* @TODO Add job title. */}</p>
              {/* @TODO Add social icons and links. Use Font Awesome icons. */}
              {/* @TODO For now We are using static links for twitter and instagram but implementing the icons and styles */}
            <ul>
                <li>
                    <p className={styles.title}><a href={'https://instagram.com/jhowell'} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "twitter"]} />@jhowell</a></p>
                </li>
                <li>
                    <p className={styles.title}><a href={'https://twitter.com/jhowell'} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "instagram"]} />@jhowell</a></p>
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