import React from 'react'
import PageTemplate from '../Common/PageTemplate';

import styles from './ArchivePage.module.scss';

import ArchiveList from './ArchiveList';

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: props.match.params.year ? props.match.params.year : new Date().getFullYear(),
            month: props.match.params.month ? props.match.params.month : new Date().getMonth() + 1,
        }

        this.selectYear = this.selectYear.bind(this);
        this.selectMonth = this.selectMonth.bind(this);
        this.setTimestamps = this.setTimestamps.bind(this);
    }

    selectYear(e, year) {
        this.setState({
            year: year,
        }, () => {
            this.setTimestamps();
        });
    }

    selectMonth(e) {
        this.setState({
            month: e.target.dataset.month,
        }, () => {
            this.setTimestamps();
        });
    }

    setTimestamps() {
        this.setState({
            startTimestamp: new Date(this.state.year, this.state.month - 1, 1, 0, 0, 0, 0).valueOf() / 1000,
            endTimestamp: new Date(this.state.year, this.state.month, 0, 23, 59, 59, 0).valueOf() / 1000,
        });
        this.props.history.push(`/archive/${this.state.year}/${this.state.month}/`);
    }

    componentDidMount() {
        this.setTimestamps();
    }

    render() {
    
        const years = [];
        for (let year = 2011; year <= new Date().getFullYear(); year++) {
            years.push(year);
        }

        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

        return (
            <PageTemplate>
                <div className={styles.selections}>
                    <h1 className={styles.pagetitle}>Archive</h1>
                    <ul className={styles.year_list}>
                        {years.map(year => <li onClick={(e) => this.selectYear(e, year)} className={year === Number(this.state.year) ? styles.selected : ''} key={year}>{year}</li>)}
                    </ul>
                    <ul className={styles.month_list}>
                        {months.map((month, index) => <li data-month={index + 1} onClick={(e) => this.selectMonth(e)} className={index + 1 === Number(this.state.month) ? styles.selected : ''} key={index}>{month}</li>)}
                    </ul>
                </div>
                <h3 className={styles.monthheading}>Stories for {months[this.state.month - 1]}, {this.state.year}</h3>
                <ArchiveList start={this.state.startTimestamp} end={this.state.endTimestamp}/>
            </PageTemplate>
        )
    }
}

export default ArchivePage;