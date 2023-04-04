import clsx from "clsx";
import styles from "./Checkbox.module.scss";
import { CheckboxProps } from "./Checkbox.props";

export const Checkbox = ({ className }: CheckboxProps) => {
  return <input type="checkbox" className={clsx(styles.checkbox, className)} />;
};
