import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CatalogCardList } from "./types";

export interface CatalogCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string;
  title: string;
  list: CatalogCardList[];
}
