import React from "react";
import ConvertSeoUrl from "../Common/createSeoUrl";
import styles from './SponsoredSeriesMasonryTile.module.scss';

const SponsoredSeriesMasonryTile = (props) => {
    const series = {...props.data};
    const seoLink = ConvertSeoUrl(series.name);
    const logo = (series.logo !== null) ? series.logo.url : "";
    const backgroundImage = (series.mainImage) ? series.mainImage.derivative.url : "";
    return (
        <div className={styles.tile} style={{backgroundImage: `url(`+backgroundImage+`)`}}>
            <h4 className={styles.title} onClick={(e)=> props.onclick(e, series.tid, seoLink)}>{series.name}}>{series.name}</h4>
            <img className={styles.logo} src={logo} alt={''}/>
        </div>

    );
};

export default SponsoredSeriesMasonryTile;