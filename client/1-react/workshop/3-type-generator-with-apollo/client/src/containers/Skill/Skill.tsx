import { GetWilders_wilders_skills } from '../../types/schemaTypes';
import * as styled from './Skill.styled';

type SkillProps = Pick<GetWilders_wilders_skills, 'title' | 'votes'>;

const Skill = ({ title, votes }: SkillProps) => {
    return (
        <li>
            {title}
            <styled.Votes>{votes}</styled.Votes>
        </li>
    );
};

export default Skill;
