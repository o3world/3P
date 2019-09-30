import React from 'react'
import { Query } from 'react-apollo'
import { ContributorsQuery } from "../Editors/EditorsQueries"
import LoadingSpinner from "../Common/LoadingSpinner"

import styles from './Contributors.module.scss'


      const Contributors = () =>
    <Query
        query={ContributorsQuery}
        variables={{}}
    >
      {({ loading, error, data }) => {
        if (loading) return <LoadingSpinner/>;
        if (error) return `Error! ${error.message}`;
        const contributors = data.userQuery.entities;

        return (
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>Contributors</h2>
              <hr className={styles.rule}/>
                <div className={styles.contribCopy}>TriplePundit’s staff of writers a wide array of professional and personal experiences to bear on original reporting. Contributors include experienced journalists, executives and consultants who have worked with Fortune 500 companies, and activists supporting social innovation or environmental stewardship through work at nonprofits. Located around the world, our writers bring in-depth, global perspectives to the issues that matter to business today.</div>
              <ul className={styles.contribList}>
              {
                contributors.map((contributor, index) =>
                  <li><a href={`/author/${contributor.name.replace(/\s+/g, '-').toLowerCase()}/${contributor.id}`}>{contributor.name}</a></li>
                )
              }
              </ul>
            </div>
        )
      }}
    </Query>;

export default Contributors;