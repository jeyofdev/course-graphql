import { SkillType } from '../../types';
import * as styled from './Skill.styled';

const Skill = ({ title, votes }: SkillType) => {
    return (
        <li>
            <styled.Skill>
                {title}
                <styled.Votes>{votes}</styled.Votes>
            </styled.Skill>
        </li>
    );
};

export default Skill;
