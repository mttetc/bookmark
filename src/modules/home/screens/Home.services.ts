import { Dispatch, FormEvent, SetStateAction } from "react"
import { ErrorType } from "../../../types/form"
import { isBlank, isUrl } from "../../../utils/regex"
import { InformationsBlockProps } from "../components/InformationsBlock/InformationsBlock"

export type InformationsBlockDataProps = Omit<InformationsBlockProps, 'isLoading' | 'onDelete' | 'setApiError'>

const onSubmit = ({ e, inputSearch, setError, setAddedItem }: { e: FormEvent, inputSearch: string, setError: (error: ErrorType | null) => void, setAddedItem: (url: string) => void }) => {
    e.preventDefault()

    if (!inputSearch || isBlank(inputSearch)) {
        setError('empty')
    } else if (!isUrl(inputSearch)) {
        setError('url')
    } else {
        setError(null)
        setAddedItem(inputSearch)
    }
}

const onChange = ({ e, setInputSearch }: { e: FormEvent<HTMLInputElement>, setInputSearch: (value: string) => void }) => {
    e.preventDefault()

    setInputSearch(e.currentTarget.value)
}

const onDelete = ({ e, id, addedItems, setError, setAddedItems }: { e: FormEvent<Element>, id: number, addedItems: InformationsBlockDataProps[], setError: (error: ErrorType | null) => void, setAddedItems: Dispatch<SetStateAction<InformationsBlockDataProps[]>> }) => {
    e.preventDefault()

    const nextAddedUrls = addedItems.filter(({ id: addedUrlId }) => addedUrlId !== id)

    setError(null)
    setAddedItems(nextAddedUrls)
}

export const HomeServices = {
    onSubmit,
    onChange,
    onDelete,
}