import React from 'react';
import './Editors.css';
import Editor from './Editor';

const data = require("./editors.json");

const Editors = () => (
    <div>
        <h3>Editorial Team</h3>
        <h4>Critical Writers & Purpose Driven News Tellers</h4>
        <div className="editors__container">
            {data.map((editor, index) =>
                <Editor {...editor} key={editor.id} index={index}/>
            )}
        </div>
    </div>
);

export default Editors;