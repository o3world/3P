import React from 'react';
import styles from './PrimeStory.module.scss';

import Moment from 'react-moment';

const PrimeStory = (props) => {
        const storyStyle = {
            "--tall-bg-image": `url(${props.tallImage.url})`,
            "--wide-bg-image": `url(${props.wideImage.url})`
        };
        const published_date = new Date(props.date * 1000);
        const link = '/story/' + published_date.getFullYear() + props.entityUrl.path + '/' + props.id + '/';
        const storyClass = (props.index === '1') ? styles.primeStorySecond : styles.primeStory;

        return (
            <div className={storyClass} style={storyStyle}>
                <div className={styles.content}>
                  <h3 className={styles.title}><a href={link}>{props.title}</a></h3>
                  <p className={styles.author}>Words by {props.author.first} {props.author.last}</p>
                  <p className={styles.category}>{props.category.entity.name}</p>
                  <Moment className={styles.date} format="MMM DD">{published_date}</Moment>
                </div>
            </div>
        );
};

export default PrimeStory;