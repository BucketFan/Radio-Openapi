/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/healthcheck": {
    get: operations["get-healthcheck"];
  };
}

export interface components {}

export interface operations {
  "get-healthcheck": {
    responses: {
      /** OK */
      200: {
        content: {
          "text/plain": string;
        };
      };
    };
  };
}

export interface external {}
