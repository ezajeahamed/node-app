const express = require('express');
const router = express.Router();
const multer = require('multer');
const ApiController = require('../controllers/api-controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/user')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
});

const uploadFile = multer({ storage: storage })

router.post('/login', ApiController.login);

router.get('/user/list', ApiController.getUser);
router.post('/user/add', uploadFile.any(), ApiController.addUser);
router.get('/user/info/:id', ApiController.getSingleData);
router.post('/user/update', ApiController.updateUser);
router.get('/user/delete/:id', ApiController.deleteUser);

module.exports = {
    route: router
}