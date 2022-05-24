import Skill from '../models/Skill.model';
import { Field, ArgsType } from 'type-graphql';
import ObjectIdScalar from '../scalars/objectId.scalar';

@ArgsType()
export class WilderUpdateInput {
    @Field((_type) => ObjectIdScalar)
    readonly id!: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    city?: string;

    @Field((_type) => [Skill], { nullable: true })
    skills?: Skill[];
}

export default WilderUpdateInput;
