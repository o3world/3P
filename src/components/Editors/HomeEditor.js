import React from 'react';
import './HomeEditor.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeEditor = (props) => {
    return (
        <div className={'home-editor__wrapper'}>
            <img className={'home-editor__headshot'} src={props.icon} alt={'editor headshot'} />
            <div className={'home-editor__meta-wrapper'}>
                <h3 className="home-editor__name">{props.displayName}</h3>
                <p className={'home-editor__title'}>{props.title}</p>
                <div className={'home-editor__social-wrapper'}>
                  <a href={'https://instagram.com/' + props.instagram} target={'_blank'}><FontAwesomeIcon className={'social-icon'} icon={["fab", "instagram"]} /></a>
                  <a href={'https://twitter.com/' + props.twitter} target={'_blank'}><FontAwesomeIcon className={'social-icon'} icon={["fab", "twitter"]} /></a>
                </div>
            </div>
        </div>
    );
};


export default HomeEditor;