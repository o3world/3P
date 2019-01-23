import React from 'react';
import styles from './EditorCard.module.scss';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditorCard extends React.Component {
    render() {
      const editor = this.props;
      const fullName = editor.firstName + ' ' + editor.lastName;

      let emailIcon;
      if (editor.email !== null) {
        emailIcon = <a href={'mailto:' + editor.email}><FontAwesomeIcon className={styles.socialIcon} icon={'envelope'}/></a>
      }

      let twitterIcon;
      if (editor.twitterUsername !== null) {
        twitterIcon = <a href={'https://twitter.com/' + editor.twitterUsername} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "twitter"]}/></a>;
      }

      let instagramIcon;
      if (editor.instagramUsername !== null) {
        instagramIcon = <a href={'https://instagram.com/' + editor.instagramUsername} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "instagram"]} /></a>;
      }

      let linkedinIcon;
      if (editor.linkedinUsername !== null) {
        linkedinIcon = <a href={'https://www.linkedin.com/in/' + editor.linkedinUsername} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "linkedin"]} /></a>
      }

      return (
          <div className={styles.wrapper}>
              <img className={styles.headshot} src={editor.headshot.url} alt={fullName + ' headshot'} />
              <div className={styles.meta}>
                  <h3 className={styles.name}><Link to={'/editor/' + editor.id + '/' + editor.firstName + '-' + editor.lastName} title={fullName}><span>{fullName}</span></Link></h3>
                  <p className={styles.title}>{editor.jobTitle}</p>
                  <div className={styles.socialWrapper}>
                    {emailIcon}
                    {instagramIcon}
                    {twitterIcon}
                    {linkedinIcon}
                  </div>
              </div>
          </div>
      );
    }
}

export default EditorCard;