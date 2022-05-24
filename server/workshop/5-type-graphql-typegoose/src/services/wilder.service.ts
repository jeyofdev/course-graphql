import { WilderModel } from '../models/Wilder.model';

class WilderService {
    hello = () => {
        return 'Coucou';
    };

    getAll = () => {
        return WilderModel.find();
    };

    getById = async (id: string) => {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new Error(`The id ${id} is not in objectId format.`);
        }

        const wilder = await WilderModel.findById(id);
        if (!wilder) {
            throw new Error(`No wilder found with id ${id}.`);
        }

        return wilder;
    };

    create = (data: any) => {
        return WilderModel.create(data);
    };

    update = async (data: any) => {
        await WilderModel.updateOne({ _id: data.id }, data);
        return WilderModel.findById(data.id);
    };

    remove = async (id: string) => {
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
