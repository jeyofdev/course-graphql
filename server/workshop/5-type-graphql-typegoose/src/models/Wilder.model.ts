import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType, ID } from 'type-graphql';
import Skill from './Skill.model';

@ObjectType()
export class Wilder {
    @Field((_type) => ID)
    readonly _id: string;

    @Field((_type) => String, { nullable: false })
    @Property({ unique: true, required: [true, 'Le nom est requis!'] })
    name: string;

    @Field((_type) => String)
    @Property({ unique: true, required: [true, 'La ville est requise!'] })
    city: string;

    @Field((_type) => [Skill], { nullable: true })
    @Property({ required: false })
    skills?: Skill[];
}

export const WilderModel = getModelForClass(Wilder, {
    schemaOptions: { versionKey: false },
});
