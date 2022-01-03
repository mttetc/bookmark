import { FC, useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useStore } from "../../../store";
import { selectAddBookmark, selectBookmarks } from "../../../store/selectors";
import { Bookmark } from "../../../store/types";
import { ApiResponse } from "../../../types/ApiResponse";
import { ErrorType } from "../../../types/form";
import { AddForm } from "../components/AddForm/AddForm";
import { InformationsBlock } from "../components/InformationsBlock/InformationsBlock";
import "./Home.styles.css";

export const Home: FC = () => {
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [addedItems, setAddedItems] = useState<Bookmark[]>([]);
  const [error, setError] = useState<ErrorType | null>(null);
  const { response, isLoading } = useFetch<ApiResponse>({ url: addedItem });
  const bookmarks = useStore(selectBookmarks);
  const addBookmark = useStore(selectAddBookmark);

  useEffect(() => {
    response && addBookmark({ id: bookmarks.length + 1, ...response });

    setAddedItem("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <div className="page-wrapper">
      <h1>Bookmark application</h1>

      <div className="flex-wrapper">
        <div className="cards-wrapper">
          {bookmarks &&
            bookmarks.map((props) => (
              <InformationsBlock
                {...props}
                key={props.id}
                isLoading={isLoading}
                addedItems={addedItems}
                setAddedItems={setAddedItems}
                setError={setError}
              />
            ))}
        </div>
        <AddForm
          error={error}
          setAddedItem={setAddedItem}
          setError={setError}
        />
      </div>
    </div>
  );
};
