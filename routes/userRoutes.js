const express = require(`express`);
const router = express();
const controller = require(`../controllers/userController`);

router.get(`/`, controller.getUser).get(`/new`, controller.getForm);
router.post(`/new`, controller.addUser);
router.get(`/searchUser`, controller.searchUser);
router.get(`/search`, controller.search);

module.exports = router;
