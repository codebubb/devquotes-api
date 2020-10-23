import Quote from '../models/Quote';
import mongoose from 'mongoose';

const getRandomQuote = async (req, res) => {
    const sample = await Quote.aggregate().sample(1);
    return res.json(sample);
};

const getQuoteById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Quote.findById(mongoose.Types.ObjectId(id));
        if (!result) {
             return res.json([]); // 404
        }

        return res.json(result);
    } catch (error) {
        return res.s    .json({ message: 'Internal Server Error' });
    }
};

export {
    getRandomQuote,
    getQuoteById,
};
