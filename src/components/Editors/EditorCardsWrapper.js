import React from 'react';
import styles from './EditorCardsWrapper.module.scss';
import EditorCard from './EditorCard';

const EditorCardsWrapper = (props) =>{
    return(
            <div className={styles.wrapper}>
              <div className={styles.titleWrapper}>
                <h3 className={styles.title}>Editorial Team</h3>
                <h4 className={styles.subtitle}>Critical Writers & Purpose Driven News Tellers</h4>
              </div>
              <div className={styles.editorCardsWrapper}>
                  { /* props.data.userQuery.entities.map((editor, index) =>{
                    if(editor.userPicture !== null) {
                        return(
                            <EditorCard {...editor} key={editor.uid} index={index}  onclick={props.other.click}/>
                          )
                    }
                  }
                  ) */ }
              </div>
            </div>
    )
} 

export default EditorCardsWrapper;