import clsx from "clsx";
import styles from "./BreadCrumbs.module.scss";
import { Icon } from "../Icon/Icon";
import { Paragraph } from "../Paragraph/Paragraph";
import { BreadCrumbsProps } from "./BreadCrumbs.props";

export const BreadCrumbs = ({ className, location }: BreadCrumbsProps) => {
  return (
    <div className={clsx(styles.breadCrumbs, className)}>
      <Icon name="home" />
      <Paragraph className={styles.location}>{location}</Paragraph>
    </div>
  );
};
