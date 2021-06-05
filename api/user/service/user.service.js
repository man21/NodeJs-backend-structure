
const { statusCode } = require("../../../util/index");

const signup = async (data) => {
  try {
   
    //Business Logic
  } catch (error) {
    return {error: statusCode.INTERNAL_SERVER_ERROR, status: 500,result: null};
  }
};

module.exports = {
  signup,
};
