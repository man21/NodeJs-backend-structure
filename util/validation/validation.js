

const emailValidator = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

const passwordValidator = (password) =>  password.length > 5 && password.length < 20;

module.exports = {
  emailValidator,
  passwordValidator,
};
