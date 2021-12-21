import { FC, FormEvent, FormEventHandler } from "react";
import { Button } from "../../../../components/Button/Button";
import { InputText } from "../../../../components/InputText/InputText";
import { ErrorType } from "../../../../types/form";
import './AddForm.styles.css';

export type AddFormProps = {
    error: ErrorType | null
    inputSearch: string,
    onChange: (e: FormEvent<HTMLInputElement>) => void,
    onSubmit: FormEventHandler<HTMLFormElement>
}

export const AddForm: FC<AddFormProps> = ({ error, inputSearch, onChange, onSubmit }) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="input-wrapper">
                <InputText placeholder="Lien vimeo ou flickr" value={inputSearch} onChange={onChange} />

                <div className="error">
                    {error === 'empty' && 'Le champ est vide'}
                    {error === 'url' && 'L\'url est incorrecte'}
                    {error === 'api' && 'Aucune donnée disponible via ce lien'}
                </div>
            </div>

            <Button title="Send" />
        </form>
    )
}