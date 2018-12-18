import React from "react";
import StoryMasonryTile from "../Stories/StoryMasonryTile";

import styles from '../Stories/StoriesMasonryWrapper.module.scss';

const EditorStoriesWrapper = (props) => {
    const stories = props.data.nodeQuery.entities;
    return (
        <div className={styles.wrapper}>
            {stories.map((story, index) => <StoryMasonryTile data={story} key={index} isSponsered={false} />)}
        </div>
    );
};

export default EditorStoriesWrapper;
