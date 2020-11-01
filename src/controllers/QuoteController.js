import Quote from '../models/Quote';
import mongoose from 'mongoose';
import appConfig from '../app.config';

const transformQuote = (a) => {
    const { __v, _id, ...quote } = a;
    return {
        id: _id,
        link: `${appConfig.baseUrl}/quote/${_id}`,
        ...quote,
    }
};

const getRandomQuote = async (req, res) => {
    try {
        const sample = await Quote.aggregate().sample(1);

        return res.json(transformQuote(sample[0]));
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getQuoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Quote.findById(mongoose.Types.ObjectId(id));
        if (!result) {
             return res.json([]); // 404
        }
        const json = transformQuote(result.toJSON());
        return res.json(json);
    } catch (error) {
        console.log(error);
        return res.json({ message: 'Internal Server Error' });
    }
};



export {
    getRandomQuote,
    getQuoteById,
};
