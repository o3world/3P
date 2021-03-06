import React from 'react';
import styles from './EditorCardsWrapper.module.scss';
import EditorCard from './EditorCard';
import { Query } from 'react-apollo';
import { EditorsQuery } from "../Editors/EditorsQueries";
import LoadingSpinner from "../Common/LoadingSpinner";

const EditorCardsWrapper = () =>
    <Query
        query={EditorsQuery}
        variables={{}}
    >
      {({ loading, error, data }) => {
        if (loading) return <LoadingSpinner/>;
        if (error) return `Error! ${error.message}`;
        const editors = data.userQuery.entities;

        return (
    <section className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Editorial Team</h3>
        <h4 className={styles.subtitle}>We report the business case for sustainability.</h4>
      </div>
      <div className={styles.editorCardsWrapper}>
        {
          editors.map((editor, index) =>
            <EditorCard key={index} {...editor}/>
          )
        }
      </div>
    </section>
        );
      }}
    </Query>;

export default EditorCardsWrapper;
