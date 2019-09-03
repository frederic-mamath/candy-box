import React from "react";

import styles from "./Header.scss";

type HeaderProps = {};

type Props = HeaderProps;

const Header = ({  }: Props) => (
  <div className={styles.view}>
    <h1 className={styles.title}>Candy Box</h1>
    <h2 className={styles.subtitle}>A library of font icons</h2>
  </div>
);

export default Header;
