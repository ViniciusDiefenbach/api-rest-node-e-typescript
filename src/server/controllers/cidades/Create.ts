import { Request, Response } from 'express';
import * as yup from 'yup';

interface ICidade {
  nome: string;
  estado: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required(),
}); //Interface of Yup that we called bodyValidation

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
let validatedData: ICidade | undefined = undefined;
  try{
    await bodyValidation.validate(req.body, { abortEarly: false }); //Validation method used in Yup that get a object and validate it, returning a boolean
    validatedData = req.body
  } catch(error) {
    const yupError = error as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if (!error.path) return;
      errors[error.path] = error.message;
    });

    return res.json({
      errors
    });
  }

  return res.send(validatedData);
}