import React from 'react';
import styles from './PrimeStory.module.scss';
import {Link} from "react-router-dom";

import Moment from 'react-moment';

const PrimeStory = (props) => {
        const storyStyle = {
            "--tall-bg-image": `url(${props.tallImage.derivative.url})`,
            "--wide-bg-image": `url(${props.wideImage.derivative.url})`
        };
        const link = '/story/' + new Date(props.date.value * 1000).getFullYear() + props.entityUrl.path + '/' + props.id + '/';
        const storyClass = (props.index === '1') ? styles.primeStorySecond : styles.primeStory;

        let category;
        if (props.category) {
            category = <p className={styles.category}>{props.category.entity.name}</p>;
        }

        return (
          <Link to={link} className={storyClass} style={storyStyle}>
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