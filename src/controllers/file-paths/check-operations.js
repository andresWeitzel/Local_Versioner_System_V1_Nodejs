//External
require("dotenv").config();
//Services
const { checkFolderExistFromPathService } = require("../../services/file-paths/check-operations");
//Enums
const { statusCode } = require("../../enums/http/status-code");
//Const-vars
let msg;
let code;
let check;
const statusCodeInternalServerError = statusCode.INTERNAL_SERVER_ERROR;
const statusCodeBadRequest = statusCode.BAD_REQUEST;
const statusCodeOk = statusCode.OK;

const checkFolderExistFromPathController = async (req, res) => {
    try {
      check = await checkFolderExistFromPathService(req);
      code = statusCodeOk;
      res.status(code).send(check);
    } catch (error) {
      code = statusCodeInternalServerError;
      msg = `Error in checkFolderExistFromPathController() function. Caused by ${error}`;
      console.log(msg);
      res.status(code).send(msg);
    }
  };
  
  module.exports = {
    checkFolderExistFromPathController
  };