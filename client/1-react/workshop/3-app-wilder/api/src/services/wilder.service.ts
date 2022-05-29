/* eslint-disable class-methods-use-this */
import WilderCreateInput from 'src/inputs/WilderCreate.input';
import WilderUpdateInput from 'src/inputs/WilderUpdate.input';
import WilderModel from '../models/Wilder.model';

class WilderService {
    getAll = () => WilderModel.find();

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

    create = (data: WilderCreateInput) => WilderModel.create(data);

    update = async (data: WilderUpdateInput) => {
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
