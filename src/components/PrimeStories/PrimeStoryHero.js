import React from 'react';
import styles from './PrimeStoryHero.module.scss';
import Moment from "react-moment";

const PrimeStoryHero = (props) => {
  const heroImageStyle = {
      "--tall-bg-image": `url(${props.tallImage.url})`,
      "--wide-bg-image": `url(${props.wideImage.url})`
  };
  const published_date = new Date(props.date * 1000);

  return (
      <div className={styles.wrapper} style={heroImageStyle}>
          <div className={styles.meta}>
              <h3 className={styles.name}>{props.title}</h3>
              <p className={styles.author}>Words by {props.author.first} {props.author.last}</p>
              <time className={styles.date}><Moment format="MMM DD">{published_date}</Moment></time>
          </div>
      </div>
  );
};

export default PrimeStoryHero;