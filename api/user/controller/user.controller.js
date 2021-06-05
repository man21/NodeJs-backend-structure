const {userService} = require("../index")
const {statusCode} = require("../../../util/index")


/**
 * @access  Public
 * @Method  POST
 * @route   user/signup
 * @input   name, email, password
 * @desc    provide a signup
 */
 const signup =  async (req, res) => {
    var body = req.body
    if (!body.name || !body.email || !body.password) return res.status(400).send({ message: statusCode.BAD_REQUEST })

    var emailValidation = validation.emailValidator(body.email) 
    if (!emailValidation) return res.status(400).send({ message: statusCode.INVALID_EMAIL_FORMAT })  
          
    var passwordValidation = validation.passwordValidator(body.password)
    if (!passwordValidation) return res.status(400).send({ message: statusCode.INVALID_PASSWORD_FORMAT })
      
    const {error, status, result} = await userService.signup(body)
    if(error) return res.status(status).send(error)
    else res.status(status).send(result)
  }

  module.exports ={
      signup
  }