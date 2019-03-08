import React from 'react'

import styles from './SingleStoryBio.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SingleStoryBio = (props) => {

  let headshot;
  if (props.headshot) {
    headshot = <img className={styles.headshot} src={props.headshot.url} alt={props.name + ' headshot'} />;
  }
  let twitterIcon;
  if (props.twitter !== null) {
    twitterIcon = <a href={'https://twitter.com/' + props.twitter} target={'_blank'} className={styles.twitterIcon}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "twitter"]} /></a>;
  }

  let instagramIcon;
  if (props.instagram !== null) {
    instagramIcon = <a href={'https://instagram.com/' + props.instagram} target={'_blank'} className={styles.instagramIcon}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "instagram"]} /></a>;
  }

  let linkedinIcon;
  if (props.linkedin !== null) {
    linkedinIcon = <a href={'https://www.linkedin.com/in/' + props.linkedin} target={'_blank'} className={styles.linkedinIcon}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "linkedin"]} /></a>
  }

  let emailIcon;
  if (props.email !== null) {
    emailIcon = <a href={'mailto:' + props.email} className={styles.emailIcon}><FontAwesomeIcon className={styles.socialIcon} icon={'envelope'} /></a>
  }

  return (
    <div className={styles.wrapper}>
      {headshot}
      <a className={styles.name} href={props.link}
         title={props.name + ' author page'}>{props.name}</a>
      <div className={styles.social_links}>
        {emailIcon} {twitterIcon} {instagramIcon} {linkedinIcon}
      </div>
      <div className={styles.bio} dangerouslySetInnerHTML={{__html: props.copy}}/>
    </div>
  )
};

export default SingleStoryBio;