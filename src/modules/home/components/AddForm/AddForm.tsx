import { FC, FormEvent, KeyboardEvent } from "react";
import { Button } from "../../../../components/Button/Button";
import { InputText } from "../../../../components/InputText/InputText";
import { ErrorType } from "../../../../types/form";
import './AddForm.styles.css'

export type AddFormProps = {
    error: ErrorType | null
    inputSearch: string,
    onChange: (e: FormEvent<HTMLInputElement>) => void,
    onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void,
    onSubmit: () => void,
}

export const AddForm: FC<AddFormProps> = ({ error, inputSearch, onChange, onKeyDown, onSubmit }) => {
    return (
        <div className="form">
            <div className="input-wrapper">
                <InputText placeholder="Lien vimeo ou flickr" value={inputSearch} onChange={onChange} onKeyDown={onKeyDown} />

                <div className="error">
                    {error === 'empty' && 'Le champ est vide'}
                    {error === 'url' && 'L\'url est incorrecte'}
                    {error === 'api' && 'Aucune donnée disponible via ce lien'}
                </div>
            </div>

            <Button type="button" title="Send" onClick={onSubmit} />
        </div>
    )
}