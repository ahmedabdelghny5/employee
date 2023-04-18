import Joi from "joi";


export const signUpValidate={
    body: Joi.object().required().keys({
        name: Joi.string().min(2).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(4).max(50),
        address: Joi.string().required(),
        jobTitle: Joi.string().required(),
        hireDate: Joi.string().required(),
        branch: Joi.string().required(),
        gender: Joi.string().required(),
    })
}
export const signInValidate={
    body: Joi.object().required().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(4).max(50),  
    })
}
export const tokenValidate={
    params: Joi.object().required().keys({
        token: Joi.string().required(),
    })
}
export const emailValidate={
    body: Joi.object().required().keys({
        email: Joi.string().email().required(),
    })
}