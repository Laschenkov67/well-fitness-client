import { BreadCrumbs } from "../BreadCrumbs/BreadCrumbs";
import { Htag } from "../Htag/Htag";
import styles from "./Heading.module.scss";
import { HeadingProps } from "./Heading.props";

export const Heading = ({ title, location }: HeadingProps) => {
  return (
    <div className={styles.heading}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs location={location} />
      </div>
      <Htag tag="h1" className={styles.title}>
        {title}
      </Htag>
    </div>
  );
};
