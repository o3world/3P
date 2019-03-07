import React from 'react'
import CategoryStoriesWrapper from './CategoryStoriesWrapper'
import {SingleCategoryTax} from "../Stories/StoryQueries"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Query} from "react-apollo"

import styles from './SingleCategoryPage.module.scss'
import PageTemplate from "../Common/PageTemplate"

import { Helmet } from "react-helmet"

const SingleCategoryPage = (props) => {

  const categoryId = props.match.params.id;
  const currentURL = 'https://triplepundit.com' + props.location.pathname;

  return (
      <Query
          query={SingleCategoryTax}
          variables={{"id": categoryId}}
      >
        {({ loading, error, data }) => {
          if (loading) return (
              <div className={styles.spinner}>
                <p>Gathering Stories...</p>
                <FontAwesomeIcon icon="spinner" spin/>
              </div>
          );
          if (error) return `Error! ${error.message}`;
          const category = data.categories;

          return (
              <PageTemplate>
                <Helmet>
                  <meta name="parsely-title" content={category.name} />
                  <meta name="parsely-link" content={currentURL} />
                  <meta name="parsely-type" content="sectionpage" />
                </Helmet>
                <h1 className={styles.titleBar}>{category.name}</h1>
                <CategoryStoriesWrapper categoryId={categoryId}/>
              </PageTemplate>
          );
        }}
      </Query>
  )
};

export default SingleCategoryPage;
