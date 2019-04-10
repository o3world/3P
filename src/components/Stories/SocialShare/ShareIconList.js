import React from 'react';
import styles from './ShareIconList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShareIconList = (props) => 
  <div className={styles.socialIcons}>
    <a target='_blank' rel="noopener noreferrer" href={`mailto:?subject=TriplePundit.com: ${props.title}&body=From TriplePundit - The Business of Doing Better%0D%0A%0D%0A${props.description}%0D%0A%0D%0A${props.url}`}><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
    <a target='_blank' rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${props.url}&title=${props.title}`}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
    <a target='_blank' rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?url=${props.url}`}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
    <a target='_blank' rel="noopener noreferrer" href={`https://www.linkedin.com/shareArticle?mini=true&url=${props.url}`}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
  </div>

export default ShareIconList;
