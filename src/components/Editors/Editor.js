import React from 'react';
// import './Editors.css';

const Editor = (props) =>
    <div className="editor" key={props.id}><span className="editor_name">{props.displayName}</span>
        <span className="editor__twitter">Twitter: @{props.twitter}</span>
    </div>;


export default Editor;