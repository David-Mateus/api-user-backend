import * as yup from 'yup';

export const posterValidation = yup.object({
    singerUsername: yup.string().required()
})