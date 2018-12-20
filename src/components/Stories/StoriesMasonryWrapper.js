import React from "react";
import StoryMasonryTile from "./StoryMasonryTile";

import styles from '../Stories/StoriesMasonryWrapper.module.scss';

const StoriesMasonryWrapper = (props) => {
    const stories = props.data.nodeQuery.entities;
    return (
        <div className={styles.wrapper}>
            {stories.map((story, index) => <StoryMasonryTile data={story} key={index}/>)}
        </div>
    );
};

export default StoriesMasonryWrapper;
