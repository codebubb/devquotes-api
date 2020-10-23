import request from 'supertest';
import express from 'express';
import { getQuoteById, getRandomQuote } from '../../src/controllers/QuoteController';
import sinon, { sandbox } from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import Quote from '../../src/models/Quote';

chai.use(sinonChai);

describe('the quote controller', () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.restore();
    });

    describe('GET /quote/:id', () => {
        it('responds with json', async () => {
            const req = { params: { id: 1234 } };
            const res = { json: sinon.spy() };
            sandbox.stub(Quote, 'findById').resolves({ data: 'test' });
            const result = await getQuoteById(req, res);
            expect(res.json).to.have.been.calledOnce;
        });
    });

    describe('GET /quote', () => {
        it('responds with json', async () => {
            const req = { params: { id: 1234 } };
            const res = { json: sinon.spy() };
            const mockAggregate = {
                sample: () => this
            };
            sandbox.stub(Quote, 'aggregate').returns(mockAggregate);
            const sampleStub = sandbox.stub(mockAggregate, 'sample');

            await getRandomQuote(req, res);
            expect(res.json).to.have.been.calledOnce;
            expect(sampleStub).to.have.been.calledOnceWith(1);
        });
    });

});
