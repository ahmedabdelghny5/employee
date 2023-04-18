import { Router } from "express";
import { auth } from "../../middleWare/auth.js";
import { validate } from "../../middleWare/validation.js";
import { multerValidation, myMulterCloud } from "../../utils/multer.js";
import { multerValidations, myMulterLocal } from "../../utils/multerLocal.js";
const router = Router();
import *  as uc from './user.controller.js'
import *  as UV from "./userValidate.js";

router.post('/signUp', validate(UV.signUpValidate), uc.signUp)
router.post('/signIn', validate(UV.signInValidate), uc.signIn)
router.get('/confirmEmail/:token', validate(UV.tokenValidate), uc.confirmEmail)
router.get('/refToken/:token', validate(UV.tokenValidate), uc.refToken)
router.put('/logOut', validate(UV.emailValidate), uc.logOut)
router.get('/getUser/:branch', auth(['user', 'admin']), uc.getUser)
router.post('/addFile', auth(['user']), myMulterCloud(multerValidation.pdf).array('files'), uc.addFile)
router.delete('/deleteFile', auth(['user']), uc.deleteFile);
router.post('/addFiles', auth(['user']),
    myMulterLocal('user', multerValidations.pdf).single('files'), uc.addFiles)
router.delete('/deleteBookPic/:fileId', auth(['user']),uc.deleteFilePicFn);

export default router  