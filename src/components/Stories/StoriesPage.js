import React, {Component, Fragment} from 'react';
import QueryHoc from "../Common/Query";
import * as Story from "./StoryQueries";
import PrimeStoriesWrapper from '../PrimeStories/PrimeStoriesWrapper';
import StoriesMasonryWrapper from "./StoriesMasonryWrapper";
const variables = {};
const StoriesPage = () => (
    <div>
        <PrimeStoriesWrapper/>
        <h4>More stories</h4>
        <QueryHoc query={Story.AllStoryQuery} variables={variables} componentName={StoriesMasonryWrapper} />
    </div>
);

export default StoriesPage