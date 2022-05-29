import * as styled from './Button.styled';
import { ButtonIconType, ButtonType } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({
    children,
    themeColor,
    margin,
    onClick,
}: ButtonType) => (
    <styled.Button themeColor={themeColor} margin={margin} onClick={onClick}>
        {children}
    </styled.Button>
);

export const ButtonIcon = ({
    themeColor,
    color,
    icon,
    right,
    size,
    onClick,
}: ButtonIconType) => {
    return (
        <>
            <styled.ButtonIcon
                themeColor={themeColor}
                color={color ?? 'white'}
                size={size}
                right={right ?? 'auto'}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={icon} />
            </styled.ButtonIcon>
        </>
    );
};
