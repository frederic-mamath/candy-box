import React from "react";

import { cn } from "helpers/ui";

import styles from "./Card.scss";

type CardProps = {
  description: string;
  icon: string;
};

type Props = CardProps;

const Card = ({ description, icon }: Props) => (
  <div className={styles.view}>
    <div className={styles.image}>
      <span className={cn(styles.icon, icon)} />
    </div>
    <div className={styles.text}>
      <div className={styles.label}>{icon}</div>
      <div className={styles.description}>{description}</div>
    </div>
  </div>
);

export default Card;
