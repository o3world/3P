import React from 'react';
import styles from './EditorCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditorCard extends React.Component {
    render() {
      const editor = this.props;
      const fullName = editor.firstName + ' ' + editor.lastName;
        return (
            <div className={styles.wrapper}>
                <img className={styles.headshot} src={editor.headshot.url} alt={fullName + ' headshot'} />
                <div className={styles.meta}>
                    <h3 className={styles.name}>{editor.firstName + " " +editor.lastName}</h3>
                    <p className={styles.title}>{editor.title}</p>
                    <div className={styles.socialWrapper}>
                        <a href={'https://instagram.com/' + editor.instagram} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "instagram"]} /></a>
                        <a href={'https://twitter.com/' + editor.twitter} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "twitter"]} /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditorCard;