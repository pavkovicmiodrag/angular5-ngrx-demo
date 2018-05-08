const PROXY_CONFIG = [
  {
    context: [
      "/api/*",
      "/oauth",
      "/ws"
    ],
    "target": "http://localhost:8080",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
