import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './SearchButton.module.scss';

const SearchButton = (props) => {
  let buttonClass = props.className + ' ' + styles.button;
  if (props.visible) {
    buttonClass = buttonClass + ' ' + styles.visible;
    console.log(buttonClass);
  }

  return (
    <FontAwesomeIcon className={buttonClass} icon={"search"} onClick={props.handleClick}/>
  )
};

export default SearchButton;