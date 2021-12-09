import { FC, useEffect, useState } from "react";
import { Button } from "../../../../components/Button/Button";
import { useFetch } from "../../../../hooks/useFetch";
import { ApiResponse } from "../../../../types/ApiResponse";
import { ErrorType } from "../../../../types/form";
import { _date } from "../../../../utils/date";
import './InformationsBlock.styles.css';

const { timeAgo, formatDate, formatHour } = _date

export type InformationsBlockProps = {
    addedUrl: string
    index: number
    onDelete: (index: number) => void
    setApiError: (type: ErrorType | null) => void
}

export const InformationsBlock: FC<InformationsBlockProps> = ({ addedUrl, index, onDelete, setApiError }) => {
    const { response, isLoading } = useFetch<ApiResponse>({ url: addedUrl });
    const [timeSince, setTimeSince] = useState<string>('')

    useEffect(() => {
        const now = new Date()
        const interval = setInterval(() => setTimeSince(timeAgo(now)), 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        response && setApiError(response.error ? 'api' : null)
    }, [response, setApiError])


    if (!response || !addedUrl || response.error) {
        return null
    }

    if (isLoading) {
        return <>Chargement...</>
    }

    const { html, url, title, author_name, author_url, upload_date, duration, type, width, height } = response

    const onOpenExternal = (url: string) => {
        window.open(url)
    }

    return (
        <div className='card'>
            {html && <div className='iframe-container' dangerouslySetInnerHTML={{ __html: html }} /> }

            <ul className="list">
                {url && <li><strong>Url</strong>: <Button type="link" onClick={() => onOpenExternal(url)} title={url} /></li>}

                {title && <li><strong>Titre</strong>: {title}</li>}

                {author_name && author_url && <li><strong>Auteur</strong>: <Button type="link" onClick={() => onOpenExternal(author_url)} title={author_name} /></li>}

                {timeSince && <li><strong>Date d'ajout</strong>: {timeSince}</li>}

                {upload_date && <li><strong>Date de publication</strong>: {formatDate(upload_date)}</li>}

                {duration && <li><strong>Durée</strong>: {formatHour(duration)}</li>}

                {width && height && <li><strong>Largeur x Hauteur</strong> : {width} x {height}</li>}
            </ul>

            <Button type="button" title="Delete" variant="error" onClick={() => onDelete(index)} />
        </div>
    )
}