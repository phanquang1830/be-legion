const EventService = require("../services/EventService");

let getAllEventController = async (req, res) => {
  try {
    let events = await EventService.getAllEvent();
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({
      message: "Error from server",
      error: error.message,
    });
  }
};
let getOneEventController = async (req, res) => {
  try {
    let id = req.query.id;
    if (!id) {
      return res.status(400).json({
        message: "Missing id",
      });
    }
    let event = await EventService.getOneEvent(+id);
    return res.status(200).json(event);
  } catch (error) {
    return res.status(500).json({
      message: "Error from server",
      error: error.message,
    });
  }
};
module.exports = {
  getAllEventController,
  getOneEventController,
};
