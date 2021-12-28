import { FC, FormEvent } from "react";
import { Button } from "../../../../components/Button/Button";
import { InputText } from "../../../../components/InputText/InputText";
import { ErrorType } from "../../../../types/form";
import { isBlank, isUrl } from "../../../../utils/regex";
import "./AddForm.styles.css";

export type AddFormProps = {
  error: ErrorType | null;
  inputSearch: string;
  setError: (error: ErrorType | null) => void;
  setAddedItem: (inputSearch: string) => void;
  setInputSearch: (inputSearch: string) => void;
};

export const AddForm: FC<AddFormProps> = ({
  error,
  inputSearch,
  setError,
  setAddedItem,
  setInputSearch,
}) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputSearch || isBlank(inputSearch)) {
      setError("empty");
    } else if (!isUrl(inputSearch)) {
      setError("url");
    } else {
      setError(null);
      setAddedItem(inputSearch);
    }
  };

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setInputSearch(e.currentTarget.value);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="input-wrapper">
        <InputText
          placeholder="Lien vimeo ou flickr"
          value={inputSearch}
          onChange={onChange}
        />

        <div className="error">
          {error === "empty" && "Le champ est vide"}
          {error === "url" && "L'url est incorrecte"}
          {error === "api" && "Aucune donnée disponible via ce lien"}
        </div>
      </div>

      <Button title="Send" />
    </form>
  );
};
