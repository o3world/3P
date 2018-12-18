import React from 'react';
import styles from './EditorCardsWrapper.module.scss';
import EditorCard from './EditorCard';

const EditorCardsWrapper = (props) =>{
  return(
    <section className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Editorial Team</h3>
        <h4 className={styles.subtitle}>Critical Writers & Purpose Driven News Tellers</h4>
      </div>
      <div className={styles.editorCardsWrapper}>
        { props.data.userQuery.entities.map((editor, index) => (
          <EditorCard {...editor} key={editor.id} index={index}/>
          )
        )}
      </div>
    </section>
  )
};

export default EditorCardsWrapper;