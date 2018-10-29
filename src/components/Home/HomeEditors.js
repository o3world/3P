import React from 'react';
import './HomeEditors.css';
import HomeEditor from './HomeEditor';

const data = require("../Editors/editors.json");

const HomeEditors = () => (
    <div className="editors__wrapper">
        <h3>Editorial Team</h3>
        <h4>Critical Writers & Purpose Driven News Tellers</h4>
        <div className="editors__container">
            {data.map((editor, index) =>
                <HomeEditor {...editor} key={editor.id} index={index}/>
            )}
        </div>
    </div>
);

export default HomeEditors;