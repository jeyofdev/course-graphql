import React from 'react';
import { InputType, TextareaType } from '../../../types/';
import * as styled from './Input.styled';

export const Input = ({ label, name, value, onChange }: InputType) => {
    return (
        <div>
            <styled.Label>{label}:</styled.Label>
            <styled.Input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export const Textarea = ({
    label,
    name,
    value,
    rows,
    onChange,
}: TextareaType) => {
    return (
        <div>
            <styled.Label>{label}:</styled.Label>
            <styled.Textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
            />
        </div>
    );
};
