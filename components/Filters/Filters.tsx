import { Checkbox } from "../Checkbox/Checkbox";
import { Title } from "../Title/Title";
import styles from "./Filters.module.scss";
import { FiltersProps } from "./Filters.props";

export const Filters = ({ title, types }: FiltersProps) => {
  return (
    <div className={styles.filters}>
      <Title className={styles.title}>{title}</Title>
      <ul className={styles.list}>
        {types.map((type, index) => (
          <li className={styles.item} key={index}>
            <Checkbox className={styles.checkbox} />
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};
