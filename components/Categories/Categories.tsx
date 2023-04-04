import clsx from "clsx";
import styles from "./Categories.module.scss";
import { useState } from "react";
import { CategoriesProps } from "./Categories.props";

export const Categories = ({ categories }: CategoriesProps) => {
  const [active, setActive] = useState<number>(0);
  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li
            onClick={() => setActive(index)}
            key={index}
            className={clsx(styles.item, { [styles.active]: active === index })}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
