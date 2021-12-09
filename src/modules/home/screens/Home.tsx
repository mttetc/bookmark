import { FC, FormEvent, KeyboardEvent, useState } from "react";
import { ErrorType } from "../../../types/form";
import { isBlank, isUrl } from "../../../utils/regex";
import { AddForm, AddFormProps } from "../components/AddForm/AddForm";
import { InformationsBlock } from "../components/InformationsBlock/InformationsBlock";
import './Home.styles.css';

export const Home: FC = () => {
    const [addedUrls, setAddedUrls] = useState<string[]>([])
    const [error, setError] = useState<ErrorType | null>(null)
    const [inputSearch, setInputSearch] = useState('')

    const onSubmit = () => {
        if (!inputSearch || isBlank(inputSearch)) {
            setError('empty')
        } else if (!isUrl(inputSearch)) {
            setError('url')
        } else {
            setError(null)
            setAddedUrls((prev) => [...prev, inputSearch])
        }
    }

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setInputSearch(e.currentTarget.value)
    }

    const onDelete = (i: number) => {
        const nextAddedUrls = addedUrls.filter((addedUrl, index) => index !== i)

        setError(null)
        setInputSearch('')
        setAddedUrls(nextAddedUrls)
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            onSubmit();
        }
    }

    const formProps: AddFormProps = {
        error,
        inputSearch,
        onChange,
        onSubmit,
        onKeyDown,
    }

    return (
        <div className="page-wrapper">
            <h1>Bookmark application</h1>
            <div className="flex-wrapper">
                <div className="cards-wrapper">
                    {addedUrls && addedUrls.map((addedUrl, index) => <InformationsBlock index={index} addedUrl={addedUrl} onDelete={onDelete} setApiError={setError} />)}
                </div>
                <AddForm {...formProps} />
            </div>
        </div>
    )
}