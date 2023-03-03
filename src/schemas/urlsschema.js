import Joi from 'joi';

export const urlsSchema = Joi.object({
    urls: Joi.link().required()
  });