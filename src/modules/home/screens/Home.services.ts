import { InformationsBlockProps } from "../components/InformationsBlock/InformationsBlock";

export type InformationsBlockDataProps = Omit<
  InformationsBlockProps,
  "isLoading" | "addedItems" | "setAddedItems" | "setError"
>;
