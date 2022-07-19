import { Service } from 'typedi';
import { WilderModel } from '../models/Wilder.model';

@Service()
class WilderService {
    static hello() {
        return 'Coucou';
    }

    static getAll = () => {
        return WilderModel.find();
    };

    static getById = async (id: string) => {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new Error(`The id ${id} is not in objectId format.`);
        }

        const wilder = await WilderModel.findById(id);
        if (!wilder) {
            throw new Error(`No wilder found with id ${id}.`);
        }

        return wilder;
    };

    static create = (data: any) => {
        return WilderModel.create(data);
    };

    static update = async (data: any) => {
        await WilderModel.updateOne({ _id: data.id }, data);
        return WilderModel.findById(data.id);
    };

    static remove = async (id: string) => {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new Error(`The id ${id} is not in objectId format.`);
        }

        const wilder = await WilderModel.findById(id);
        if (!wilder) {
            throw new Error(`No wilder found with id ${id}.`);
        }

        return WilderModel.findByIdAndDelete({ _id: id });
    };
}

export default WilderService;
