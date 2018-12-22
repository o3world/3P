import React from 'react';
import styles from './EditorCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditorCard extends React.Component {
    render() {
      const editor = this.props;
      const fullName = editor.firstName + ' ' + editor.lastName;

      let twitterIcon;
      if (editor.twitterUsername !== null) {
        twitterIcon = <a href={'https://twitter.com/' + editor.twitterUsername} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "twitter"]}/></a>;
      }

      let instagramIcon;
      if (editor.instagramUsername !== null) {
        instagramIcon = <a href={'https://instagram.com/' + editor.instagramUsername} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "instagram"]} /></a>;
      }

      return (
          <div className={styles.wrapper}>
              <img className={styles.headshot} src={editor.headshot.url} alt={fullName + ' headshot'} />
              <div className={styles.meta}>
                <h3 className={styles.name}><a href={'/editor/' + editor.id + '/' + editor.firstName + '-' + editor.lastName} title={fullName}>{fullName}</a></h3>
                  <p className={styles.title}>{editor.jobTitle}</p>
                  <div className={styles.socialWrapper}>
                    {instagramIcon}
                    {twitterIcon}
                  </div>
              </div>
          </div>
      );
    }
}

export default EditorCard;