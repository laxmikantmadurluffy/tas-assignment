module.exports = (app) => {
    const LOGIN = require('../controllers/loginController');
    app.group("/api/v1/login", (router) => {
        router.post("/login", LOGIN.login);
    });
}