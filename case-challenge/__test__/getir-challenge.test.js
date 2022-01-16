const request = require('supertest');
const app = require('../app');

describe('POST /challenge/get-keys', () => {
    it('should return data', async () => {
        let req = {
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2000,
            "maxCount": 3000
        };

        const response = await request(app).post('/challenge/get-keys/').send(req)
        expect(response.status).toBe(200)
        expect(response.body.code).toBe(0)
        expect(response.body.keys).not.toBeNull();
    });
});

describe('POST /challenge/get-keys', () => {
    it('should return empty data', async () => {
        let req = {
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 0,
            "maxCount": 0
        };

        const response = await request(app).post('/challenge/get-keys/').send(req)
        expect(response.status).toBe(404)
        expect(response.body.code).toBe(0)
        expect(response.body.keys).toBeNull();
    });
});

describe('POST /challenge/get-keys', () => {
    it('should return invalid parameters', async () => {
        let req = {
            "endDate": "2018-02-02",
            "minCount": 2000,
            "maxCount": 3000
        };

        const response = await request(app).post('/challenge/get-keys/').send(req)
        expect(response.status).toBe(400)
        expect(response.body.code).toBe(3)
        expect(response.body.keys).toBeNull()
    });
});

describe('POST /challenge/get-keys', () => {
    it('should return invalid parameters', async () => {
        let req = {
            "startDate": "20160126",
            "endDate": "2018/02/02",
            "minCount": 2000,
            "maxCount": 3000
        };

        const response = await request(app).post('/challenge/get-keys/').send(req)
        expect(response.status).toBe(400)
        expect(response.body.code).toBe(3)
        expect(response.body.keys).toBeNull()
    });
});

