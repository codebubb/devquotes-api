import express from 'express';


export class DevQuotesApp {
    constructor() {
        this.initalise();
    }

    initalise() {
        this.app = express();
    }

    serve() {
        this.app.listen(3000, () => console.log('App is listening...'));
    }
} 
