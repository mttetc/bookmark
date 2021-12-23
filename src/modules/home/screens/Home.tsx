import { FC, useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { ApiResponse } from "../../../types/ApiResponse";
import { ErrorType } from "../../../types/form";
import { AddForm, AddFormProps } from "../components/AddForm/AddForm";
import { InformationsBlock } from "../components/InformationsBlock/InformationsBlock";
import { HomeServices, InformationsBlockDataProps } from "./Home.services";
import './Home.styles.css';

const { onSubmit, onChange, onDelete } = HomeServices

export const Home: FC = () => {
    const [addedItem, setAddedItem] = useState<string | null>(null)
    const [addedItems, setAddedItems] = useState<InformationsBlockDataProps[]>([])
    const [error, setError] = useState<ErrorType | null>(null)
    const [inputSearch, setInputSearch] = useState('')
    const { response, isLoading } = useFetch<ApiResponse>({ url: addedItem });

    const formProps: AddFormProps = {
        error,
        inputSearch,
        onChange: (e) => onChange({ e, setInputSearch }),
        onSubmit: (e) => onSubmit({ e, inputSearch, setError, setAddedItem }),
    }

    useEffect(() => {
        response && setAddedItems((prev) => [...prev, { id: addedItems.length + 1, ...response }])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response])

    return (
        <div className="page-wrapper">
            <h1>Bookmark application</h1>
            <div className="flex-wrapper">
                <div className="cards-wrapper">
                    {addedItems && addedItems.map((props, i) =>
                        <InformationsBlock
                            {...props}
                            key={props.id}
                            id={props.id}
                            isLoading={isLoading}
                            onDelete={({ e, id }) => onDelete({ e, id, addedItems, setError, setAddedItems })}
                            setApiError={setError}
                        />
                    )}
                </div>
                <AddForm {...formProps} />
            </div>
        </div>
    )
}