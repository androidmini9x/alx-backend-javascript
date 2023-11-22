function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, _) => {
    if (success === true) {
      resolve({ data: 'Successful response from the API' });
    }
  });
}

module.exports = getPaymentTokenFromAPI;
