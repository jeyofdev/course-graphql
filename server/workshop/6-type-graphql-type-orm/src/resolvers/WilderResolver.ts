import { Args, Mutation, Query, Resolver } from 'type-graphql';

import Wilder from '../models/Wilder';
import CreateWilderInput from './CreateWilderInput';
import DeleteWilderInput from './DeleteWilderInput';
import UpdateWilderInput from './UpdateWilderInput';

@Resolver(Wilder)
class WilderResolver {
    @Query(() => [Wilder])
    async wilders() {
        const wilders = await Wilder.find({ relations: ['skills'] });
        return wilders;
    }

    @Mutation(() => Wilder)
    async createWilder(@Args() { name, city }: CreateWilderInput) {
        const wilder = new Wilder();

        wilder.name = name;
        wilder.city = city;

        await wilder.save();

        return wilder;
    }

    @Mutation(() => Wilder)
    async deleteWilder(@Args() { id }: DeleteWilderInput) {
        const wilder = await Wilder.findOneOrFail({ id });
        await Wilder.remove(wilder);
        return wilder;
    }

    @Mutation(() => Wilder)
    async updateWilder(@Args() { id, name, city }: UpdateWilderInput) {
        const wilder = await Wilder.findOneOrFail({ id });
        await Wilder.update(wilder, { name, city });

        const updatedWilder = await Wilder.findOne({ id });

        return updatedWilder;
    }
}

export default WilderResolver;
