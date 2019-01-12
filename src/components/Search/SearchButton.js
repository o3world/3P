import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './SearchButton.module.scss';

const SearchButton = (props) => (

  <FontAwesomeIcon className={styles.button} icon={"search"} onClick={props.handleClick}/>
);

export default SearchButton;