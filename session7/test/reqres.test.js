const request = require("supertest");
const { expect } = require("chai");
const Ajv = require("ajv");

const getUsersSchema = require("../schemas/getUsersSchema");
const postUserSchema = require("../schemas/postUserSchema");

const baseUrl = "https://reqres.in";
const apiKey = "free_user_3FAQzAdPa0luh1B89sqaEKQs4Uq";

const ajv = new Ajv();

describe("API Automation - ReqRes", function () {

    it("GET - Should get list users and validate JSON schema", async function () {
        const response = await request(baseUrl)
            .get("/api/users?page=2")
            .set("x-api-key", apiKey)
            .expect(200);

        console.log("GET Status:", response.status);
        console.log("GET Body:", response.body);

        const validate = ajv.compile(getUsersSchema);
        const isValid = validate(response.body);

        expect(isValid, JSON.stringify(validate.errors)).to.equal(true);
        expect(response.body.page).to.equal(2);
        expect(response.body.data).to.be.an("array");
        expect(response.body.data.length).to.be.greaterThan(0);
        expect(response.body.data[0].email).to.be.a("string");
    });

    it("POST - Should create user and validate JSON schema", async function () {
        const payload = {
            name: "Ayu",
            job: "QA Engineer"
        };

        const response = await request(baseUrl)
            .post("/api/users")
            .set("x-api-key", apiKey)
            .send(payload)
            .expect(201);

        console.log("POST Status:", response.status);
        console.log("POST Body:", response.body);

        const validate = ajv.compile(postUserSchema);
        const isValid = validate(response.body);

        expect(isValid, JSON.stringify(validate.errors)).to.equal(true);
        expect(response.body.name).to.equal(payload.name);
        expect(response.body.job).to.equal(payload.job);
        expect(response.body.id).to.exist;
        expect(response.body.createdAt).to.exist;
    });

});