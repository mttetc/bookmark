import { FC, useEffect, useState } from "react";
import { Button } from "../../../../components/Button/Button";
import { ApiResponse } from "../../../../types/ApiResponse";
import { ErrorType } from "../../../../types/form";
import { _date } from "../../../../utils/date";
import { onOpenExternal } from "../../../../utils/external";
import './InformationsBlock.styles.css';

const { timeAgo, formatDate, formatHour } = _date

export type InformationsBlockProps = {
    id: number
    isLoading: boolean
    onDelete: ({ e, id }: { e: React.FormEvent, id: number }) => void
    setApiError: (type: ErrorType | null) => void
} & ApiResponse

export const InformationsBlock: FC<InformationsBlockProps> = ({ isLoading, onDelete, setApiError, id, error, html, url, title, author_name, author_url, upload_date, duration, width, height }) => {
    const [timeSince, setTimeSince] = useState<string>('')

    useEffect(() => {
        const now = new Date()
        const interval = setInterval(() => setTimeSince(timeAgo(now)), 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setApiError(error ? 'api' : null)
    }, [setApiError, error])


    if (error) {
        return null
    }

    if (isLoading) {
        return <>Chargement...</>
    }

    return (
        <div className='card'>
            {html && <div className='iframe-container' dangerouslySetInnerHTML={{ __html: html }} />}

            <ul className="list">
                {url && <li><strong>Url</strong>: <Button buttonType="link" onClick={() => onOpenExternal(url)} title={url} /></li>}

                {title && <li><strong>Titre</strong>: {title}</li>}

                {author_name && author_url && <li><strong>Auteur</strong>: <Button buttonType="link" onClick={() => onOpenExternal(author_url)} title={author_name} /></li>}

                {timeSince && <li><strong>Date d'ajout</strong>: {timeSince}</li>}

                {upload_date && <li><strong>Date de publication</strong>: {formatDate(upload_date)}</li>}

                {duration && <li><strong>Durée</strong>: {formatHour(duration)}</li>}

                {width && height && <li><strong>Largeur x Hauteur</strong> : {width} x {height}</li>}
            </ul>

            <Button title="Delete" variant="error" onClick={(e) => onDelete({ e, id })} />
        </div>
    )
}