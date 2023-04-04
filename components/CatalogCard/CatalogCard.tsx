import Image from "next/image";
import { Htag } from "../Htag/Htag";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./CatalogCard.module.scss";
import { CatalogCardProps } from "./CatalogCard.props";

export const CatalogCard = ({ image, title, list }: CatalogCardProps) => {
  return (
    <div className={styles.catalogCard}>
      <div className={styles.image}>
        <Image layout="fill" src={image} alt="" />
      </div>
      <div className={styles.wrapper}>
        <Htag tag="h2" className={styles.title}>
          {title}
        </Htag>
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li className={styles.item} key={index}>
              <Paragraph>{item.title}</Paragraph>
              <Paragraph className={styles.quantity}>
                {item.quantity.toString()}
              </Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
