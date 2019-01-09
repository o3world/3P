import React from 'react';
import styles from './Contributors.module.scss';

class Contributors extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>Contributors</h2>
              <hr className={styles.rule}/>
                <div className={styles.contribCopy}>Triple Pundit’s staff of writers a wide array of professional and personal experiences to bear on original reporting. Contributors include experienced journalists, executives and consultants who have worked with Fortune 500 companies, and activists supporting social innovation or environmental stewardship through work at nonprofits. Located around the world, our writers bring in-depth, global perspectives to the issues that matter to business today.</div>
              <ul className={styles.contribList}>
                <li>Amy Brown</li>
                <li>Tina Casey</li>
                <li>Nithin Coca</li>
                <li>Jim Witkin</li>
                <li>Grant Whittington</li>
              </ul>
            </div>
        )
    }
}

export default Contributors;