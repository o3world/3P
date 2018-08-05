import React from 'react';
// import './Editors.css';
import Editor from './Editor';

const data = require("../../data/editors.json");

const Editors = () => (
    <div className="editors__container">
        <h3>Meet Our Editors</h3>
        {data.map(editor =>
            <Editor {...editor}/>
        )}
    </div>
);

export default Editors;