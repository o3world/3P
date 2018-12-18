import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./EditorCard.module.scss";

const EditorBio = (props) => {
  const editor = props.data.userById;
  const fullName = editor.firstName + " " + editor.lastName;

  let twitterIcon;
  if (editor.twitterUsername !== null) {
    twitterIcon = <a href={'https://twitter.com/' + editor.twitterUsername} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "twitter"]} /></a>;
  }

  let instagramIcon;
  if (editor.instagramUsername !== null) {
    instagramIcon = <a href={'https://instagram.com/' + editor.instagramUsername} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "instagram"]} /></a>;
  }

  return(
      <div>
        <div>
          <img src={editor.headshot.url} alt={fullName + ' headshot'}/>
          <h1>{fullName} </h1>
          <p>{editor.jobTitle}</p>
          <ul>
              <li>
                {twitterIcon}
              </li>
              <li>
                {instagramIcon}
              </li>
          </ul>
        </div>
        <div dangerouslySetInnerHTML={{__html: editor.bio.processed}} />
        <div>
          <p>Stories written by {fullName}</p>
        </div>
      </div>
  );

};

export default EditorBio;