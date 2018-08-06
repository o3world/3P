import React from 'react';
// import './Editors.css';
import Editor from './Editor';

const data = require("./editors.json");

const Editors = () => (
    <div className="editors__container">
        <h3>Editorial Team</h3>
        <h4>Critical Writers & Purpose Driven News Tellers</h4>
        {data.map(editor =>
            <Editor {...editor}/>
        )}
    </div>
);

export default Editors;