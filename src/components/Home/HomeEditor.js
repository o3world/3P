import React from 'react';
import './HomeEditor.css';

const HomeEditor = ({displayName, twitter, index}) => {
    let indexClass = "";
    switch (index) {
        case 0:
            indexClass = " editor--first";
            break;
        case 1:
            indexClass = " editor--second";
            break;
        case 2:
            indexClass = " editor--third";
            break;
        default:
    }
    return (
        <div className={"editor" + indexClass}><span className="editor_name">{displayName}</span>
            <span className="editor__twitter">Twitter: @{twitter}</span>
        </div>
    );
};


export default HomeEditor;