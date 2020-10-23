import express from 'express';
import mongoose from 'mongoose';
import appConfig from './app.config';
import { quoteRoutes } from './routes/QuoteRoutes';

export class DevQuotesApp {
    constructor() {
        this.initalise();
    }

    initalise() {
        this.app = express();
        this.db = mongoose.connect(appConfig.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        this.app.use('/quote', quoteRoutes)
    }

    serve() {
        this.app.listen(3000, () => console.log('App is listening...'));
    }
} 
