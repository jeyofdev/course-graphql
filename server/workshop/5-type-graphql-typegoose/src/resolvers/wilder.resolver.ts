import { Resolver, Query, Mutation, Arg, Args } from 'type-graphql';
import { Wilder } from '../models/Wilder.model';
import WilderCreateInput from '../inputs/WilderCreate.input';
import WilderService from '../services/wilder.service';
import WilderUpdateInput from '../inputs/WilderUpdate.input';

@Resolver((_of) => Wilder)
export default class WilderResolver {
    private __wilderService: WilderService;

    constructor() {
        this.__wilderService = new WilderService();
    }

    @Query(() => String, {
        nullable: true,
        description: 'Fonction simple pour tester.',
    })
    async hello() {
        return this.__wilderService.hello();
    }

    @Query(() => [Wilder], {
        nullable: true,
        description: 'Récupération des Wilders.',
    })
    async getAllWilders() {
        return this.__wilderService.getAll();
    }

    @Query(() => Wilder, {
        nullable: true,
        description: "Récupération d'un wilder selon son id.",
    })
    async getWilderById(@Arg('wilderId') wilderId: string) {
        return this.__wilderService.getById(wilderId);
    }

    @Mutation((_returns) => Wilder, { description: "Ajout d'un wilder." })
    async createWilder(@Arg('data') data: WilderCreateInput) {
        return this.__wilderService.create(data);
    }

    @Mutation((_returns) => Wilder, { description: "Mise à jour d'un wilder." })
    async updateWilder(@Args() { id, name, city, skills }: WilderUpdateInput) {
        return this.__wilderService.update({ id, name, city, skills });
    }

    @Mutation((_returns) => Wilder, { description: "Supprimer d'un wilder." })
    async removeWilder(@Arg('wilderId') wilderId: string) {
        return this.__wilderService.remove(wilderId);
    }
}
