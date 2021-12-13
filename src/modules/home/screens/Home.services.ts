import { FormEvent, KeyboardEvent } from "react"
import { ErrorType } from "../../../types/form"
import { isBlank, isUrl } from "../../../utils/regex"

const onSubmit = ({ inputSearch, setError, setAddedUrls }: { inputSearch: string, setError: (error: ErrorType | null) => void, setAddedUrls: (addedUrls: (prev: string[]) => string[]) => void }) => {
    if (!inputSearch || isBlank(inputSearch)) {
        setError('empty')
    } else if (!isUrl(inputSearch)) {
        setError('url')
    } else {
        setError(null)
        setAddedUrls((prev) => [...prev, inputSearch])
    }
}

const onChange = ({ e, setInputSearch }: { e: FormEvent<HTMLInputElement>, setInputSearch: (value: string) => void }) => {
    setInputSearch(e.currentTarget.value)
}

const onDelete = ({ i, addedUrls, setError, setInputSearch, setAddedUrls }: { i: number, addedUrls: string[], setError: (error: ErrorType | null) => void, setInputSearch: (inputSearch: string) => void, setAddedUrls: (nextAddedUrls: string[]) => void }) => {
    const nextAddedUrls = addedUrls.filter((_, index) => index !== i)

    setError(null)
    setInputSearch('')
    setAddedUrls(nextAddedUrls)
}

const onKeyDown = ({ e, inputSearch, setError, setAddedUrls }: { e: KeyboardEvent<HTMLDivElement>, inputSearch: string, setError: (error: ErrorType | null) => void, setAddedUrls: (addedUrls: (prev: string[]) => string[]) => void }): void => {
    if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        onSubmit({ inputSearch, setError, setAddedUrls });
    }
}

export const HomeServices = {
    onSubmit,
    onChange,
    onDelete,
    onKeyDown
}