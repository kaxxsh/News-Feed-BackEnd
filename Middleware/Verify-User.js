import { badRequest } from "../error/index.js";

const verifyUser = (...role) => {
  return (req, res, next) => {
    try {
      if (
        req.user.payload.id === req.params.id &&
        role.includes(req.user.payload.role)
      ) {
        next();
      } else {
        throw new badRequest("authorization failed");
      }
    } catch (error) {
      next(error);
    }
  };
};

export { verifyUser };
