import React from 'react';
import styles from './EditorCard.module.scss';
import ConvertSeoUrl from "../Common/createSeoUrl";
import ProfileImage from '../../assets/images/profile.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditorCard extends React.Component {
    render() {
        const seoLink = ConvertSeoUrl(this.props.name);
        const Image = this.props.userPicture === null ? ProfileImage : this.props.userPicture.url
        return (
            <div className={styles.wrapper}>
                <img className={styles.headshot} src={Image} alt={'editor headshot'} />
                <div className={styles.meta}>
                    <h3 className={styles.name}>{this.props.fieldFirstName + " " +this.props.fieldLastName}</h3>
                    <p className={styles.title}>{this.props.title}</p>
                    <div className={styles.socialWrapper}>
                        <a href={'https://instagram.com/' + this.props.instagram} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "instagram"]} /></a>
                        <a href={'https://twitter.com/' + this.props.twitter} target={'_blank'}><FontAwesomeIcon className={styles.socialIcon} icon={["fab", "twitter"]} /></a>
                    </div>
                </div>
            </div>
        );
    }

};


export default EditorCard;