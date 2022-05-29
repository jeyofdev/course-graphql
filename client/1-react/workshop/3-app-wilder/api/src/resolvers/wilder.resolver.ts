import { Resolver, Query, Mutation, Arg, Args } from 'type-graphql';
import { Wilder } from '../models/Wilder.model';
import WilderCreateInput from '../inputs/WilderCreate.input';
import WilderService from '../services/wilder.service';
import WilderUpdateInput from '../inputs/WilderUpdate.input';

@Resolver(() => Wilder)
class WilderResolver {
    private wilderService: WilderService;

    constructor() {
        this.wilderService = new WilderService();
    }

    // Get all
    @Query(() => [Wilder], {
        nullable: true,
        description: 'Récupération des Wilders.',
    })
    async wilders() {
        return this.wilderService.getAll();
    }

    // Get by id
    @Query(() => Wilder, {
        nullable: true,
        description: "Récupération d'un wilder selon son id.",
    })
    async wilder(@Arg('wilderId') wilderId: string) {
        return this.wilderService.getById(wilderId);
    }

    // Post
    @Mutation(() => Wilder, { description: "Ajout d'un wilder." })
    async createWilder(
        @Args() { name, city, content, skills }: WilderCreateInput
    ) {
        return this.wilderService.create({ name, city, content, skills });
    }

    // Put
    @Mutation(() => Wilder, { description: "Mise à jour d'un wilder." })
    async updateWilder(
        @Args() { id, name, city, content, skills }: WilderUpdateInput
    ) {
        return this.wilderService.update({ id, name, city, content, skills });
    }

    // Delete
    @Mutation(() => Wilder, { description: "Supprimer d'un wilder." })
    async removeWilder(@Arg('wilderId') wilderId: string) {
        return this.wilderService.remove(wilderId);
    }
}

export default WilderResolver;
