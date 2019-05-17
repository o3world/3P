import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'

import LoadingSpinner from "../Common/LoadingSpinner"

import styles from './HamburgerMenu.module.scss';

const category_query = gql`
    query taxonomyNav {
        categories: taxonomyTermQuery(
            filter: {
                conditions: [
                    {field: "vid", value: "3p_categories"}, , 
                    {field: "field_show_in_nav", value: "1"}
                ]
            }, 
            sort: [
                {field: "name", direction: ASC}
            ]) {
        entities {
        ... on TaxonomyTerm {
                id: tid
                name
                categoryID: entityId
            }
        }
        }
    }`

const HamburgerCategories = () => {
    
    return (
        <Query query = {category_query}>{({ loading, error, data }) => {
            if (loading) return (
                <LoadingSpinner/>
            );
            if (error) return `Error! ${error.message}`;
  
            return (
                <section className={styles.subnavigation}>
                    { data.categories.entities.map((category) => {
                        let catCleanName = category.name.replace(/&/g, ' ').replace(/\s+/g, '-').toLowerCase();
                        
                        return (
                            <li><Link to={`/category/${catCleanName}/${category.categoryID}`}>{category.name}</Link></li>
                        )
                    }
                    ) }
                </section>
            );
          }}
        </Query>
    )
}

export default HamburgerCategories;