const express = require("express");
const router = express.Router();
const EventController = require("../controllers/EventController");

const innitEventRoute = (app) => {
  router.get("/api/get-all-event", EventController.getAllEventController);
  router.get("/api/get-one-event", EventController.getOneEventController);
  return app.use("/", router);
};
module.exports = innitEventRoute;
