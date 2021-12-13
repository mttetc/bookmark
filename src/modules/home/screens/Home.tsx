import { FC, useState } from "react";
import { ErrorType } from "../../../types/form";
import { AddForm, AddFormProps } from "../components/AddForm/AddForm";
import { InformationsBlock } from "../components/InformationsBlock/InformationsBlock";
import { HomeServices } from "./Home.services";
import './Home.styles.css';

const { onSubmit, onChange, onDelete, onKeyDown } = HomeServices

export const Home: FC = () => {
    const [addedUrls, setAddedUrls] = useState<string[]>([])
    const [error, setError] = useState<ErrorType | null>(null)
    const [inputSearch, setInputSearch] = useState('')

    const formProps: AddFormProps = {
        error,
        inputSearch,
        onChange: (e) => onChange({ e, setInputSearch }),
        onSubmit: () => onSubmit({ inputSearch, setError, setAddedUrls }),
        onKeyDown: (e) => onKeyDown({ e, inputSearch, setError, setAddedUrls }),
    }

    return (
        <div className="page-wrapper">
            <h1>Bookmark application</h1>
            <div className="flex-wrapper">
                <div className="cards-wrapper">
                    {addedUrls && addedUrls.map((addedUrl, index) => <InformationsBlock key={addedUrl} index={index} addedUrl={addedUrl} onDelete={() => onDelete({ i: index, addedUrls, setError, setInputSearch, setAddedUrls })} setApiError={setError} />)}
                </div>
                <AddForm {...formProps} />
            </div>
        </div>
    )
}