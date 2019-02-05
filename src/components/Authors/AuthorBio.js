import React from 'react'
import {Query} from 'react-apollo'

import { SingleAuthorBioQuery } from '../Editors/EditorsQueries'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./AuthorBio.module.scss"
import LoadingSpinner from "../Common/LoadingSpinner"

const AuthorBio = (props) => (
      <Query
      query={SingleAuthorBioQuery}
      variables={{"id": props.authorId}}
  >
    {({ loading, error, data }) => {
      if (loading) return (
          <LoadingSpinner/>
      );
      if (error) return `Error! ${error.message}`;
      const author = data.userById;

      const authorName = author.first && author.last ? `${author.first} ${author.last}` : author.name;

      let headshot;
      if (author.headshot) {
        headshot = <img className={styles.headshot} src={author.headshot.url} alt={authorName + ' headshot'} />;
      }
      let twitterIcon;
      if (author.twitterUsername !== null) {
        twitterIcon = <a href={'https://twitter.com/' + author.twitterUsername} target={'_blank'} className={styles.twitterIcon}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "twitter"]} /></a>;
      }

      let instagramIcon;
      if (author.instagramUsername !== null) {
        instagramIcon = <a href={'https://instagram.com/' + author.instagramUsername} target={'_blank'} className={styles.instagramIcon}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "instagram"]} /></a>;
      }

      let linkedinIcon;
      if (author.linkedinUsername !== null) {
        linkedinIcon = <a href={'https://www.linkedin.com/in/' + author.linkedinUsername} target={'_blank'} className={styles.linkedinIcon}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "linkedin"]} /></a>
      }

      let emailIcon;
      if (author.email !== null) {
        emailIcon = <a href={'mailto:' + author.email} className={styles.emailIcon}><FontAwesomeIcon className={styles.socialIcon} icon={'envelope'} /></a>
      }

      return (
          <section className={styles.wrapper}>
            <h1 className={styles.name}>{authorName}</h1>
            {headshot}
            <div className={styles.socialWrapper}>
              {twitterIcon}
              {instagramIcon}
              {linkedinIcon}
              {emailIcon}
            </div>
            <div className={styles.bio} dangerouslySetInnerHTML={{__html: author.bio.processed}}/>
          </section>
      );
    }}
  </Query>
);

export default AuthorBio;
