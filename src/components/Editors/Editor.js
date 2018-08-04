import React from 'react';
// import './Editors.css';

const Editor = (props) =>
    <div className="editor" key={props.id}>{props.displayName}
        <span className="twitter">Twitter: @{props.twitter}</span>
    </div>


export default Editor;