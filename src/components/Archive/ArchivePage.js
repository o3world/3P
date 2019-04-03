import React from 'react'
import PageTemplate from '../Common/PageTemplate';

import styles from './ArchivePage.module.scss';

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: props.match.params.year ? props.match.params.year : new Date().getFullYear(),
            month: props.match.params.month ? props.match.params.month : new Date().getMonth(),
        }

        this.selectYear = this.selectYear.bind(this);
        this.selectMonth = this.selectMonth.bind(this);
    }

    selectYear(e, year) {
        this.setState({
            year: year,
        });
        this.props.history.push(`/archive/${year}/${this.state.month}/`);
    }

    selectMonth(e, month) {
        this.setState({
            month: month,
        });
        this.props.history.push(`/archive/${this.state.year}/${month + 1}/`);
    }

    render() {
    
        const years = [];
        for (let year = 2011; year <= new Date().getFullYear(); year++) {
            years.push(year);
        }

        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

        return (
            <PageTemplate>
                <h2>Brent was born in {months[this.state.month]} of {this.state.year}.</h2>
                <ul className={styles.year_list}>
                    {years.map(year => <li onClick={(e) => this.selectYear(e, year)} className={year == this.state.year ? styles.selected : ''}>{year}</li>)}
                </ul>
                <ul className={styles.month_list}>
                    {months.map((month, index) => <li onClick={(e) => this.selectMonth(e, index)} className={index == this.state.month ? styles.selected : ''}>{month}</li>)}
                </ul>
            </PageTemplate>
        )
    }
}

export default ArchivePage;