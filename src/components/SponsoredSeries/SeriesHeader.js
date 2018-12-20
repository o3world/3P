import React from "react";

const SeriesHeader = (props) => {
    const series = props.series;

    let logo;
    if (series.logo !== null) {
      logo = <img src={logo} alt={series.company}/>;
    }

    let hero;
    if (series.mainImage !== null) {
      hero = <img src={series.mainImage.derivative.url} alt={''}/>;
    }
    return (
        <section>
            <div>
                <div>
                    <span>SPONSORED BY {series.company}</span>
                  {logo}
                </div>
                <div>
                    <span>{series.company} SPECIAL SERIES</span>
                    <h1>{series.name}</h1>
                    <p dangerouslySetInnerHTML={{__html: series.description.processed}}/>
                </div>
            </div>
            <div>
              {hero}
            </div>
        </section>
    );
};

export default SeriesHeader;
