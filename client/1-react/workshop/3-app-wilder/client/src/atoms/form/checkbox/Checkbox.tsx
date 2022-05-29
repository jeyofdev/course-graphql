import { CheckboxType } from '../../../types';
import * as styled from './Checkbox.styled';

const Checkbox = ({ label, name, checked, onChange }: CheckboxType) => {
    return (
        <styled.Checkbox>
            <styled.Input
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <styled.Label htmlFor={name}>{label}</styled.Label>
        </styled.Checkbox>
    );
};

export default Checkbox;
