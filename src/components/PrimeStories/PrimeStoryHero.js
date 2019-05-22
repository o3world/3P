import React from 'react';
import styles from './PrimeStoryHero.module.scss';
import Moment from "react-moment";
import {Link} from "react-router-dom";

const PrimeStoryHero = (props) => {
  const heroImageStyle = {
      "--tall-bg-image": `url(${props.tallImage.derivative.url})`,
      "--wide-bg-image": `url(${props.wideImage.derivative.url})`
  };
  const link = '/story/' + new Date(props.date.value * 1000).getFullYear() + props.entityUrl.path + '/' + props.id + '/';

  return (
    <Link to={link} className={styles.wrapper} style={heroImageStyle}>
      <div className={styles.meta}>
        <h3 className={styles.name}><span>{props.title}</span></h3>
        <p className={styles.author}>Words by {props.author.first} {props.author.last}</p>
        <Moment className={styles.date} format="MMM DD">{props.date.value * 1000}</Moment>
      </div>
    </Link>
  );
};

export default PrimeStoryHero;