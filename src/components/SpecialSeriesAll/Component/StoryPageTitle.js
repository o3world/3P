import React from "react";
import '../CSS/StoryPageTile.css';

const StoryPageTile = (props) => {
    return (
        <div className="special-series-titles">
            <div className="page-title">
                <h3 className="main-title">The Feed</h3>
                <span className="title-info">SPONSORED STORY COLLECTIONS</span>
            </div>
            <div className="info-series">
                <p>Interested in advancing conversations on key sustainability topics?
                    Contact <span>Jennifer Foley</span> for sponsoring a special series.</p>
            </div>
        </div>
    )
}

export default StoryPageTile;