import React from 'react';
import styles from './PrimeStoryHero.module.scss';
import Moment from "react-moment";
import {Link} from "react-router-dom";

const PrimeStoryHero = (props) => {
  const link = '/story/' + new Date(props.date.value * 1000).getFullYear() + props.entityUrl.path + '/' + props.id + '/';

  return (
    <Link to={link} className={styles.wrapper}>
      <picture className={styles.heroImage} alt={''} >
        <source srcset={props.tallImage.derivative.url + '.webp'} media="(max-width: 600px)" type="image/webp" />
        <source srcset={props.wideImage.derivative.url + '.webp'} type="image/webp" />
        <source srcset={props.tallImage.derivative.url} media="(max-width: 600px)" />
        <img src={props.wideImage.derivative.url} alt={''} />
      </picture>
      <div className={styles.meta}>
        <h3 className={styles.name}><span>{props.title}</span></h3>
        <p className={styles.author}>Words by {props.author.first} {props.author.last}</p>
        <Moment className={styles.date} format="MMM DD">{props.date.value * 1000}</Moment>
      </div>
    </Link>
  );
};

export default PrimeStoryHero;