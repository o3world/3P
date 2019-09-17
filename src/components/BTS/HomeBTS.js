import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Moment from 'react-moment';
import LoadingSpinner from "../Common/LoadingSpinner"

import styles from "./HomeBTS.module.scss"

import bts_background from '../../assets/images/bts_background.png'

const currentBTS = gql`
  query bts {
    nodeQuery(
      filter:{
        conditions: [
          {field: "type", value: "current_bts"},
          {field: "nid", value: "82961"}
        ]
      }
    ) {
      entities {
        ... on NodeCurrentBts  {
          title
          date: fieldBtsDate {
            value
          }
          headshot: fieldBtsHeadshot {
            width
            url
            height
            targetId
            alt
            title
          }
          author: fieldBtsByline
        }
      }
    }
  }
`;

  const homeBTSStyle = {
    backgroundImage: `url(${bts_background})`
  };

const HomeBTS = () => 
  <Query
      query={currentBTS}
      variables={{}}
  >
      {({ loading, error, data }) => {
          if (loading) return <LoadingSpinner/>;
          if (error) return `Error! ${error.message}`;
          const bts = data.nodeQuery.entities[0];

    return (
        <div className={styles.wrapper} style={homeBTSStyle}>
          <div className={styles.headerWrapper}>
            <div className={styles.headerBranding}>
              <h2 className={styles.headerTitle}>Brands Taking Stands<span className={styles.titleTrademark}>&trade;</span></h2>
              <h4 className={styles.headerSubtitle}>Insights for Global Business Leaders</h4>
            </div>
            <p className={styles.headerFrequency}>Every <span className={styles.frequencyDate}>Wed.</span></p>
            <img src={bts.headshot.url} className={styles.headerHeadshot} alt={bts.headshot.alt} />
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.dateWrapper}>
            <h4>Weekly Newsletter</h4>
            <Moment className={styles.date} format={'MMM DD'}>{bts.date.value}</Moment>
            </div>
            <h3 className={styles.title}>{bts.title}</h3>
            <p className={styles.author}>{bts.author}</p>
          </div>
          <a href={'http://www.3blforum.com/brands-taking-stands-newsletter/newsletter-sign-up'} className={styles.button} target={'_blank'}>Subscribe</a>
        </div>
    )
}}
</Query>;

export default HomeBTS;