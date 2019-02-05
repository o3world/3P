import React from 'react';
import styles from './PrimeStory.module.scss';
import {Link} from "react-router-dom";

import Moment from 'react-moment';

const PrimeStory = (props) => {
        const storyStyle = {
            "--tall-bg-image": `url(${props.tallImage.url})`,
            "--wide-bg-image": `url(${props.wideImage.url})`
        };
        const published_date = new Date(props.date * 1000);
        const link = '/story/' + published_date.getFullYear() + props.entityUrl.path + '/' + props.id + '/';
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
              <Moment className={styles.date} format="MMM DD">{published_date}</Moment>
            </div>
          </Link>
        );
};

export default PrimeStory;