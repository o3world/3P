import React from 'react';
import styles from './EditorCardsWrapper.module.scss';
import EditorCard from './EditorCard';

const data = require("../Editors/editors.json");

const EditorCardsWrapper = () => (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Editorial Team</h3>
        <h4 className={styles.subtitle}>Critical Writers & Purpose Driven News Tellers</h4>
      </div>
      <div className={styles.editorCardsWrapper}>
          {data.map((editor, index) =>
              <EditorCard {...editor} key={editor.id} index={index}/>
          )}
      </div>
    </div>
);

export default EditorCardsWrapper;