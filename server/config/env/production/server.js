module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),

  "user-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
});
