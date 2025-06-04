const axios = require('axios');
const CircuitBreaker = require('opossum');

const forwardRequest = (req) => {
  return axios({
    method: req.method,
    url: `http://localhost:4002${req.originalUrl}`,
    headers: req.headers,
    data: req.body
  });
};

const breaker = new CircuitBreaker(forwardRequest, {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 5000
});

breaker.fallback(() => ({
  status: 503,
  data: { message: 'Fallback do user: serviço indisponível.' }
}));

module.exports = breaker;
