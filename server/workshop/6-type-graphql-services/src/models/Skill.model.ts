import { Field, ObjectType, InputType, Int } from 'type-graphql';
import ObjectIdScalar from '../scalars/objectId.scalar';
import { ObjectId } from 'mongodb';

@ObjectType()
@InputType('SkillInput')
export class Skill {
    @Field((_type) => ObjectIdScalar, { defaultValue: new ObjectId() })
    readonly _id?: ObjectId;

    @Field()
    title!: string;

    @Field((_type) => Int)
    votes!: number;
}

export default Skill;
