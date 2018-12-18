import React from 'react';
import styles from './EditorCard.module.scss';
import ConvertSeoUrl from "../Common/createSeoUrl";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditorCard = (props) => {
    const seoLink = ConvertSeoUrl(props.name);
    return (
        <div className={styles.wrapper}>
            <img className={styles.headshot} src={props.userPicture.url} alt={'editor headshot'} />
            <div className={styles.meta}>
                <h3 className={styles.name}>
                    <a href={"/editors/"+props.uid+"/"+seoLink}>{props.fieldFirstName+" "+props.fieldLastName}</a></h3>
                <p className={styles.title}>{props.title}</p>
                <div className={styles.socialWrapper}>
                  <a href={'https://instagram.com/' + props.instagram} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "instagram"]} /></a>
                  <a href={'https://twitter.com/' + props.twitter} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "twitter"]} /></a>
                </div>
            </div>
        </div>
    );
};


export default EditorCard;