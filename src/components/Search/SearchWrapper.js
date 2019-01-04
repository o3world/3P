import React from 'react';
import StoryMasonryTile from '../Stories/StoryMasonryTile';
import styles from '../Stories/StoriesMasonryWrapper.module.scss';

const SearchWrapper = (props) => {
    return (
            <section className={styles.wrapper}>
            {props.data !== null ?
                
                props.data.map(obj => {

                    let story= {
                        title:obj.title,
                        date:obj.created,
                        tallImage:{
                            url:obj.field_featured_image_tall
                        },
                        category:{
                            entity:{
                                name:obj.field_primary_category
                            }
                        },
                        id:obj.nid,
                        sponsoredBy:null
                    }

                    return <StoryMasonryTile data={story} key={obj.nid} />
            }) : null}
            </section>
    )
}

export default SearchWrapper;