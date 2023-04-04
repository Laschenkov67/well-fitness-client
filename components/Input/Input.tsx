import clsx from "clsx";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.props";

export const Input = ({ placeholder, className }: InputProps) => {
  return (
    <input
      className={clsx(className, styles.input)}
      placeholder={placeholder}
    />
  );
};
