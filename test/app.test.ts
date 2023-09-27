import { server } from '../src/server';
import request from 'supertest';

describe("gae_flex_quickstart", () => {
  describe("GET /", () => {
    it("should get 200", async () => {
      const response = await request(server).get("/");
      expect(response.status).toEqual(200);
    });

    it("should get Hello World", async () => {
      const response = await request(server).get("/");
      expect(response.text).toEqual("Hello, world!");
    });
  });
});
