import React from 'react';
import {Query} from 'react-apollo';

import { SingleEditorBioQuery } from './EditorsQueries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./EditorBio.module.scss";

const EditorBio = (props) => {

  return(
      <Query
      query={SingleEditorBioQuery}
      variables={{"id": props.editorId}}
  >
    {({ loading, error, data }) => {
      if (loading) return (
          <div className={styles.spinner}>
            <p>Loading the editor bio...</p>
            <FontAwesomeIcon icon="spinner" spin/>
          </div>
      );
      if (error) return `Error! ${error.message}`;
      const editor = data.userById;

      const fullName = editor.firstName + " " + editor.lastName;

      let twitterIcon;
      if (editor.twitterUsername !== null) {
        twitterIcon = <a href={'https://twitter.com/' + editor.twitterUsername} target={'_blank'} className={styles.twitterIcon}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "twitter"]} /> @{editor.twitterUsername}</a>;
      }

      let instagramIcon;
      if (editor.instagramUsername !== null) {
        instagramIcon = <a href={'https://instagram.com/' + editor.instagramUsername} target={'_blank'} className={styles.instagramIcon}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "instagram"]} /> {editor.instagramUsername}</a>;
      }

      return (
          <section className={styles.wrapper}>
            <img className={styles.headshot} src={editor.headshot.url} alt={fullName + ' headshot'}/>
            <div className={styles.meta}>
              <div className={styles.nameTitleWrapper}>
                <h1 className={styles.name}>{fullName}</h1>
                <p className={styles.jobTitle}>{editor.jobTitle}</p>
              </div>
              <div className={styles.socialWrapper}>
                {twitterIcon}
                {instagramIcon}
              </div>
            </div>
            <div className={styles.bio}>
              <div dangerouslySetInnerHTML={{__html: editor.bio.processed}} />
            </div>
          </section>
      );
    }}
  </Query>
  );

};

export default EditorBio;