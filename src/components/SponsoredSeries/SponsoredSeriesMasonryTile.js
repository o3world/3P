import React from "react";
import ConvertSeoUrl from "../Common/createSeoUrl";
import styles from './SponsoredSeriesMasonryTile.module.scss';

const SponsoredSeriesMasonryTile = (props) => {
    const series = {...props.data};
    const seoLink = ConvertSeoUrl(series.name);
    const logo = (series.logo !== null) ? series.logo.url : "";
    const backgroundImage = (series.tileImage) ? series.tileImage.derivative.url : "";
    const url = "/sponsored-series/" + series.tid + "/"+seoLink;
    return (
        <div className={styles.tile} style={{backgroundImage: `url(${backgroundImage})`}}>
            <h4 className={styles.title}><a href={url}> {series.name}</a></h4>
            <img className={styles.logo} src={logo} alt={''}/>
        </div>

    );
};

export default SponsoredSeriesMasonryTile;