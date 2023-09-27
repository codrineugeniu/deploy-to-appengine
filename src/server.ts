import express from "express";

export const server = express();

server.get("/health/readiness", (_, res) => res.sendStatus(200));
server.get("/health/liveness", (_, res) => res.sendStatus(200));

server.get("/", (_, res) => {
  res.status(200).send("Hello, world!").end();
});
