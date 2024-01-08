import * as yup from 'yup';

export const userValidation = yup.object({
    username: yup.string().required(),
    password: yup.string().required().min(6),
})