// modules

// utils
import { response } from "../utils/response.mjs";
import { errors as errorCodes } from "../utils/errors.mjs";

export const handler = async (event) => {
  console.log("Received event:", JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from {{cookiecutter.ProjectName}}",
    }),
  };
};
