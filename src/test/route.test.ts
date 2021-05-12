import { createServer } from '../app/http/app'
import { Application } from 'express'
import request from 'supertest';

let app: Application;

//Avant toute chose, on attend la création de notre serveur
beforeAll(async () => {
    app = await createServer();
});

describe('GET /', () => {
    it('should return 200 & valid response with Hello world !', async (done) => {
        request(app)
            .get(`/api/v1/`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatchObject({ message: 'Hello world !' });
                done();
            });
    });
});

describe('GET /test', () => {
    it('should return 200 & valid response with Ceci est un test', async (done) => {
        request(app)
            .get(`/api/v1/test`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatchObject({ message: 'Ceci est un test' });
                done();
            });
    });
});

describe('GET /test2', () => {
    it('should return 200 & valid response with 7', async (done) => {
        request(app)
            .get(`/api/v1/test2`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatchObject({ result: 7 });
                done();
            });
    });
});