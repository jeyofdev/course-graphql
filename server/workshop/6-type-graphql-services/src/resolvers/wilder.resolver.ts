import { Resolver, Query, Mutation, Arg, Args } from 'type-graphql';
import { Service } from 'typedi';
import { Wilder } from '../models/Wilder.model';
import WilderCreateInput from '../inputs/WilderCreate.input';
import WilderService from '../services/wilder.service';
import WilderUpdateInput from '../inputs/WilderUpdate.input';

@Service()
@Resolver(() => Wilder)
class WilderResolver {
    constructor(private readonly wilderService = WilderService) {}

    @Query(() => String, {
        nullable: true,
        description: 'Fonction simple pour tester.',
    })
    async hello() {
        return this.wilderService.hello();
    }

    @Query(() => [Wilder], {
        nullable: true,
        description: 'Récupération des Wilders.',
    })
    async getAllWilders() {
        return this.wilderService.getAll();
    }

    @Query(() => Wilder, {
        nullable: true,
        description: "Récupération d'un wilder selon son id.",
    })
    async getWilderById(@Arg('wilderId') wilderId: string) {
        return this.wilderService.getById(wilderId);
    }

    @Mutation((_returns) => Wilder, { description: "Ajout d'un wilder." })
    async createWilder(@Arg('data') data: WilderCreateInput) {
        return this.wilderService.create(data);
    }

    @Mutation((_returns) => Wilder, { description: "Mise à jour d'un wilder." })
    async updateWilder(@Args() { id, name, city, skills }: WilderUpdateInput) {
        return this.wilderService.update({ id, name, city, skills });
    }

    @Mutation((_returns) => Wilder, { description: "Supprimer d'un wilder." })
    async removeWilder(@Arg('wilderId') wilderId: string) {
        return this.wilderService.remove(wilderId);
    }
}

export default WilderResolver;
