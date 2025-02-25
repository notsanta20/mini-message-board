const express = require(`express`);
const router = express();
const controller = require(`../controllers/userController`);

router.get(`/`, controller.getUser).get(`/new`, controller.getForm);
router.post(`/new`, controller.addUser);

module.exports = router;
