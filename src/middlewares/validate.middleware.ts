import express from "express";
import Joi from "joi";
import httpStatus from "http-status";

// helpers
import { pick } from "../helpers/pick";
import ApiError from "../helpers/ApiError";

interface IValidateSchema {
  [key: string]: Joi.Schema;
}

// This middleware validates request body with given schema
export const validate =
  (schema: IValidateSchema) =>
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const validSchema = pick(schema, ["params", "query", "body"]);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" }, abortEarly: false })
      .validate(object);

    if (error) {
      const errorMessage = error.details
        .map((details) => details.message)
        .join(", ");
      return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    }
    Object.assign(req, value);
    return next();
  };
