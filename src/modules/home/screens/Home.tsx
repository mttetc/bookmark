import { FC, useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { ApiResponse } from "../../../types/ApiResponse";
import { ErrorType } from "../../../types/form";
import { AddForm } from "../components/AddForm/AddForm";
import { InformationsBlock } from "../components/InformationsBlock/InformationsBlock";
import { InformationsBlockDataProps } from "./Home.services";
import "./Home.styles.css";

export const Home: FC = () => {
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [addedItems, setAddedItems] = useState<InformationsBlockDataProps[]>(
    []
  );
  const [error, setError] = useState<ErrorType | null>(null);
  const [inputSearch, setInputSearch] = useState("");
  const { response, isLoading } = useFetch<ApiResponse>({ url: addedItem });

  useEffect(() => {
    response &&
      setAddedItems((prev) => [
        ...prev,
        { id: addedItems.length + 1, ...response },
      ]);

    setAddedItem("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <div className="page-wrapper">
      <h1>Bookmark application</h1>
      
      <div className="flex-wrapper">
        <div className="cards-wrapper">
          {addedItems &&
            addedItems.map((props) => (
              <InformationsBlock
                {...props}
                key={props.id}
                id={props.id}
                isLoading={isLoading}
                addedItems={addedItems}
                setAddedItems={setAddedItems}
                setError={setError}
              />
            ))}
        </div>
        <AddForm
          error={error}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          setAddedItem={setAddedItem}
          setError={setError}
        />
      </div>
    </div>
  );
};
