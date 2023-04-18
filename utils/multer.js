import multer from "multer";
import path from 'path'
import { AppError } from "./AppError.js";

export const multerValidation = {
    image: ['image/jpeg', 'image/png', "image/gif"],
    pdf: ["application/pdf","application/zip","application/x-gzip",
    "application/vnd.ms-excel","application/msword","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]
}


export function myMulterCloud(customValidation) {
    if (!customValidation) {
        customValidation = multerValidation.pdf
    }
    const storage = multer.diskStorage({})

    // const ext = path.extname(file.originalname).toLowerCase()
    function fileFilter(req, file, cb) {
        if (customValidation.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new AppError("invalid format", 400), false)
        }
    }


    const upload = multer({ fileFilter, storage })
    return upload
}