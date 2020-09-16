const routes = require('express').Router();
const authMiddleware = require('./app/middleware/auth');

const SessionController = require('./app/controllers/SessionController');


routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => {
    return res.status(200).send()
});

//User.create({ name: 'Kamila', email: 'vkamila54@gmail.com', password_hash: '1111111', avatar: 'hhhh', whatsapp: '122393939', bio: 'hdsfhhhhhhhhhhhhhhhhhhhhhhs' });
//Class.create({ subject: 'Matemática', cost: 12.5, user_id: 1 });
//ClassesSchedule.create({ week_day: 1, from: 12, to: 34, class_id: 1 });
//Connection.create({ user_id: 1 });

module.exports = routes;