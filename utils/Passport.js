const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { JWT_SIGNATURE_KEY } = require("../config/appConfig");
const { User } = require("../models");

passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromHeader("Authorization"),
			secretOrKey: JWT_SIGNATURE_KEY,
		},
		async (payload, done) => {
			try {
				const user = await User.findById(payload.sub);
				if (!user) {
					console.log(payload);
					return done(null, false);
				}
				return done(null, user);
			} catch (error) {
				done(error, false);
			}
		}
	)
);
