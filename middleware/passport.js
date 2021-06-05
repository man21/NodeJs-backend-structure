const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const PassportConfig = require('./config').passport;
const UserModal = require('../api/user/model/user.model');

let hearderToken = ExtractJwt.fromAuthHeaderAsBearerToken();

const options = {};
options.secretOrKey = PassportConfig.secretOrKey;
options.jwtFromRequest = hearderToken;

module.exports = (req, res) => {
    req.use(new JwtStrategy(options, (jwt_payloads, done) => {
        UserModal.findOne({ email: jwt_payloads.email })
          .then((User) => {
            if (User) {
              req.user = { ...User}
              return done(null, req.user)              
            } else return done(null, false)
          })
          .catch((err) => console.log(err))
    }))
}