const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post(
    '/signup', 
    [
        check('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom((value, {req}) => {
                if (value === 'test@test.com') {
                    throw new Error('This email address if forbidden.')
                }
                return true;
            }), 
        body('password')
        .isLength({min: 5})
        .withMessage(
            'Please enter a password with only numbers and text and at least 5 characters.'
            )
        .isAlphanumeric(),
        body('confirmpassword').custom((value, {req}) => {
            if(value !== req.body.password) {
                throw new Error('Password have to match!');
            }
            return true;
        })        
    ],
    authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

module.exports = router;