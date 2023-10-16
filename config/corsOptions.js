const whitelist = [
    "http://127.0.0.1:5177",
    "http://127.0.0.1:5173",
    "http://0.0.0.0",
    "http://127.0.0.1:5174",
    "https://sore-blue-turtle-hat.cyclic.app",
  ];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    origin: true,
  };
  
  module.exports = corsOptions;
  