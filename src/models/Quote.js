import mongoose from 'mongoose';

const { Schema } = mongoose;

const quoteSchema = new Schema(
    {
        quote: String,
        author: String,
    },
    {
        timestamps: true,
    }
);

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote ;
