import React from 'react'

const SingleStoryBio = (props) =>
    <div>
        <p className={''}><a href={props.link} title={props.name + ' author page'}>{props.name}</a></p>
        {props.headshot}
    </div>;

export default SingleStoryBio;