import Skill from '../models/Skill.model';
import { Field, InputType } from 'type-graphql';

@InputType()
export class WilderCreateInput {
    @Field()
    name: string;

    @Field()
    city: string;

    @Field((_type) => [Skill], { nullable: true })
    skills?: Skill[];
}

export default WilderCreateInput;
