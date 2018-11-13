import React from 'react';
import './HomeEditor.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const HomeEditor = (props) => {
    return (
        <div className={'home-editor__wrapper'}>
            <img className={'home-editor__headshot'} src={props.icon} alt={'editor headshot'} />
            <div className={'home-editor__meta-wrapper'}>
                <h3 className="home-editor__name">{props.displayName}</h3>
                <p className={'home-editor__title'}>{props.title}</p>
                <div className={'home-editor__social-wrapper'}>
                  <FontAwesomeIcon className={'social-icon'} icon={["fab", "instagram"]} />
                    <p className="home-editor__twitter">@{props.twitter}</p>
                </div>
            </div>
        </div>
    );
};


export default HomeEditor;