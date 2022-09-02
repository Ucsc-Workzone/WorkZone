const { verify } = require("jsonwebtoken");
const jwt_token = require("jwt-decode");
const { validToken } = require("../utils/JWT");
module.exports = {
  verifyuser(accessToken) {
    if (!accessToken) {
      return 1;
    } else {
      try {
        const validToken = verify(accessToken, "Secret web Token");
        if (validToken) {
          req.authenticated = true;
          return 3;
        }
      } catch (err) {
        return 2;
      }
    }
  },

  verifyuserRole(accessToken) {
    const result = validToken(accessToken);
    if (result) {
      const decoded = jwt_token(accessToken);
      return decoded["userrole"];
    } else {
      return "invalid user";
    }
  },
};
