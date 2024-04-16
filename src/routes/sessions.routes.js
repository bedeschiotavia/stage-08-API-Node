const { Router } = require("express");

const SessionsControler = require("../controllers/sessionsController")
const sessionsControler = new SessionsControler();

const sessionsRoutes = Router();
sessionsRoutes.post("/", sessionsControler.create);

module.exports = sessionsRoutes;