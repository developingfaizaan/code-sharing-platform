const Joi = require("joi");

const signupValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(50),
    email: Joi.string().required().email().max(320),
    password: Joi.string().required().min(6),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email().max(320),
    password: Joi.string().required().min(6),
  });

  return schema.validate(data);
};

module.exports = {
  signupValidation,
  loginValidation,
};
