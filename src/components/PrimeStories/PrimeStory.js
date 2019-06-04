import React from 'react';
import styles from './PrimeStory.module.scss';
import {Link} from "react-router-dom";

import Moment from 'react-moment';

const PrimeStory = (props) => {
        const link = '/story/' + new Date(props.date.value * 1000).getFullYear() + props.entityUrl.path + '/' + props.id + '/';
        const storyClass = (props.index === '1') ? styles.primeStorySecond : styles.primeStory;

        let category;
        if (props.category) {
            category = <p className={styles.category}>{props.category.entity.name}</p>;
        }

        // The first non-hero prime story is wide in wide viewports. All others are tall always.
        let backgroundImage = props.tallImage.derivative.url;
        if (props.index === "1") {
          backgroundImage = props.wideImage.derivative.url;
        }

        return (
          <Link to={link} className={storyClass}>
            <picture className={styles.backgroundImage} alt={''} >
              <source srcset={props.tallImage.derivative.url} media="(max-width: 600px)" />
              <source srcset={props.tallImage.derivative.url + '.webp'} media="(max-width: 600px)" type="image/webp" />
              <source type="image/webp" srcset={backgroundImage + '.webp'} />
              <img src={backgroundImage} alt={''} />
            </picture>
            <div className={styles.content}>
              <h3 className={styles.title}><span>{props.title}</span></h3>
              <p className={styles.author}>Words by {props.author.first} {props.author.last}</p>
              {category}
              <Moment className={styles.date} format="MMM DD">{props.date.value * 1000}</Moment>
            </div>
          </Link>
        );
};

export default PrimeStory;