class homeSaucePage {
    constructor() {
        this.usernameValid = 'standard_user';
        this.passwordValid = 'secret_sauce';
        this.usernameInvalid = 'standard_user_invalid';
        this.passwordInvalid = 'secret_sauce_invalid';
        this.apiUrl = Cypress.env('url');
    }
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]'),
    }
    visit() {
        cy.visit(this.apiUrl);
    }

    typeUsername(username){
        this.elements.usernameInput().type(username)
    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }
    
    clickLogin(){
        this.elements.loginBtn().click();
    }

    getErrorMessage(){
        this.elements.errorMessage();
    }

    getErrorMessageText(){
    return this.elements.errorMessage().invoke('text').then(text => text.trim());
    }

    login(username, password) {
        this.visit();
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }

}

module.exports = new homeSaucePage ();