import React from 'react'
import CategoryStoriesWrapper from './CategoryStoriesWrapper'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import {SingleCategoryTax} from "../Stories/StoryQueries"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Query} from "react-apollo"

import styles from './SingleCategoryPage.module.scss'

const SingleCategoryPage = (props) => {

  const categoryId = props.match.params.id;

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
              <section>
                <Header />
                <h1 className={styles.titleBar}>{category.name}</h1>
                <CategoryStoriesWrapper categoryId={categoryId}/>
                <Footer />
              </section>
          );
        }}
      </Query>
  )
};

export default SingleCategoryPage;