import React from 'react';
import StoryMasonryTile from '../Stories/StoryMasonryTile';
import styles from '../Stories/StoriesMasonryWrapper.module.scss';

const SearchWrapper = (props) => (
    <section className={styles.wrapper}>
    {props.data !== null ?

        props.data.map(obj => {

            let story= {
                title: obj.title,
                date: obj.created,
                tallImage: {
                    url: obj.field_featured_image_tall
                },
                entityUrl: {
                    path: obj.url
                },
                category: {
                    entity: {
                        name: obj.field_primary_category
                    }
                },
                id: obj.nid,
                sponsoredBy: obj.field_3p_special_series === "" ? null : obj.field_3p_special_series,
                author: {
                  name: obj.uid,
                  firstName: obj.field_first_name,
                  lastName: obj.field_last_name
                },
            };

            return <StoryMasonryTile data={story} key={story.id} />
    }) : null}
    </section>
);

export default SearchWrapper;