import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class UpdateWilderInput {
    @Field(() => Int)
    id!: Number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    city?: string;
}

export default UpdateWilderInput;
