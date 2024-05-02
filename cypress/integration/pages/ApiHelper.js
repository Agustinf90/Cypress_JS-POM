
class ApiHelper {
    constructor() {
      this.apiUrl = Cypress.env('API_URL');
      this.apiKey = Cypress.env('API_KEY');
      this.apiToken = Cypress.env('API_TOKEN');
    }
  
    sendRequest(endpoint, params = {}) {
      const queryParams = {
        apikey: this.apiKey,
        apitoken: this.apiToken,
        ...params
      };
  
      return cy.request({
        method: 'GET',
        url: `${this.apiUrl}${endpoint}`,
        qs: queryParams,
      });
    }
  }
  
  export default ApiHelper;