const { event } = require("../models/Event");
let getAllEvent = () => {
  return {
    errCode: 0,
    errMessage: "Get all events successfully (mocked data)",
    events: event,
  };
};
const getOneEvent = (id) => {
  const found = event.find((e) => e.id === id);
  if (found) {
    return {
      errCode: 0,
      errMessage: "Get event successfully",
      event: found,
    };
  } else {
    return {
      errCode: 1,
      errMessage: "Event not found",
      event: null,
    };
  }
};
module.exports = { getAllEvent, getOneEvent };
