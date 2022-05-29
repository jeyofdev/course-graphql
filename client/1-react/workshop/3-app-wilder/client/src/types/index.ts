import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ChangeEvent, ChangeEventHandler, ReactNode } from 'react';

export type LayoutType = {
    children: ReactNode;
};

export type SkillType = {
    title: string;
    votes: number;
};

export type WilderType = {
    _id: string;
    name: string;
    city: string;
    content: string;
    skills: SkillType[];
};

export type GetWildersType = {
    wilders: WilderType[];
};

export type GetWilderType = {
    wilder: WilderType;
};

export type ButtonType = {
    onClick: () => void;
    children: string;
    themeColor: string;
    margin: string;
};

export type ButtonIconType = Pick<ButtonType, 'onClick' | 'themeColor'> & {
    icon: IconDefinition;
    size: string;
    right?: string;
    color?: string;
};

export type ButtonIconWithoutBackgroundType = {
    onClick: () => void;
    icon: IconDefinition;
    size: string;
    color: string;
};

export type ModalType = {
    children: JSX.Element | string;
    onClose: () => void;
};

export type DialogType = {
    content: string;
    onCancel: () => void;
    onConfirmation: () => void;
};

export type InputType = {
    label?: string;
    name?: string;
    value?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

export type TextareaType = Pick<
    InputType,
    'label' | 'name' | 'value' | 'onChange'
> & {
    rows: number;
};

export type FormType = {
    method: 'post' | 'put';
    wilder?: WilderType;
};

export type CheckboxType = {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
