const axios = require('axios');
const CircuitBreaker = require('opossum');

const forwardRequest = (req) => {
  return axios({
    method: req.method,
    url: `http://localhost:4003${req.originalUrl}`,
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
  data: { message: 'Fallback do product: serviço indisponível.' }
}));

module.exports = breaker;
