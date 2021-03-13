module.exports = (app) => {
    const PATIENT = require('../controllers/patientController');
    app.group("/api/v1/patient", (router) => {
        router.get("/healthInfo", PATIENT.getHealthInfo);
    });
}