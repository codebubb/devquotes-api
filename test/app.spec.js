import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import { DevQuotesApp } from '../src/app';
import mongoose from 'mongoose';

chai.use(sinonChai);

describe('the main app', () => {
    const sandbox = sinon.createSandbox();
    beforeEach(() => {
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should setup app', () => {
        const connectStub = sandbox.stub(mongoose, 'connect');
        const app = new DevQuotesApp();
        const listenStub = sandbox.stub(app.app, 'listen');
        app.serve();
        expect(listenStub).to.have.been.called;
        expect(connectStub).to.have.been.called;
    });
});