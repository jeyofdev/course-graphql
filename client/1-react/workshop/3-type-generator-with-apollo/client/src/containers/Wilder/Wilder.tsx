import blank_profile from '../../images/blank-profile-picture-female.png';
import Skill from '../Skill/Skill';
import { GetWilders_wilders } from '../../types/schemaTypes';

type WilderProps = Pick<GetWilders_wilders, 'name' | 'city' | 'skills'>;

const Wilder = ({ name, city, skills }: WilderProps) => {
    return (
        <article className="card">
            <img src={blank_profile} alt="Profile" />
            <h3>{name}</h3>
            <p>{city}</p>
            <ul className="skills">
                {skills?.map((skill) => {
                    return (
                        <Skill
                            key={skill.title}
                            title={skill.title}
                            votes={skill.votes}
                        />
                    );
                })}
            </ul>
        </article>
    );
};

export default Wilder;
